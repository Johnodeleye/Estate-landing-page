import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    const onSubmit = () => {
        alert('Subscribed');
    }
  return (
    <div className='w-full px-4 pt-10 overflow-hidden bg-gray-900 md:px-20 lg:px-32' id='Footer'>
        <div className='container flex flex-col items-start justify-between mx-auto md:flex-row' >
            <div className='w-full mb-8 md:w-1/3 md:mb-0'>
                <img src={assets.bright} alt="logo" className='rounded size-16'/>
                <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus quos praesentium, maxime doloribus porro, a magni aperiam, vel tenetur quis explicabo? Ad, alias quidem expedita eveniet ipsum ipsam non?</p>
            </div>
            <div className='w-full mb-8 md:w-1/5 md:mb-0'>
                <h3 className='mb-4 text-lg font-bold text-white'>Bright-Well Properties</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header"  className='hover:text-white'>Home</a>
                    <a href="#About"  className='hover:text-white'>About us</a>
                    <a href="#Contact"  className='hover:text-white'>Contact us</a>
                    <a href="#Header"  className='hover:text-white'>Privacy policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
            <h3 className='mb-4 text-lg font-bold text-white'>Subscribe to our newsletter</h3>
            <p className="mb-4 text-gray-400 max-w-80">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className="flex gap-2">
                <form  onSubmit={onSubmit}>
                <input type="email" placeholder='Enter your email' className='p-2 text-gray-400 bg-gray-800 border border-gray-700 rounded focus:outline-none md:w-auto' name='Subscription Email'/>
            <button className="px-4 py-2 text-white bg-blue-500 rounded">Subscribe</button>
            </form>
            </div>
            </div>
        </div>
        <div className='py-4 mt-10 text-center text-gray-500 border-t border-gray-700'>
            Copyright 2024 &copy; Bright-well Properties. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer
