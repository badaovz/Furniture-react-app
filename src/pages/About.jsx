import React from 'react'
import RoutePage from '../components/RoutePage'
import homeImg from '../assets/home-img.jpeg';

function About({path}) {

  return (
    <div className='about'>
      <RoutePage path={path} />
      <div className='about__container'>
        <img className='about__container__img' src={homeImg} alt='img'/>
        <div className='about__container__content'>
          <h3 className='about__container__content__title'>
            Our Story
          </h3>
          <div className='about__container__content__underline'></div>
          <p className='about__container__content__text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
          </p>
        </div>
      </div>  
    </div>  
  )
}

export default About