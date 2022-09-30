import {
    ADD_TO_CART,    
    TOGGLE_CART_ITEM_AMOUNT,    
    REMOVE_CART_ITEM,   
    CLEAR_CART, 
    COUNT_CART_TOTALS,  
    CHANGE_COLOR_CART_ITEM,
    OPEN_CART_COLORS,
    CLOSE_CART_COLORS
} from '../actions';

const cart_reducer = (state, action) => {
    if(action.type === ADD_TO_CART) {
        const {id, color, amount, product} = action.payload;
        const tempItem = state.cart.find(i => i.id === id + color);
        if(tempItem) {
            const tempCart = state.cart.map((cartItem) => {
                if(cartItem.id === id + color) {
                    let newAmount = cartItem.amount + amount
                    if(newAmount > cartItem.max) {
                        newAmount = cartItem.max;
                    }
                    return {...cartItem, amount: newAmount}
                }else {
                    return cartItem;
                }
            })

            return {...state, cart: tempCart};
        }else {
            console.log('PROduct:', product);
            const newItem = {
                id: id + color,
                name: product.name,
                color,
                colors: product.colors,
                amount,
                image: product.images[0].url,
                price: product.price,
                max: product.stock,
                shipping: product.shipping,
                isColorsOpen: false
            }
            return {...state, cart: [...state.cart, newItem]}
        }
    }

    if(action.type === REMOVE_CART_ITEM) {
        const tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload);
        return {...state, cart: tempCart}
    }

    if(action.type === OPEN_CART_COLORS) {
        const tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload){
                return {
                    ...cartItem,
                    isColorsOpen: true
                }
            }
            return cartItem
        })
        return {...state, cart: tempCart}
    }

    // if(action.type === CLOSE_CART_COLORS) {
    //     const tempCart = state.cart.map((cartItem) => {
    //         console.log('RootID: ', cartItem.id.find('#'));
    //         if(cartItem.id === action.payload){
    //             // let rootId = id.
    //             return {
    //                 ...cartItem,
    //                 isColorsOpen: false,
    //                 // id: 
    //             }
    //         }
    //         return cartItem
    //     })
    //     return {...state, cart: tempCart}
    // }

    if(action.type === CHANGE_COLOR_CART_ITEM) {
        const {id, color} = action.payload;
        const rootId = id.slice(0, id.lastIndexOf('#'));
        console.log('RootID: ', rootId);
        let tempCart = state.cart.map(cartItem => {
            if(cartItem.id === id){
                if(state.cart.find(i => i.id === rootId + color)){
                    return {
                        ...cartItem,
                        isColorsOpen: false
                    }
                } else {
                    return {
                        ...cartItem, 
                        color,
                        isColorsOpen: false,
                        id: rootId + color
                    }

                }
            }
            return cartItem;
        })

        return {...state, cart: tempCart}
    }

    if(action.type === TOGGLE_CART_ITEM_AMOUNT) {
        const {id, value} = action.payload;
        const tempCart = state.cart.map(cartItem => {
            if(cartItem.id === id) {
                if(value === 'inc'){
                    let newAmount = cartItem.amount + 1;
                    if(newAmount > cartItem.max) {
                        newAmount = cartItem.max;
                    }
                    return {...cartItem, amount: newAmount};
                }
                if(value === 'dec') {
                    let newAmount = cartItem.amount - 1;
                    if(newAmount < 1) {
                        newAmount = 1;
                    }
                    return {...cartItem, amount: newAmount};
                }
            }

            return cartItem;
        })
        return {...state, cart: tempCart};
    }

    if(action.type === CLEAR_CART) {
        return {...state, cart: []};
    }

    if( action.type === COUNT_CART_TOTALS) {
        const { total_items, total_amount} = state.cart.reduce((total, cartItem) => {
            const { amount, price } = cartItem;
            total.total_items += amount;
            total.total_amount += amount * price;
            return total;
        }, {
            total_items: 0, 
            total_amount: 0,
        })
        return {...state, total_items, total_amount}
    }

    throw new Error(`No Matching "${action.type}" - action type`);
}

export default cart_reducer;
