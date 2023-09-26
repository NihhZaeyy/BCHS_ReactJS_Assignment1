import React from 'react';

const CartPrice = ({totalItems , totalPrice}) => {

  return (
    <div className='px-5 w-[600px] flex flex-col gap-5'>
      <div className='flex flex-col'>
        <h2>Payment</h2>
        <div className='flex justify-between items-center'>
          <p>Total Price : Rp. {totalPrice}</p>
          <p>Total Item : {totalItems}</p>
        </div>
      </div>
    </div>
  );
};

export default CartPrice;

