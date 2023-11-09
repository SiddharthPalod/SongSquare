import React from 'react'
import { home1 } from '../assets'

function Home1() {
  return (
    <div className='h-screen '>
        <div className='max-md:hidden  -z-30'>

        <img className='homeImg absolute mix-blend-luminosity h-full' src={home1} alt="React Logo" />
        <svg width="806" height="689" viewBox="0 0 806 689" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 458.49L264.709 0H805.552L407.758 689H0V458.49Z" fill="#FF3179"/>
        </svg>
        </div>

        <div className='bg-ipink w-1/3 h-1/2 rounded-2xl absolute right-10 top-1/4 p-5 max-md:w-[80%]'>
            <img src='xyz' alt='img-not-found'/>
            <h1> Rohan is mad at you</h1>
        </div>

        <div className='bg-transparent w-1/3 rounded-2xl border-ipink border-2 p-2 absolute right-10 top-3/4 mt-3 max-md:w-[80%]'>
            hellow
        </div>

    </div>
  )
}

export default Home1