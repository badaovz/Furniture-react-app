import React, {useEffect, useState, useRef} from 'react'
import {useParams} from 'react-router-dom';
import {useProductsContext} from '../context/products_context';
import {useCartContext} from '../context/cart_context';
import {single_product_url as url} from '../utils/constants';
import Loading from '../components/Loading';
import RoutePage from '../components/RoutePage';
import {Link} from 'react-router-dom';
import {FaStar, FaRegStar, FaCheck, FaMinus, FaPlus} from 'react-icons/fa'
import { formatPrice } from '../utils/helpers';
import Error from '../components/Error';

function SingleProduct({path}) {
    const [count, setCount] = useState(1);
    const [color, setColor] = useState();
    const [indexPreview, setIndexPreview] = useState(0);
    const {addToCart} = useCartContext();
    const {fetchSingleProduct, single_product_error, single_product, single_product_loading} = useProductsContext(); 
    const {Id} = useParams();

    const starRef = useRef(null);
    
    console.log('SingProduct: ', single_product)

    const {name, stars, stock, reviews, price, images, description, company, colors, category} = single_product;

    let newpath = [...path, `/${name}`]

    const handleDesClick = () => {
        setCount((preCount => {
            const newCount = preCount - 1;
            if(newCount <= 0){
                return 1;
            }else{
                return newCount;
            }
        }))
    }
    
    const handleIncClick = () => {
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
        fetchSingleProduct(`${url}${Id}`);
           
    },[]);

    useEffect(() => {
        if(colors){
            setColor(colors[0]);
        }
    }, [colors]);

    useEffect(() => {
        const percent = (stars/5 * 100);
        console.log('StarRef: ', percent)
        starRef.current.style.width = `${percent}%`;
    }, [stars]);

    if(single_product_loading) {
        return <Loading />
    }

    if(single_product_error) {
        return <Error />
    }

    return (
    <div className='singleProduct'>
        <RoutePage path={newpath} />
        <Link to='/products'>
            <button className='singleProduct__backProduct btn'>
                back to products
            </button>
        </Link>
        <div className='singleProduct__container'>
            <div className='singleProduct__container__images'>
                <img className='singleProduct__container__images__big' src={images ? images[indexPreview].thumbnails.large.url : ''} alt='imgBig' />
                <div className='singleProduct__container__images__small'>
                    {
                        images ? images.map((image, index) => (
                            <img 
                                className={`singleProduct__container__images__small__item ${index === indexPreview ? 'active' : ''}`} 
                                src={image.thumbnails.large.url} 
                                alt='smallImg' 
                                key={image.id}
                                onClick={() => setIndexPreview(index)}    
                            />
                        ))
                        : ''
                    }
                </div>
            </div>
            <div className='singleProduct__container__info'>
                <h3 className='singleProduct__container__info__name'>
                    {name}
                </h3>
                <div className='singleProduct__container__info__rate'>
                    <div className='singleProduct__container__info__rate__stars'>
                        <ul className='singleProduct__container__info__rate__stars-empty'>
                            <li><FaRegStar /></li>
                            <li><FaRegStar /></li>
                            <li><FaRegStar /></li>
                            <li><FaRegStar /></li>
                            <li><FaRegStar /></li>
                        </ul>
                        <ul className='singleProduct__container__info__rate__stars-full' ref={starRef}>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                        </ul>
                    </div>
                    <span>({reviews} customer reviews)</span>
                </div>
                <h5 className='singleProduct__container__info__price'>{formatPrice(price)}</h5>
                <p className='singleProduct__container__info__description'>
                    {description}
                </p>
                <div className='singleProduct__container__info__item'>
                    <h5>Available: </h5>
                    <p>{stock ? 'In Stock' : 'No Available'}</p>
                </div>
                <div className='singleProduct__container__info__item'>
                    <h5>SKU: </h5> 
                    <p>{Id}</p>
                </div>
                <div className='singleProduct__container__info__item'>
                    <h5>Brand: </h5>
                    <p>{company}</p>
                </div>
                <hr/>
                <div className='singleProduct__container__info__colors'>
                    <h5>Colors: </h5> {
                        colors ?
                        colors.map((c, index) => (
                            <div 
                                className='singleProduct__container__info__colors__item' 
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
                <div className='singleProduct__container__info__count'>
                    <button 
                        className='singleProduct__container__info__count__dec'
                        onClick={handleDesClick}
                    ><FaMinus /></button>
                        <h3>{count}</h3>
                    <button 
                        className='singleProduct__container__info__count__inc'
                        onClick={handleIncClick}
                    ><FaPlus /></button>
                </div>
                <Link to='/cart'>
                    <button 
                        className='singleProduct__container__info__btn btn'
                        onClick={()=> addToCart(Id, color, count, single_product)}
                    >
                        add to cart
                    </button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default SingleProduct;