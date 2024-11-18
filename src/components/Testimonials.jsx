import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react'
const Testimonials = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x:100 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} 
    whileInView={{ opacity: 1, x:0 }}
    viewport={{once: true}}

    id='Testimonials' className='container w-full py-10 mx-auto overflow-hidden lg:px-32'>
      <h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">Customer <span className="font-light underline underline-offset-4 decoration-1 ">Testimonials</span></h1>
      <p className="mx-auto mb-12 text-center text-gray-500 max-w-80">Real Stories from Those Who Found Home with Us</p>
      
      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimony, index)=>(
            <div key={index} className='max-w-[340px] border shadow-lg px-8 py-12 text-center'>
                <img src={testimony.image} alt={testimony.alt} className='w-20 h-20 mx-auto mb-4 rounded-full'/>
                <h2 className='text-xl font-medium text-gray-700'>{testimony.name}</h2>
                <p className='mb-4 text-sm text-green-500'>{testimony.title}</p>
                <div className='flex justify-center gap-1 mb-3 text-red-500'>
                    {Array.from({length: testimony.rating}, (item, index)=>(
                        <img key={index} src={assets.star_icon} alt="" />
                    ))}
                </div>
                <p className="">{testimony.text}</p>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
