import { FaList, FaThLarge } from 'react-icons/fa';
import { useFilterContext } from '../context/filter_context';

function Sort() {
    const {updateSort, filtered_products, grid_view, setGridView, setListView} = useFilterContext();

    return (
    <div className='sort'>
        <div className='sort__icons'>
            <button 
                className={`sort__icons__icon ${grid_view ? 'active' : ''}`}
                onClick={setGridView}
            >
                <FaThLarge />
            </button>
            <button 
                className={`sort__icons__icon ${grid_view ? '' : 'active'}`}
                onClick={setListView}
            >
                <FaList />
            </button>
        </div>
        <p className='sort__totalProduct'>
            {filtered_products.length} Product Found
        </p>
        <hr/>
        <form className='sort__form'>
            <label className='sort__form__label' htmlFor='sort'>
                Sort By
            </label>
            <select 
                className='sort__form__input'
                id='sort'
                name='sort'
                onChange={(e) => updateSort(e)}
            >
                <option value='price-lowest'>Price (Lowest)</option>
                <option value='price-highest'>Price (highest)</option>
                <option value='name-a'>Name (A - Z)</option>
                <option value='name-z'>Name (Z - A)</option>
            </select>
        </form>
    </div>
    )
}

export default Sort;