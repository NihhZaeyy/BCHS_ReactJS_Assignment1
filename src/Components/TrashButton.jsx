import React from 'react';
import { removeFromCart } from '../Utils/cartStorage';

const TrashButton = ({ itemId, onRemove }) => {
  const handleRemoveClick = () => {
    //buat order button
    localStorage.setItem(`cartItem_${itemId}`, 'false');
    // buat remove data
    removeFromCart(itemId);
    
    if (onRemove) {
      onRemove();
    }

    window.location.reload();
  };

  return (
    <button
      className='px-2 py-1 rounded-md bg-button2 text-button'
      onClick={handleRemoveClick}
    >
      <i className='bx bx-trash'></i>
    </button>
  );
};

export default TrashButton;
