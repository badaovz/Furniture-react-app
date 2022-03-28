import logo from '../assets/logo.svg';
import {links} from '../utils/constants';
import { FaBars, FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useCartContext} from '../context/cart_context';
import {useProductsContext} from '../context/products_context';
import {useUserContext} from '../context/user_context';

function Navbar() {
    const {openSidebar} = useProductsContext();
    const {total_items} = useCartContext();
    const {myUser, isAuthenticated, loginWithRedirect, logout} = useUserContext();

  return (
    <div className='container__navbar'>
        <section>
            <div className='navbar'>
                <div className='navbar__left'>
                    <Link to='/'>
                        <img src={logo} className='navbar__left__img' alt='logo' />
                    </Link>
                    <button 
                        className='navbar__left__icon'
                        onClick={openSidebar}
                    >
                        <FaBars />
                    </button>
                </div>
                <div className='navbar__links'>
                <ul>
                        {
                            links.map(link => (
                                <li className='navbar__links__link' key={link.id}>
                                    <Link  to={link.url}>{link.text}</Link>
                                </li>
                            ))
                        }
                </ul>
                </div>
                <div className='navbar__right'>
                    <Link className='navbar__right__cart' to='/cart'>
                        Cart 
                        <span className='navbar__right__cart__icon'>
                            <FaShoppingCart />
                            <span className='navbar__right__cart__icon__total'>{total_items}</span>
                        </span>
                    </Link>
                    {
                        isAuthenticated ? 
                        <button 
                            className='navbar__right__login'
                            onClick={() => logout({ returnTo: window.location.origin })}
                        >
                            <p>{myUser&& myUser.name}</p>
                            (Logout)
                            {/* <span className='navbar__right__login__icon'><FaUserPlus /></span> */}
                        </button> : 
                        <button 
                            className='navbar__right__login'
                            onClick={loginWithRedirect}
                        >
                            Login
                            <span className='navbar__right__login__icon'><FaUserPlus /></span>
                        </button>
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default Navbar;