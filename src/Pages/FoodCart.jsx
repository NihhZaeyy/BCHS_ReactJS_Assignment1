import React from 'react'
import { Link } from 'react-router-dom'
import TrashButton from '../Components/TrashButton'

import photo1 from '/Assets/foods/apem.jpg'

const FoodCart = () => {
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
            <div id='container' className='w-[700px] flex flex-col gap-5 pr-5 border-r-2'>
                <div className='flex gap-2'>
                    <img className='w-[200px]' src={photo1} alt="" />
                    <div>
                        <div className='flex justify-between items-center'>
                            <h3>Apem</h3>
                            <TrashButton />
                        </div>
                        <p className='line-clamp-2 pr-10'>Apem (also known as appam in its native India) is a food made from rice flour that is left overnight by mixing eggs, coconut milk, sugar and tape and a little salt then burned or steamed. The Ngapem tradition was started by the Kanoman Palace in Cirebon, since the time of Sunan Gunung Jati as a form of spreading Islam in Java.</p>
                        <p>Price : Rp. 10000</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <img className='w-[200px]' src={photo1} alt="" />
                    <div>
                        <div className='flex justify-between items-center'>
                            <h3>Apem</h3>
                            <TrashButton />
                        </div>
                        <p className='line-clamp-2 pr-10'>Apem (also known as appam in its native India) is a food made from rice flour that is left overnight by mixing eggs, coconut milk, sugar and tape and a little salt then burned or steamed. The Ngapem tradition was started by the Kanoman Palace in Cirebon, since the time of Sunan Gunung Jati as a form of spreading Islam in Java.</p>
                        <p>Price : Rp. 10000</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <img className='w-[200px]' src={photo1} alt="" />
                    <div>
                        <div className='flex justify-between items-center'>
                            <h3>Apem</h3>
                            <TrashButton />
                        </div>
                        <p className='line-clamp-2 pr-10'>Apem (also known as appam in its native India) is a food made from rice flour that is left overnight by mixing eggs, coconut milk, sugar and tape and a little salt then burned or steamed. The Ngapem tradition was started by the Kanoman Palace in Cirebon, since the time of Sunan Gunung Jati as a form of spreading Islam in Java.</p>
                        <p>Price : Rp. 10000</p>
                    </div>
                </div>
            </div>
            <div className='px-5 w-[600px] flex flex-col gap-5'>
                <h2>Payment</h2>
                <div className='flex justify-between items-center'>
                    <p>Total Price : Rp. 30000</p>
                    <p>Total Item : 3</p>
                </div>
                <div>
                    <input></input>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default FoodCart
