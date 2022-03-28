import { Link } from 'react-router-dom';
import homeImg from '../assets/home-img.jpeg';
import homeImg2 from '../assets/home-img-2.jpeg';

function Hero() {
    return (
        <section>
            <div className='hero'>
                <div className='hero__left'>
                    <h3 className='hero__left__title'>
                        Design Your <br/>
                        Comfort Zone
                    </h3>
                    <p className='hero__left__text'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Iusto, at sed omnis corporis doloremque possimus velit! 
                        Repudiandae nisi odit, aperiam odio ducimus, obcaecati 
                        libero et quia tempora excepturi quis alias?
                    </p>
                    <Link to='/products' className='hero__left__btn btn'>
                        Shop Now
                    </Link>
                </div>
                <div className='hero__right'>
                    <img className='hero__right__img' src={homeImg} alt='logo'/>
                    <img className='hero__right__img-2' src={homeImg2} alt='logo'/>
                </div>
            </div>
        </section>
    )
}

export default Hero;