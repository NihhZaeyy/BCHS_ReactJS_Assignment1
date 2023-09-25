import React from 'react'
import { Link } from 'react-router-dom'

const CartButton = () => {
  return (
    <Link to={"/food-cart"}>
        <div className='fixed bottom-8 right-8'>
        <button className='py-1 px-3 rounded-lg text-button2 bg-button text-[28px]'><i class='bx bx-cart'></i></button>
        </div>
    </Link>
  )
}

export default CartButton
