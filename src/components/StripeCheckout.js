import { useState, useEffect} from 'react';
import {
    CardElement, useElements, useStripe
} from '@stripe/react-stripe-js';
import {useCartContext} from '../context/cart_context';
import {useNavigate} from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
import { useUserContext } from '../context/user_context';
import axios from 'axios'

function StripeCheckout() {
    const {cart, clearCart, total_amount, shipping_fee} = useCartContext();
    const [succeeded, setSucceeded] =  useState(false);
    const [error, setError] =  useState(null);
    const [disabled, setDisabled] =  useState(true);
    const [processing, setProcessing] =  useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate();
    const { myUser } = useUserContext();
    
    // const 
    
    const stripe = useStripe();
    const elements = useElements();

    const createPaymentIntent = async () => {
        try {
            const { data } = await axios.post(
                '/.netlify/functions/create-payment-intent',
                JSON.stringify({cart, shipping_fee, total_amount})
            )
            setClientSecret(data.clientSecret);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        createPaymentIntent();
    }, [])

    const handleChange = async (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        })
        console.log('vao day')
        if(payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
            setTimeout(() => {
                clearCart();
                return navigate('/');
            }, 10000)
        }

    }

    return (
        <div className='stripeCheckout'>
            {
                succeeded ?
                <div className='stripeCheckout__notify'>
                    <h4>Thank you!</h4>
                    <h4>Your payment was successful!</h4>
                    <h4>Redirecting to home page shortly!</h4>
                </div> :
                <div className='stripeCheckout__info'>
                    <h3 className='stripeCheckout__info__name'>
                        Hello, {myUser && myUser.name}
                    </h3>
                    <p className='stripeCheckout__info__amount'>
                        Your total is {formatPrice(total_amount + shipping_fee)}
                    </p>
                </div>
            }
            <form className='stripeCheckout__form' onSubmit={handleSubmit}>
                <CardElement 
                    className='stripeCheckout__form__cardElement'
                    onChange={handleChange}
                />
                <button 
                    className='stripeCheckout__form__btn btn' 
                    type='submit' 
                    disabled={processing || disabled || succeeded}
                >
                    <span className='stripeCheckout__form__btn__content'>
                        {
                            processing ? 
                            <div 
                                className='stripeCheckout__form__btn__content__spinner'
                            ></div> :
                            'Pay'
                        }
                    </span>
                </button>
                {
                    error && (
                        <div className='stripeCheckout__form__error' role='alert'>
                            {error}
                        </div>
                    )
                }
                {
                    <p className={`stripeCheckout__form__result-message ${succeeded ? '' : 'hidden'}`}>
                        Payment succeeded, see the result in your
                        <a href={`https://dashboard.stripe.com/test/payments`}>
                            {' '}
                            Stripe dashboard
                        </a>{' '}
                        refresh the page to pay again.
                    </p>
                }
            </form>
        </div>
    )
}

export default StripeCheckout;