import React from 'react'
import { FaFacebookF, FaYoutube,FaHeart  } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

import { images } from '../constants'

function Footer() {
  return (
    <section className='bg-dark-hard'>
      <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10'>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='text-dark-light font-bold md:text-lg'>Product</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
            <li>
              <a href="/">Test</a>
            </li>
            <li>
              <a href="/">Test</a>
            </li>
            <li>
              <a href="/">Test</a>
            </li>
            <li>
              <a href="/">Test</a>
            </li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='text-dark-light font-bold md:text-lg'>Product</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
            <li>
              <a href="/">Test</a>
            </li>
            <li>
              <a href="/">Test</a>
            </li>
            <li>
              <a href="/">Test</a>
            </li>
            <li>
              <a href="/">Test</a>
            </li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto'>
          <h3 className='text-dark-light font-bold md:text-lg'>Product</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
            <li>
              <a href="/">Test</a>
            </li>
            <li>
              <a href="/">Test</a>
            </li>
            <li>
              <a href="/">Test</a>
            </li>
            <li>
              <a href="/">Test</a>
            </li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='text-dark-light font-bold md:text-lg'>Product</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
            <li>
              <a href="/">Test</a>
            </li>
            <li>
              <a href="/">Test</a>
            </li>
            <li>
              <a href="/">Test</a>
            </li>
            <li>
              <a href="/">Test</a>
            </li>
          </ul>
        </div>
        <div className='col-span-10 md:order-first md:col-span-4 lg:col-span-2'>
          <img src={images.logo} alt="logo" className='brightness-0 invert mx-auto md:mx-0' />
          <p className='text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm'>Build a modern and creative website with Ankul Yadv Contact Now</p>
          <ul className='flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start'>
            <li>
              <a href="/"><FaFacebookF className='w-6 h-6' /></a>
            </li>
            <li>
              <a href="/"><FaXTwitter className='w-6 h-6' /></a>
            </li>
            <li>
              <a href="/"><FaLinkedinIn className='w-6 h-6' /></a>
            </li>
            <li>
              <a href="/"><FaInstagram className='w-6 h-6' /></a>
            </li>
            <li>
              <a href="/"><FaYoutube className='w-6 h-6' /></a>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10'>
          <div className='bg-primary text-white p-3 rounded-full'>
            <FaHeart  className='w-7 h-7 '/>
          </div>
          <p className='text-sm text-dark-light font-bold italic'>© 2024 Ankul Yadav. All rights reserved</p>
        </div>
      </footer>
    </section>
  )
}

export default Footer
