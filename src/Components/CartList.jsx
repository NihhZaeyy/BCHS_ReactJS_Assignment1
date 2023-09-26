import React, { useState, useEffect } from 'react';
import TrashButton from './TrashButton';

const CartList = ({ cartData, setCartData }) => {
  const removeItemFromCart = (itemId) => {
    const updatedCartData = cartData.filter((item) => item.id !== itemId);
    setCartData(updatedCartData);
  };

//   const handleIncrement = (itemId) => {
//     const updatedCartData = cartData.map((item) => {
//       if (item.id === itemId) {

//         const updatedItem = { ...item, quantity: item.quantity + 1 };

//         localStorage.setItem(`cartItemQuantity_${itemId}`, updatedItem.quantity);
//         return updatedItem;
//       }
//       return item;
//     });
//     setCartData(updatedCartData);
//   };

//   const handleDecrement = (itemId) => {
//     const updatedCartData = cartData.map((item) => {
//       if (item.id === itemId && item.quantity > 1) {

//         const updatedItem = { ...item, quantity: item.quantity - 1 };

//         localStorage.setItem(`cartItemQuantity_${itemId}`, updatedItem.quantity);
//         return updatedItem;
//       }
//       return item;
//     });
//     setCartData(updatedCartData);
//   };

//   useEffect(() => {

//     const updatedCartData = cartData.map((item) => {
//       const storedQuantity = localStorage.getItem(`cartItemQuantity_${item.id}`);
//       if (storedQuantity !== null) {
//         item.quantity = parseInt(storedQuantity, 10);
//       }
//       return item;
//     });
//     setCartData(updatedCartData);
//   }, []); 

  return (
    <div className='flex flex-col'>
      {cartData.map((item) => (
        <div className='flex gap-2 mb-5 w-[700px] border-r-2 pr-5' key={item.id}>
          <img className='w-[200px]' src={item.pic} alt={item.name} />
          <div>
            <div className='flex justify-between items-center'>
              <h3>{item.name}</h3>
              <TrashButton itemId={item.id} onRemove={() => removeItemFromCart(item.id)} />
            </div>
            <p className='line-clamp-2 pr-10'>{item.description}</p>
            <p>Price : Rp. {item.price}</p>
            {/* <div className='mt-3 flex justify-center items-center gap-3'>
              <button
                className='px-2 py-1 rounded-lg bg-button2 text-button'
                onClick={() => handleDecrement(item.id)}
                disabled={item.quantity === 1}
              >
                <i className='bx bx-minus'></i>
              </button>
              <span>{item.quantity}</span>
              <button
                className='px-2 py-1 rounded-lg bg-button2 text-button'
                onClick={() => handleIncrement(item.id)}
              >
                <i className='bx bx-plus'></i>
              </button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;


