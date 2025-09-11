import React from 'react'
import { Check } from 'lucide-react';
import icon from '../../src/assets/badge.png'
export const Info = () => {
    const features = [
        { id: 1, text: "Malesuada Ipsum" },
        { id: 2, text: "Vestibulum" },
        { id: 3, text: "Parturient Lorem" },
    ];

    const dynamic_content = [
        { id: 1, name: "MacBook", company: "Apple", price: "-99€", icon },
        { id: 2, name: "Electronics", company: "Amazon", price: "-49€", icon },
        { id: 3, name: "Ads", company: "Twitter", price: "-29€", icon },
        { id: 4, name: "Office Suite", company: "Microsoft", price: "-149€", icon },
        { id: 5, name: "Cloud", company: "Dropbox", price: "-14€", icon },
    ];
    return (
        <div className='bg-teal-100 py-18 w-full'>

            <div className="max-w-7xl mx-auto px-10">
                <div className='grid lg:grid-cols-2 md:grid-cols-1  grid-cols-1 md:gap-28 gap-14'>
                    <div className="info_left flex flex-col justify-center">
                        <h1 className='md:text-6xl  text-3xl leading-[2.5rem] font-bold md:leading-[4rem] lg:leading-[4rem]   mb-6'>
                            Send & receive <br />
                            money instantly
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam esse voluptatibus explicabo, nobis unde asperiores quaerat? Necessitatibus, nobis a? Totam optio fugit quasi voluptate hic maiores obcaecati unde, id veniam.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 ">
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

                    </div>
                    <div className="info_right ">


                        {dynamic_content.map((product) => (
                            <div key={product.id} className='bg-white w-full rounded-sm flex items-center py-4 px-4 gap-3 mb-3' >

                                <div>
                                    <img src={product.icon} alt="" />
                                </div>
                                <div className='flex justify-between w-full items-center'>
                                    <div>
                                        <h3 className='text-1xl font-bold font-black'>{product.name}</h3>
                                        <p className='text-gray-500 text-sm'>{product.company}</p>
                                    </div>
                                    <div>
                                        <p >{product.price}</p>
                                    </div>

                                </div>

                            </div>
                        ))}



                    </div>
                </div>

            </div>
        </div>
    )
}
