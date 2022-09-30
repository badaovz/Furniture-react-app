import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

function CartBill() {
    const { total_amount, shipping_fee, cart} = useCartContext();
    const {myUser, loginWithRedirect} = useUserContext();
    const isShippingFee = cart.every(cartItem => cartItem.shipping);
    console.log('CartLength: ', isShippingFee.length)
    console.log('Cart: ', cart)

    return (
        <div className='cartBill'>
            <div className='cartBill__container'>
                <div className='cartBill__container__content'>
                    <h5 className='cartBill__container__content__subtotal'>
                        <span>Subtotal:</span> <span>{formatPrice(total_amount)}</span>
                    </h5>
                    <p className='cartBill__container__content__ship'>
                        <span>Shipping Fee:</span> <span className={isShippingFee ? 'cartBill__container__content__ship--free': ''}>{
                            isShippingFee ? 'Free ship' :
                            formatPrice(shipping_fee)
                        }</span>
                    </p>
                    <hr />
                    <h2 className='cartBill__container__content__orderTotal'>
                        <span>Order Total:</span> <span>{
                        isShippingFee ? 
                        formatPrice(total_amount) : formatPrice(total_amount + shipping_fee)}</span>
                    </h2>
                </div>
                {
                    myUser ? 
                    <Link to='/checkout' className='cartBill__container__btn btn'>
                        payment
                    </Link> :
                    <button 
                        className='cartBill__container__btn btn'
                        onClick={loginWithRedirect}
                    >
                        Login
                    </button>
                }
                
            </div>
        </div>
    )
}

export default CartBill