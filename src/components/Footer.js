import React from 'react';
import {FaFacebook,FaTwitter,FaGoogle,FaLinkedinIn} from 'react-icons/fa';
import {BiLogoFacebook} from 'react-icons/bi';

function Footer() {
  return (
    <div className='bg-gray-900 text-white'>
        <div className='w-[1080px] flex justify-between items-center mx-auto p-10'>
            <div className='flex flex-col gap-2 flex-1 h-40'>
                <p>Do You Have Any Queries Regarding Our Pricing?</p>
                <div className='bg-blue-500 rounded-md w-fit p-2'>
                    <button>SEND INQUIRY</button>
                </div>
                <p className='text-sm text-gray-600 font-bold'>Our team will respond to your inquires within 48 hours</p>
            </div>
            <div className='flex flex-col gap-2 flex-1 h-40' >
                <p>Do You Have Any Questions And Want To Contact Us?</p>
                <p className='text-blue-500'>Free Free To Call Us</p>
                <p className='text-blue-500'>+123-12442-2452</p>
                <p className='text-sm text-gray-600 font-bold'>Dayananda Sagar College Of Engineering</p>
            </div>
            <div className='flex flex-col gap-2 flex-1 justify-center h-40 '>
                <p className=''>Parkin Working Hours</p>
                <div className='text-sm text-gray-600 font-bold'>
                    <p>Monday-Friday</p>
                    <p>09:00 AM - 10:30 PM</p>
                </div>
                <div className='text-sm text-gray-600 font-bold'>
                    <p>Saturday-Sunday</p>
                    <p>09:00 AM - 07:00 PM</p>
                </div>
                <div className='flex gap-2'>
                    <div className='bg-blue-500 rounded-full p-2'><BiLogoFacebook /></div>
                    <div className='bg-blue-500 rounded-full p-2'><FaTwitter /></div>
                    <div className='bg-blue-500 rounded-full p-2'><FaGoogle /></div>
                    <div className='bg-blue-500 rounded-full p-2'><FaLinkedinIn /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer