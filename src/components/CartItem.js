import { FaTrash } from 'react-icons/fa';
import { AmountButton } from '../components';
import { useCartContext } from '../context/cart_context';
import { formatPrice } from '../utils/helpers';

function CartItem({id, color, amount, image, name, price}) {
    const {removeCartItem, toggleAmount} = useCartContext();

    return (
        <div className='cartItem'>
            <div className='cartItem__info'>
                <img src={image} className='cartItem__info__img' alt='img' />
                <div className='cartItem__info__content'>
                    <h3 className='cartItem__info__content__name'>
                        {name}
                    </h3>
                    <p className='cartItem__info__content__color'>
                        Color: <span style={{backgroundColor: `${color}`}}></span>
                    </p>
                    <p className='cartItem__info__content__price'>{formatPrice(price)}</p>
                </div>
            </div>
            <p className='cartItem__price hide'>{formatPrice(price)}</p>
            <AmountButton amount={amount} increase={()=> toggleAmount(id, 'inc')} decrease={() => toggleAmount(id, 'dec')} />
            <p className='cartItem__subtotal hide'>
                {formatPrice(price*amount)}
            </p>
            <button 
                className='cartItem__remove'
                onClick={() => removeCartItem(id)}
            ><FaTrash /></button>
        </div>
    )
}

export default CartItem;