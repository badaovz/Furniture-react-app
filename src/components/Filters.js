import React, { useState, useEffect } from 'react'
import {useProductsContext} from '../context/products_context';
import {useFilterContext} from '../context/filter_context';
import {getUniqueValues, formatPrice} from '../utils/helpers';
import {FaCheck} from 'react-icons/fa';


function Filters() {
    // const [categories, setCategories] =  useState([]);
    // const [companies, setCompanies] =  useState([]);
    const {filters, updateFilters, clearFilters} = useFilterContext();
    const {products} = useProductsContext();

    const categories = getUniqueValues(products, 'category');
    const companies = getUniqueValues(products, 'company');
    const colors = getUniqueValues(products, 'colors');

    console.log("Cat: ", categories);


    const {text, category, company, color, price, shipping, min_price, max_price} = filters;

    return (
        <div className='filters'>
            <input 
                className='filters__search' 
                type='text'
                name='text'
                value={text}
                onChange={(e) => updateFilters(e)}
                placeholder='Search'
            />
            <div className='filters__category'>
                <h3 className='filters__category__title'>Category</h3>
                {
                    categories.map((cat, index) => (
                        <button 
                            className={`filters__category__btn ${category === cat ? 'active' : ''}`} 
                            key={index}
                            name='category'
                            onClick={(e) => updateFilters(e)}
                        >{cat}</button>
                    ))
                }
            </div>
            <div className='filters__company'>
                <h3 className='filters__company__title'>
                    Company
                </h3>
                <select 
                    className='filters__company__select'
                    name='company'
                    onChange={(e) => updateFilters(e)}
                >
                    {
                        companies.map((com, index) => (
                            <option 
                                className='filters__company__option' 
                                key={index} 
                                value={com}
                            >{com}</option>
                        ))
                    }
                </select>
            </div>
            <div className='filters__colors'>
                <h3 className='filters__colors__title'>
                    Colors
                </h3>
                <div className='filters__colors__content'>
                    <button 
                        className={`filters__colors__content__all ${color === 'all' ? 'active' : ''}`}
                        name='color'
                        data-color='all'
                        onClick={(e) => updateFilters(e)}
                    >{colors[0]}</button>

                    {
                        colors.slice(1,colors.length).map((c, index) => (
                            <button 
                                name='color' 
                                data-color={c} 
                                className={`filters__colors__content__btn ${c===color ? 'active' : ''}`} 
                                key={index} 
                                style={{backgroundColor: `${c}`}}
                                onClick={(e) => updateFilters(e)}
                            >{c===color ? <FaCheck /> : null}</button>
                        ))
                    }
                </div>
            </div>
            <div className='filters__price'>
                <p className='filters__price__text'>{formatPrice(price)}</p>
                <input 
                    className='filters__price__input' 
                    type='range'  
                    id='price'
                    name='price'  
                    min={min_price}
                    max={max_price}
                    value={price}
                    onChange={updateFilters}
                />
            </div>
            <div className='filters__shipping'>
                <form className='filters__shipping__form'>
                    <label className='filters__shipping__form__label' htmlFor='shipping'>Free Shipping</label>
                    <input 
                        className='filters__shipping__form__input' 
                        id='shipping' 
                        name='shipping' 
                        type='checkbox'
                        checked={shipping}
                        onChange={(e) => updateFilters(e)}
                    />
                </form>

            </div>
            <button 
                className='filters__clearAll'
                onClick={clearFilters}
            >
                Clear Filters
            </button>
        </div>
    )
    }

export default Filters