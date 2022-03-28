import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { RoutePage, StripeCheckout } from '../components';

function Checkout({path}) {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  return (
    <>
        <RoutePage path={path} />
        <div className='checkout'>
            <Elements stripe={stripePromise}>
                <StripeCheckout />
            </Elements>
        </div>
    </>
  )
}

export default Checkout;