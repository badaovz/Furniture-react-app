import {createContext, useContext, useEffect, useReducer } from 'react';
import filter_reducer from '../reducers/filter_reducer';
import {
    LOAD_PRODUCTS,
    SET_GRID_VIEW,
    SET_LIST_VIEW,
    SORT_PRODUCTS,
    UPDATE_SORT,
    FILTER_PRODUCTS,
    UPDATE_FILTERS,
    CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = { 
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
    },
}

const FilterContext = createContext();

export const FilterProvider = ({ children}) => {
    const {products} = useProductsContext();
    const [state, dispatch] = useReducer(filter_reducer, initialState);

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products});
    }, [products]);

    useEffect(() => {
        dispatch({ type: FILTER_PRODUCTS});
        dispatch({ type: SORT_PRODUCTS});
    }, [state.sort, state.filters]);

    const setGridView = () => {
        dispatch({ type: SET_GRID_VIEW});
    }

    const setListView = () => {
        dispatch({ type: SET_LIST_VIEW});
    }

    const updateSort = (e) => {
        const value = e.target.value;
        dispatch({ type: UPDATE_SORT, payload: value});
    }

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === 'category'){
            value = e.target.textContent;
        }
        if(name === 'color') {
            value = e.target.dataset.color;
        }
        if(name === 'price') {
            value = Number(value);
        }
        if(name === 'shipping') {
            value = e.target.checked;
        }

        dispatch({ type: UPDATE_FILTERS, payload: {name, value}});
    }

    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS})
    }

    return (
        <FilterContext.Provider value={{
            ...state,
            setGridView,
            setListView,
            updateSort,
            updateFilters,
            clearFilters,
        }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}