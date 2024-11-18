import React from 'react'
import { motion } from 'motion/react';
const Contact = () => {
    const [result, setResult] = React.useState("");
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending....');
        const formData = new FormData(event.target);
        
        formData.append('access_key', '123456789');
        
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            setResult('Form Submitted Successfully');
            alert('Form Submitted Successfully');
            event.target.reset();
        } else {
            alert('Something went wrong', data.message);
            console.log('Error', data);
            setResult('');
        }
    };
    
  return (
    <motion.div 
    initial={{ opacity: 0, x:-200 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} 
    whileInView={{ opacity: 1, x:0 }}
    viewport={{once: true}}

    className='w-full p-6 py-20 overflow-hidden text-center lg:px-32' id='Contact'>
       <h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">Contact <span className="font-light underline underline-offset-4 decoration-1 ">With Us</span></h1>
       <p className="mx-auto mb-12 text-center text-gray-500 max-w-80">Ready to Make a Move? Let's Build your Future Together</p>
       <form className="max-w-2xl pt-8 mx-auto text-gray-600" onSubmit={onSubmit}>
        <div className='flex flex-wrap'>
            <div className='w-full text-left md:w-1/2'>
            Your Name
            <input type="text" placeholder='Your Name' required className='w-full px-4 py-3 mt-2 border border-gray-300 rounded ' name='Name'/>
            </div>
            <div className='w-full pt-4 text-left md:w-1/2 md:pl-4 md:pt-0'>
            Your Email
            <input type="email" placeholder='Your Email' required className='w-full px-4 py-3 mt-2 border border-gray-300 rounded' name='Email'/>
            </div>
        </div>
        <div className="my-6 text-left">
            Message
            <textarea className='w-full h-48 px-4 py-3 mt-2 border border-gray-300 rounded resize-none' name="Message" placeholder='Write your Message....' required></textarea>
        </div>
        <button className="px-12 py-2 text-white bg-blue-600 rounded hover:bg-blue-900">{result ? result : 'Send Message'}</button>
       </form>
    </motion.div>
  )
}

export default Contact
