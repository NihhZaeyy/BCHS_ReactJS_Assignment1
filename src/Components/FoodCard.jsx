import React  from 'react'
import { Link } from 'react-router-dom'

import FoodButton from './FoodButton'


const FoodCard = ({src , title , description , id}) => {

  return (
    <div className='w-full mb-5  lg:w-[25%] md:w-[30%] md:p-2'>
            <div className="relative mb-2 overflow-hidden rounded-lg">
                <img src={src} alt="" className='w-full h-60 hover:scale-105 duration-300 object-cover' />
            </div>
            <div className='h-[90px]'>
                <h3>{title}</h3>
                <p className='text-[14px] line-clamp-3'>{description}</p>
            </div>
            <Link to={`/food-detail/${id}`}> 
                <FoodButton />
            </Link>
    </div>
  )
}

export default FoodCard