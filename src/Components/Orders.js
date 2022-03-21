import React from 'react'
import CurrencyFormat from 'react-currency-format';
import moment from 'moment'
import { useStateValue } from '../Utils/StateProvider';

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
                    <button className='bg-orange-500 mt-12 p-2 pl-2 text-white rounded-sm' onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </main>
    )
}

const Orders = ({order}) => {
  return (
    <main className='pt-24 mx-wd mx-auto min-h'>
        <section>
            <h2 className='text-2xl font-bold'>Your Orders</h2>
            <h2>Order</h2>
            {/* <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p> */}
            <p className='order__id'>
                {/* <small>{order.id}</small> */}
            </p>
            {order.data.basket?.map(item => (
                <CheckOutProduct 
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    hideButton
                />
            ))}
        </section>
           {/* <CurrencyFormat 
                renderText={(value) => (
                    <h3 className='order__total'>Order Total: {value}</h3>
                )}
                decimalScale={2} 
                value={order.data.amount / 100} 
                displayType={"text"}
                thousandSeparator={true} prefix={"$"}
            /> */}
    </main>
  )
}

export default Orders