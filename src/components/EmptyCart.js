import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='emptyCart'>
        <h3 className='emptyCart__title'>
            Your cart is empty
        </h3>
        <Link to='/products' className='emptyCart__btn btn'>
            fill it
        </Link>
    </div>
  )
}

export default EmptyCart;