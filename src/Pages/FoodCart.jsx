import React , { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import CartList from '../Components/CartList'
import CartPrice from '../Components/CartPrice'
import { getCartItems } from '../Utils/cartStorage';


const FoodCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [paymentAmount, setPaymentAmount] = useState('');

  

  useEffect(() => {
    const cartItems = getCartItems();
    setCartData(cartItems);

    // Calculate totalPrice and totalItems
    const newTotalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const newTotalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setTotalPrice(newTotalPrice);
    setTotalItems(newTotalItems);
}, []);

  const handlePaymentSubmit = () => {
    if (parseInt(paymentAmount) === totalPrice && parseInt(paymentAmount) !== 0) {
      // Payment amount matches total price, show the success message
      alert('Terimakasih atas pembayarannya, enjoy your food!');
    } else {
      // Payment amount does not match total price, show an error message
      alert('Pembayaran tidak valid. Harap masukkan jumlah yang sesuai dengan total harga.');
    }
  };

  

  return (
    <div className='w-screen'>
      <section id='nav-cart'>
        <div className='flex justify-between items-center px-10 mt-5 pb-5 border-b'>
            <h1>My Cart</h1>
            <Link to={'/'}>
                <button className='px-3 py-1 text-[28px] bg-button text-button2 rounded-lg'>
                    <i className='bx bx-home' ></i>
                </button>
            </Link>
        </div>
      </section>
      <section id='cartlist'>
        <div className='flex p-10'>
            <div id='container' className='flex gap-5 pr-5'>
                <CartList cartData={cartData} setCartData={setCartData} />
                <CartPrice totalPrice={totalPrice} totalItems={totalItems} />
            </div>
        </div>
        <div className='flex justify-center items-center gap-10'>
            <div>
                <span className='mr-3'>Rp.</span>
                <input
                className='px-3 py-2 border-2 '
                type='number'
                placeholder='Enter payment amount'
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                />
            </div>
            <button className='px-3 py-1 rounded-lg bg-button text-white' onClick={handlePaymentSubmit}>Submit Payment</button>
        </div>
      </section>
    </div>
  )
}

export default FoodCart
