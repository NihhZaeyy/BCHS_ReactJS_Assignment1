import React from 'react';

const OrderButton = ({ id, onClick }) => {
  const handleClick = () => {
    const isItemInCart = localStorage.getItem(`cartItem_${id}`);

    if (isItemInCart === 'true') {
      alert('Pesanan sudah ada di Cart Anda.');
      
    } else {
      localStorage.setItem(`cartItem_${id}`, 'true');
      onClick();
    }
  };

  return (
    <div>
      <button className="px-3 py-2 bg-button text-white rounded-lg hover:opacity-80" onClick={handleClick}>
        <i className='bx bx-cart'></i> Order Food
      </button>
    </div>
  );
};

export default OrderButton;
