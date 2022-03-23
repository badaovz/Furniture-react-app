import React from 'react';
import logo from '../assets/logo.svg';
import {FaTimes, FaShoppingCart, FaUserPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import {links} from '../utils/constants';
import {useProductsContext} from '../context/products_context';
import {useCartContext} from '../context/cart_context';

function Sidebar() {
    const {isSidebarOpen, closeSidebar} = useProductsContext();
    const {total_items} = useCartContext();

    return (
        <div className={`sidebar ${ isSidebarOpen ? 'show' : ''}`}>
            <div className='sidebar__header'>
                <Link to='/'>
                    <img 
                        src={logo} 
                        className='sidebar__header__logo' 
                        alt='logo' 
                        onClick={closeSidebar}    
                    />
                </Link>
                <button
                    className='sidebar__header__close'
                    onClick={closeSidebar}
                ><FaTimes /></button>
            </div>
            <div className='sidebar__links'>
                <ul>
                    {
                        links.map(link => (
                            <li 
                                className='sidebar__links__link' 
                                key={link.id}
                                onClick={closeSidebar}
                            >
                                <Link  to={link.url}>{link.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='sidebar__cart-login'>
                <Link 
                    className='sidebar__cart-login__cart' 
                    to='/cart'
                    onClick={closeSidebar}
                >
                    Cart 
                    <span className='sidebar__cart-login__cart__icon'>
                        <FaShoppingCart />
                        <span className='sidebar__cart-login__cart__icon__total'>{total_items}</span>
                    </span>
                </Link>

                <button className='sidebar__cart-login__login'>
                    Login
                    <span className='sidebar__cart-login__login__icon'><FaUserPlus /></span>
                </button>
            </div>
        </div>
    )
}

export default Sidebar