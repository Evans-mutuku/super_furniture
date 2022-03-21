import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { useStateValue } from '../Utils/StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import {getBasketTotal} from '../Utils/reducer'
import axios from '../Utils/axios'
import { db } from '../Utils/firebase'
import CurrencyFormat from 'react-currency-format'

const CheckOutProduct =({id, image,title, description, price, rating, hideButton}) => {
    const [{basket}, dispatch] =  useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }


    return(
        <main className='bg-white flex justify-around p-5 mb-3 w-full'>
             <img className="mt-5 w-80 " src={image} />

            <div className="ml-20">
                <p className="font-semibold mb-2 text-xl">{title}</p>
                <p className="">{description}</p>
                <p className="checkoutProject__price">
                    <small>ksh </small>
                    <strong>{price}</strong>
                </p>
                <div className="flex mt-2 mb-2">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                {!hideButton && (
                    <button className='bg-orange-500 mt-12 p-2 text-white rounded-sm' onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </main>
    )
}

const Payment = () => {
    const navigate = useNavigate()
    const [{basket, user}, dispatch] = useStateValue();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setclientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

   useEffect(() => {
        //Stripe secret to charge the customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `payments/create?total=${getBasketTotal(basket)}`
            })
            setclientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    console.log('THE SECRET IS >>>', clientSecret)


    const handleSubmit = async (e) => {
        // stripe stuff
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then( async ({ paymentIntent}) => {
            //PaymentIntent = Payment Confirmation
            try {
                console.log("Payment Intent:", paymentIntent);
                console.log("Basket:", basket);

                await db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            } catch (error) {
                console.log(error)
            }
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            
            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders')

        })
    }

    const handleChange =e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message: "");
    }
  
  return (
    <main className='pt-24 mx-wd mx-auto'>
        <h2 className='flex text-2xl'>Items to pay <p onClick={() => navigate('/checkout')} className='text-orange-500 ml-3'>( {basket?.length} items)</p> </h2>
        <section className='bg-white mt-7 p-3'>
            <h2 className='text-gray-900 font-bold  text-xl'>Review items and delivery</h2>
            <div className='ml-48 mb-5 '>
             {basket.map(item => (
                <CheckOutProduct 
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                />
            ))}
            </div>
        </section>
        <section className='mt-8 p-3 bg-white flex flex-wrap'>
            <h2 className='text-gray-900 font-bold  text-xl'>Payment Method</h2>
            <div className='w-1/3'>
                <form className='ml-32 w-full' onSubmit={handleSubmit} >
                    <CardElement onChange={handleChange} />
                    <div className="mt-3 ">
                        <CurrencyFormat
                            renderText={(value) => (
                                <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)} displayType={"text"}
                            thousandSeparator={true} prefix={"ksh "}
                        />
                        <button className='bg-orange-500 cursor-pointer p-2 mt-3 w-full text-white' disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : "Purchase Now"} </span>
                        </button>
                    </div>
                    {error && <div className='text-orange-700'>{error}</div>}
                </form>
                   
            </div>
        </section>
        <section></section>
    </main>
  )
}

export default Payment