import React from 'react';
import '../index.css';

function Navbar() {
  return (
    <div className='flex justify-between items-center w-[1080px] mx-auto py-2'>
        <div className='flex items-center'>
          <p className='font-bold text-blue-950 text-4xl'>Park<span className='text-blue-500'>In</span></p>
        </div> 
        <div className='flex items-center font-semibold gap-5'>
          <div>Home</div>
          <div>About</div>
          <div>Parking</div>
          <div>Prices</div>
          <div>Careers</div>
          <div>Contact Us</div>
          <div className='bg-blue-500 text-white rounded-full px-2 py-1'>
            <button>Login Here</button>
          </div>
        </div>   
    </div>
  )
}

export default Navbar