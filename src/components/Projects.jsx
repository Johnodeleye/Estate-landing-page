import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'motion/react';
const Projects = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
    
    useEffect(()=>{
        const updateCardsToShow = () => {
            if(window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length);
            }else{
                setCardsToShow(1)
            };
        };
            updateCardsToShow();
            
            window.addEventListener('resize', updateCardsToShow);
            return ()=> window.removeEventListener('resize', updateCardsToShow);
    },[])
    
    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }
    const previousProject = () => {
        setCurrentIndex((nextIndex) => (nextIndex - 1) % projectsData.length);
    }
    
  return (
    <motion.div 
    initial={{ opacity: 0, x:-200 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} 
    whileInView={{ opacity: 1, x:0 }}
    viewport={{once: true}}
    className='container w-full px-6 py-4 pt-20 mx-auto my-20 overflow-hidden md:px-20 lg:px-32' id='Projects'>
      <h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">Projects <span className='font-light underline underline-offset-4 decoration-1 under'>Completed</span>
      </h1>
      <p className="mx-auto mb-8 text-center text-gray-500 max-w-80">Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
      
      {/**Slider buttons */} 
      <div className='flex items-center justify-end mb-8'>
        <button className='p-3 mr-2 bg-gray-200 rounded cursor-pointer' aria-label='Previous Project' onClick={previousProject}>
            <img src={assets.left_arrow} alt="previous" />
        </button>
        <button className='p-3 mr-2 bg-gray-200 rounded cursor-pointer' aria-label='Next Project' onClick={nextProject}>
            <img src={assets.right_arrow} alt="next" />
        </button>
      </div>
      
      {/**Project Slider Container */}
      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform:`translateX(-${(currentIndex * 109) / cardsToShow}%)`}}>
            {projectsData.map((projects, index)=>(
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                    <img src={projects.image} alt={projects.title} className='w-full h-auto mb-14'/>
                    <div className='absolute left-0 right-0 flex justify-center bottom-5'>
                        <div className="inline-block w-3/4 px-4 py-2 bg-white shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">{projects.title}</h2>
                        <p className="text-sm text-gray-500">
                            {projects.price} <span className="px-1">|</span> {projects.location}
                        </p>
                    </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
      
    </motion.div>
  )
}

export default Projects
