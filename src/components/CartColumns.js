function CartColumns() {
  return (
    <div className='cartColumns'>
        <p className='cartColumns__item'>Item</p>
        <p className='cartColumns__item hide'>Price</p>
        <p className='cartColumns__item'>Quantity</p>
        <p className='cartColumns__item hide'>Subtotal</p>
        <span></span>
    </div>

  )
}

export default CartColumns;