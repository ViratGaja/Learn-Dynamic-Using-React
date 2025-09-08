import React from 'react'
import Banner_img from '../../src/assets/cards.png'
const Banner = () => {
  return (
    <div className='W-full bg-white'>
    <div className='grid grid-cols-2 flex-wrap justify-around items-center main_banner max-w-7xl mx-auto space-x-4 px-10 py-15'>
        <div className='banner_left '>
            <h1 className='text-6xl font-bold leading-[5rem] '>Banking <br /> Starts Here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo ratione, repellat debitis perspiciatis doloribus dolor maiores hic. Nobis cumque amet sapiente eveniet cupiditate sed fugit sequi ducimus tempore modi!</p>
        </div>
        <div className='banner_right flex justify-end'> 
            <img src={Banner_img} alt="" />

        </div>
        
    </div>
    </div>
  )
}

export default Banner