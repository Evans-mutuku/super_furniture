const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HeJNDK860DkztEz6AO2xQRmY7ZObIPc57RoDX3a83YhEctV2rM5a9FOIeN1Tr5miGCa9TybC3JYWeevk3iSpe5u00WlMcnLrt")

const app = express();

app.use(cors( {origin: true}));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment recieved ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);