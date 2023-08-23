import React from 'react'

function Card(props) {
  return (
    <div className='mx-auto border-2 border-white p-5 rounded-md w-96 h-60 flex flex-col justify-between'>
        <div className='flex flex-col gap-5'>
            <p className='text-white text-2xl font-bold '>{props.heading}</p>
            <p className='text-gray-300 text-sm'>{props.description}</p>
        </div>
        <p className='text-blue-600 text-xl'>Know More</p>
    </div>
  )
}

export default Card