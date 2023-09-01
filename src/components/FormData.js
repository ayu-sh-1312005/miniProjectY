import React from 'react';
import { toast } from 'react-hot-toast';

function FormData() {

  function handleClick(){
    toast.success('Form Submited Successfully')
  }
  return (
    <div id='formdata' className='bg-[#02042A] text-white'>
        <div className='w-[1080px] mx-auto flex items-center justify-center gap-10 py-10'>
            <div className=' w-[520px]'>
              <img src="https://nomadparadise.com/wp-content/uploads/2020/09/rentcar_02-1024x683.jpg" alt="" />
            </div>
            <div className='flex flex-col items-center'>
                <div>
                  <p className='text-3xl p-5 font-extrabold'>Book Now</p>
                </div>
              <div className='flex flex-col text-white gap-5 text-xl'>
                <div className='flex gap-2 items-center justify-between'>
                  <label htmlFor="">Booking Name</label>
                  <input className='bg-[#02042A] p-2 border-2 w-[200px] rounded-lg border-white' type="text" placeholder='Booking Name' />
                </div>
                <div className='flex gap-2 items-center justify-between'>
                  <label htmlFor="">Date</label>
                  <input className='bg-[#02042A] p-2 border-2 w-[200px] rounded-lg border-white' type="date" placeholder='Booking Name' />
                </div>
                <div className='flex gap-2 items-center justify-between'>
                  <label htmlFor="">Time</label>
                  <input className='bg-[#02042A] p-2 border-2 w-[200px] rounded-lg border-white' id="appt-time" type="time" name="appt-time" value="13:30" /> 
                </div>
                <div className='flex gap-2 items-center justify-between'>
                  <label htmlFor="">Address</label>
                  <input className='bg-[#02042A] p-2 border-2 w-[200px] rounded-lg border-white' type="text" placeholder='Address' />
                </div>
                <div className='flex justify-between p-2 text-xl duration-200 transition-all '>
                  <div className='flex gap-2 items-center justify-center text-xl font-semibold'>
                    <input type="radio" id="huey" name="drone" value="huey" checked />
                    <label for="huey">Hatchback</label>
                  </div>

                  <div  className='flex gap-2 items-center justify-center text-xl font-semibold'>
                    <input type="radio" id="dewey" name="drone" value="dewey" />
                    <label for="dewey">Sedan</label>
                  </div>

                  <div  className='flex gap-2 items-center justify-center text-xl font-semibold'>
                    <input type="radio" id="louie" name="drone" value="louie" />
                    <label for="louie">XUVs</label>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <button onClick={handleClick} className='bg-blue-500 p-2 hover:scale-110 transition-all duration-200 text-lg rounded-3xl font-bold'>Submit</button>
                </div>
              </div>
            </div>


        </div>
    </div>
  )
}

export default FormData