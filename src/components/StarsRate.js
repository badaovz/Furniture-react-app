import { useRef, useEffect } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

function StarsRate({single_product}) {
    const starRef = useRef(null);
    const { stars, reviews } = single_product;
    
    useEffect(() => {
        const percent = (stars/5 * 100);
        console.log('StarRef: ', percent)
        starRef.current.style.width = `${percent}%`;
    }, [stars]);
            
    return (
        <div className='starsRate'>
            <div className='starsRate__stars'>
                <ul className='starsRate__stars-empty'>
                    <li><FaRegStar /></li>
                    <li><FaRegStar /></li>
                    <li><FaRegStar /></li>
                    <li><FaRegStar /></li>
                    <li><FaRegStar /></li>
                </ul>
                <ul className='starsRate__stars-full' ref={starRef}>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                </ul>
            </div>
            <span>({reviews} customer reviews)</span>
        </div>
    )
}

export default StarsRate;