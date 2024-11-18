import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
  },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 z-10 w-full'>
      <div className="container flex items-center justify-between px-6 py-4 mx-auto bg-transparent md:px-20 lg:px-32">
        <a href="/">
        <img src={assets.bright} alt='logo' className='rounded-full size-16'/>
        </a>
        <ul className='hidden text-white md:flex gap-7'>
            <a href="#Header" className='cursor-pointer hover:text-gray-400 '>Home</a>
            <a href="#About" className='cursor-pointer hover:text-gray-400 '>About</a>
            <a href="#Projects" className='cursor-pointer hover:text-gray-400 '>Projects</a>
            <a href="#Testimonals" className='cursor-pointer hover:text-gray-400 '>Testimonials</a>
        </ul>
        <a href="https://hubpost-app.vercel.app/authors/mailadeyinka@gmail.com">
        <button className="hidden px-8 py-2 bg-white rounded-full md:block">Blog</button>
        </a>
        
        <button>
        <img src={assets.menu_icon} alt="open menu" className='cursor-pointer md:hidden w-7'onClick={() => setShowMobileMenu(true)}/>
        </button>
      </div>
      
      {/* ------------Mobile Menu----------------- */}
      {showMobileMenu && (
      <div className="fixed top-0 bottom-0 right-0 w-full overflow-hidden transition-transform ease-in-out bg-white duration-5000s md:hidden">
        <div className='flex justify-end p-6 cursor-pointer'>
          <img src={assets.cross_icon} className='w-6' alt="close"  onClick={() => setShowMobileMenu(false)}/>
        </div>
        <ul className='flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium'>
        <a onClick={() => setShowMobileMenu(false)} href="#Header" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-blue-500'>Home</a>
        <a onClick={() => setShowMobileMenu(false)} href="#About" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-blue-500'>About</a>
        <a onClick={() => setShowMobileMenu(false)} href="#Project" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-blue-500'>Project</a>
        <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-blue-500'>Testimonials</a>
        <a onClick={() => setShowMobileMenu(false)} href="https://hubpost-app.vercel.app/authors/mailadeyinka@gmail.com" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-blue-500'>Blog</a>
        </ul>
      </div>
      )}
    </div>
  )
}

export default Navbar