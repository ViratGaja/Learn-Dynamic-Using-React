import React from 'react'
import { Check } from 'lucide-react' // ✅ Add this import
import Banner_img from '../../src/assets/cards.png'

const Banner = () => {
    const features = [
        { id: 1, text: "Instant Transfer" },
        { id: 2, text: "Payments worldwide" },
        { id: 3, text: "Saving accounts" },
        { id: 4, text: "100% mobile banking" }
    ];

    return (
        <div className='w-full bg-white'>
            <div className='grid md:grid-cols-2 gird-cols-1 gap-8 items-center main_banner max-w-7xl mx-auto px-10 py-15'>
                {/* ✅ Removed conflicting flex classes */}
                
                <div className='banner_left'>
                    <h1 className='md:text-6xl text-3xl font-bold md:leading-[5rem] leading-[2.5rem] mb-6'>
                        Banking <br /> Starts Here
                    </h1>
                    <p className='mb-8 text-gray-600 leading-relaxed'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo ratione, repellat debitis perspiciatis doloribus dolor maiores hic. Nobis cumque amet sapiente eveniet cupiditate sed fugit sequi ducimus tempore modi!
                    </p>
                    
                    {/* ✅ Features moved inside banner_left */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                        {features.map((feature) => (
                            <div key={feature.id} className="flex items-center space-x-3">
                                <div className="flex-shrink-0 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                </div>
                                <span className="text-gray-700 font-medium">
                                    {feature.text}
                                </span>
                            </div>
                        ))}
                    </div>

                  <div className='gird grid-cols-2 py-6 mt-4 space-x-4'>
                    <button className='bg-teal-500 py-2 px-4 text-white px-3 font-medium hover:bg-teal-600 cursor-pointer' >Open Account </button>
                    <button className='py-2 px-4 text-teal-500  font-medium hover:text-teal-600 cursor-pointer'>Compare Cards</button>
                    </div>
                </div>
                
                <div className='banner_right flex justify-end'> {}
                    <img src={Banner_img} alt="Banking cards" className='max-w-full h-auto' />
                    {}
                </div>
            </div>
        </div>
    )
}

export default Banner