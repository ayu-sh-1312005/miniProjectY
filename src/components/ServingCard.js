import React from 'react'

function ServingCard(props) {
  return (
    <div className='flex flex-col bg-slate-50 rounded-md p-2 shadow-2xl hover:scale-110'>
        <div className=''>
            <img className='h-[250px] w-[300px] rounded-md' src={props.im} alt="" />
        </div>
        <div className='p-5 flex flex-col gap-2'>
            <p className='text-gray-950 text-xl'>{props.heading}</p>
            <button className='border-2 rounded-xl px-2 py-1 text-blue-500 border-blue-500'>Learn More</button>
        </div>
    </div>
  )
}

export default ServingCard