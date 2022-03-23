const dotenv = require('dotenv');
dotenv.config();
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function(event, context) {
  const {cart, total_amount, shipping_free} = JSON.parse(event.body);

  const calOrderAmount = () => {
    return total_amount + shipping_free;
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calOrderAmount(),
      currency: 'usd',
    })

    return {
      statusCode: 200,
      body: JSON.stringify({clientSecret: paymentIntent.client_secret}),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({error: error.message}),
    }
  }
}