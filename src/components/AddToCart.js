import {useState, useEffect} from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import { useProductsContext } from '../context/products_context';
import { AmountButton } from '../components';

function AddToCart({id}) {
    const [count, setCount] = useState(1);
    const [color, setColor] = useState();
    const {addToCart} = useCartContext();
    const { single_product } = useProductsContext(); 

    const { stock, colors } = single_product;


    const decrease = () => {
        setCount((preCount => {
            const newCount = preCount - 1;
            if(newCount <= 0){
                return 1;
            }else{
                return newCount;
            }
        }))
    }
    
    const increase = () => {
        setCount((preCount => {
            const newCount = preCount + 1;
            if(newCount >= stock){
                return stock === 0 ? 1 : stock;
            }else{
                return newCount;
            }
        }))
    }

    useEffect(() => {
        // if(colors){
            colors&&setColor(colors[0]);
        // }
    }, [colors]);

    return (
        <div className='addToCart'>
            {
                stock > 0 ?
                <>
                    <div className='addToCart__colors'>
                        <h5>Colors: </h5> {
                            colors ?
                            colors.map((c, index) => (
                                <div 
                                    className={`addToCart__colors__item ${color && color === c ? 'active' : null}`} 
                                    key={index}
                                    style={{backgroundColor: `${c}`}}
                                    onClick={() => setColor(c)}
                                >
                                    {color && color === c ? <FaCheck /> : ''}
                                </div>
                            ))
                            : ''
                        }
                    </div>
                    <AmountButton amount={count} increase={increase} decrease={decrease} />
                </> : <h3 className='addToCart__notify'>Out Of Stock</h3>
            }
            {
                stock > 0 ? 
                <Link 
                    to='/cart'
                    className='addToCart__btn btn'
                    onClick={()=> addToCart(id, color, count, single_product)}
                >
                    add to cart
                </Link> :
                <Link 
                    to='/products'
                    className='addToCart__btn btn'
                >
                    buy different products
                </Link>
            }
        </div>
    )
}

export default AddToCart;