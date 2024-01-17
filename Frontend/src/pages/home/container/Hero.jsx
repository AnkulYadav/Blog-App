import React from 'react'
import { FiSearch } from 'react-icons/fi';

import { images } from '../../../constants'


function Hero() {
    return (
        <section className='container mx-auto flex flex-col px-5 lg:flex-row'>
            <div className='mt-10 lg:w-1/2 '>
                <h1 className='font-robot text-3xl text-center font-bold text-dark-soft md:text-5xl  lg:text-left lg:text-4xl xl:text-5xl lg:max-w-[540px]'>Read the most Interesting Articles</h1>
                <p className='text-dark-light mt-4 text-center md:text-xl lg:text-left lg:text-base xl:text-xl'>Explore the world of articles and read the most interesting ones</p>
                <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
                    <div className='relative'>
                        <FiSearch className='absolute top-1/2 left-3 -translate-y-1/2 w-6 h-6 text-[#959EAD]' />
                        <input className='placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:py-4' type="text" placeholder='Search articles' />
                    </div>
                    <button className='w-full bg-primary text-white rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>Search</button>
                </div>
                <div className='flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
                    <span className='text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base'>Popular Tags:</span>
                    <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
                        <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold '>Design</li>
                        <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold '>User Experience</li>
                        <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold '>User Interface</li>
                    </ul>
                </div>
            </div>
            <div className='hidden lg:block lg:w-1/2'>
                <img className='w-full' src={images.HeroImage} alt="users are reading articles" />
            </div>
        </section>
    )
}

export default Hero
