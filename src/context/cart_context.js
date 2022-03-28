import {createContext, useContext, useEffect, useReducer} from 'react';
import cart_reducer from '../reducers/cart_reducer';
import {
    ADD_TO_CART,    
    TOGGLE_CART_ITEM_AMOUNT,    
    REMOVE_CART_ITEM,   
    CLEAR_CART, 
    COUNT_CART_TOTALS,  
} from '../actions';

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart) {
        return JSON.parse(localStorage.getItem('cart'));
    }else {
        return [];
    }
}

const initialState = {
    cart: getLocalStorage(),
    total_items: 0, 
    total_amount: 0,
    shipping_fee: 534,
}

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cart_reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: ADD_TO_CART, payload: {id, color, amount, product }});
    }

    const removeCartItem = (id) => {
        dispatch({ type: REMOVE_CART_ITEM, payload: id});
    }

    const toggleAmount = (id, value) => {
        dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: {id, value}});
    }

    const clearCart = () => dispatch({type: CLEAR_CART});

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
        dispatch({ type: COUNT_CART_TOTALS})
    }, [state.cart]);

    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
            removeCartItem,
            toggleAmount,
            clearCart,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext);
}