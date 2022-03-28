import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

function CartBill() {
    const { total_amount, shipping_fee} = useCartContext();
    const {myUser, loginWithRedirect} = useUserContext();


    return (
        <div className='cartBill'>
            <div className='cartBill__container'>
                <div className='cartBill__container__content'>
                    <h5 className='cartBill__container__content__subtotal'>
                        <span>Subtotal:</span> <span>{formatPrice(total_amount)}</span>
                    </h5>
                    <p className='cartBill__container__content__ship'>
                        <span>Shipping Free:</span> <span>{formatPrice(shipping_fee)}</span>
                    </p>
                    <hr />
                    <h2 className='cartBill__container__content__orderTotal'>
                        <span>Order Total:</span> <span>{formatPrice(total_amount + shipping_fee)}</span>
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