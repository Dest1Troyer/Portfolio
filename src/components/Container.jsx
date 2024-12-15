import React from 'react'
function Container({title,subtitle,isback,istextcolor,defaultback='bg-slate-100',children}) {
  return (
    <div className={`h-max flex flex-col justify-center align-middle ${isback?`${defaultback}`:'bg-none'}`}>
      <div className='mx-20 relative my-12 w-max h-max' >
      <h1 className={`text-3xl inria-serif-bold ${istextcolor?'text-white':'text-black'}`}>{title}</h1>
      <h1 className='mt-4 w-max paprika-regular text-4xl text-slate-400'>{subtitle}</h1>
      </div>
      {children}{/* Here all the other components are going to add */}
    </div>
  )
}

export default Container