import React from 'react'
import Banner_img from '../../src/assets/app.svg'
import { Zap, Wallet, Smartphone, TrendingUp, CreditCard, Wifi } from 'lucide-react';

const About = () => {
    const cards = [
        {
            id: 1,
            icon: Zap, // ✅ Added icon property
            title: "Instant transactions",
            para: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
        },
        {
            id: 2,
            icon: Wallet, // ✅ Added icon property
            title: "Secure payments",
            para: "Encrypted transactions with top-notch security for peace of mind."
        },
        {
            id: 3,
            icon: Smartphone, // ✅ Added icon property
            title: "24/7 Support",
            para: "Our team is available anytime to assist you with your needs."
        },
        {
            id: 4,
            icon: TrendingUp, // ✅ Added more cards to match the image
            title: "Advanced statistics",
            para: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
        },
        {
            id: 5,
            icon: CreditCard,
            title: "Virtual cards",
            para: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
        },
        {
            id: 6,
            icon: Wifi,
            title: "Contactless payments",
            para: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
        }
    ];

    return (
        <div className='w-full bg-gray-50 py-20'> {/* ✅ Added background and better padding */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-10 items-center'> {/* ✅ Made responsive */}
                <div className=''>
                    <h1 className='text-4xl lg:text-6xl font-bold leading-tight mb-12'>
                        One app. <br />One banking.
                    </h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {cards.map((product) => {
                            const IconComponent = product.icon;
                            return (
                                <div 
                                    key={product.id} 
                                    className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300'
                                >
                                    {/* Icon */}
                                    <div className='w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4'>
                                        <IconComponent className='w-6 h-6 text-teal-600' />
                                    </div>
                                    
                                    {/* Content */}
                                    <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                                        {product.title}
                                    </h3>
                                    <p className='text-gray-600 text-sm leading-relaxed'>
                                        {product.para}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                <div className='flex justify-center lg:justify-end items-center'> {/* ✅ Better responsive centering */}
                    <img src={Banner_img} alt="Banking App" className='max-w-full h-auto' />
                </div>
            </div>
        </div>
    )
}

export default About