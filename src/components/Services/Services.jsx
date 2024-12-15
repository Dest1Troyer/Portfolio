import React from 'react'

function Services({title,image}) {
  return (
    <>
    <div className='flex flex-col justify-center rounded-lg border-2  border-gray-300 p-4 bg-slate-100 cursor-pointer'>
      <div className='w-1/12 h-1/12 mx-auto'>
      <img src={image} alt={image}  />
      </div>      
      <h1 className='text-sky-950 mt-4 paprika-regular font-bold w-max mx-auto'>{title}</h1>
      <p className='text-center'>Lorem, ipsum dolor sit amet consectetur <br/>adipisicing elit. Facere sint, repellendus soluta <br/> iusto suscipit, dolorem unde sit <br/>expedita nihil accusantium hic explicabo <br/>officiis eligendi reiciendis.</p>
      
    </div>
    </>
  )
}

export default Services