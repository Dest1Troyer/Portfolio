import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Home() {
  return (
    <>
    
    <div className='h-screen flex justify-end overflow-hidden'>
      <div className='absolute top-60 start-1 text-center w-2/3 h-2/3'>
        <div className='w-max relative left-56 bottom-6'><h1 className=' text-blue-950  font-semibold text-5xl font-mono pt-serif-bold'>Web Developer</h1></div>
        <div className='w-max relative left-80  '><button className='ms-24 border-2 border-black rounded-lg font-semibold rounded-ee-3xl px-8 py-2 cursor-pointer'>Hire Me</button></div>
        <div className='w-max flex relative left-64 top-4'><h3 className='text-5xl pt-serif-bold paprika-regular' >8+</h3><p className='left-2 text-left relative w-max'>Years of Experience in Web<br/> development</p></div>
        <div className='w-max flex relative left-72 top-12 '><p className='left-2 text-right relative w-max me-5'>Projects Worked in my<br/>career</p><h3 className='text-5xl pt-serif-bold paprika-regular' >20+</h3></div>
      </div>
      <div className='flex w-2/5 relative start-56'><img src="src/person.png" alt="Person's image" className='absolute w-max  z-10' />
      </div>
      <div className='h-full w-1/3 bg-gradient-to-t overflow-hidden flex relative from-slate-300 to-blue-200'>
        <h1 className='rotate-90 max-h-fit text-6xl relative top-44 start-40 text-white font-extrabold' >JOHN <span className='text-blue-950'>ALEX</span></h1>
      </div>
    </div>
    </>
  )
}

export default Home