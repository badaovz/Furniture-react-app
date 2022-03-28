import Service from './Service';
import {services } from '../utils/constants';

function Services() {
    return (
        <div className='services'>
            <section>
                <div className='services__header'>
                    <h3 className='services__header__title'>
                        Custom Furniture <br />
                        Built Only For You
                    </h3>
                    <p className='services__header__text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Saepe dolorum debitis consectetur reprehenderit non aliquam 
                        voluptates dolore aut vero consequuntur.
                    </p>
                </div>
                <div className='services__content'>
                    {
                        services.map(service => (
                            <li className='services__content__item' key={service.id}>
                                <Service {...service} />
                            </li>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Services;