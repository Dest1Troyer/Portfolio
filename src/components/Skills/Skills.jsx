import React from 'react'
import Arrow from './right-arrow.png'
function Skills({logo,name}) {
  return (
    <div className='flex rounded-md border-2 border-gray-300 p-4 bg-white cursor-pointer'>
        <img className='w-1/12 h-4/6 mt-2 ms-4'src={logo} alt={logo} />
      <div className='px-6'>
        <h1 className='paprika-regular font-extrabold text-sky-950'>{name}</h1>
        <p className='italic'>Lorem ipsum dolor sit.</p>
      </div>
      <div className='w-4 relative left-16'>
        <img src={Arrow} alt="" />
        
      </div>
    </div>
  )
}

export default Skills