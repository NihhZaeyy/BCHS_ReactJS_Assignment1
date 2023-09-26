import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';

const ShareButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleShareClick = async () => {
    try {
      await clipboardCopy(window.location.href);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 500);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <div>
      <button
        className="flex items-center bg-button2 w-[100px] px-4 py-2 rounded-xl"
        onClick={handleShareClick}
      >
        <p className="text-button me-1 font-Poppins">Share </p>
        <i className="bx bx-share-alt text-[20px] text-button"></i>
      </button>
      {isCopied && (
        <div className="mt-2 text-[14px] text-green-500 absolute w-[170px] right-[10px] bg-button text-white px-2 py-1 rounded-lg">Link copied to clipboard!</div>
      )}
    </div>
  );
};

export default ShareButton;

