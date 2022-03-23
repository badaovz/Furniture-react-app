import React from 'react'
import homeImg from '../assets/home-img.jpeg';
import homeImg2 from '../assets/home-img-2.jpeg';
import {useProductsContext} from '../context/products_context';
import Product from '../components/Product';
import {services} from '../utils/constants';
import Service from '../components/Service';
import {Link} from 'react-router-dom';


function Home() {
  const {featured_products} = useProductsContext();
  console.log(featured_products);
  return (
    <div className='home'>
      <section className='home__header'>
        <div className='home__header__left'>
          <h3 className='home__header__left__title'>
            Design Your Comfort Zone
          </h3>
          <p className='home__header__left__text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
          </p>
          <Link to='/products'>
            <button className='home__header__left__btn btn'>
              Shop Now
            </button>
          </Link>
        </div>
        <div className='home__header__right'>
          <img className='home__header__right__img' src={homeImg} alt='logo'/>
          <img className='home__header__right__img-2' src={homeImg2} alt='logo'/>
        </div>
      </section>

      <section className='home__featuredProduct'>
        <div className='home__featuredProduct__title'>
          <h3 className='home__featuredProduct__title__text'>
            Featured Products
          </h3>
          <div className='home__featuredProduct__title__underline'></div>
        </div>
        <div className='home__featuredProduct__products'>
          {
            featured_products.map(product => (
              <Product {...product} key={product.id}/>
            ))

          }
        </div>
        <Link to='/products'>
          <button className=' home__featuredProduct__btn btn'>
            All Products
          </button>
        </Link>
      </section>

      <section className='home__services'>
        <div className='home__services__header'>
          <h3 className='home__services__header__title'>
            Custom Furniture Built Only For You
          </h3>
          <p className='home__services__header__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.
          </p>
        </div>
        <div className='home__services__content'>
          {
            services.map(service => (
              <li className='home__services__content__item' key={service.id}>
                <Service {...service} />
              </li>
            ))
          }
        </div>
      </section>

      <section className='home__sales'>
        <h3 className='home__sales__title'>
          Join our newsletter and get 20% off
        </h3>
          
        <div className='home__sales__content'>
          <p className='home__sales__content__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
          </p>
          <form className='home__sales__content__form'>
            <input 
              className='home__sales__content__form__input'
              type='email'
              placeholder='Enter email'
            />
            <button className='home__sales__content__form__btn '>subscribe</button>
          </form>
        </div>  
      </section>
    </div>
  )
}

export default Home