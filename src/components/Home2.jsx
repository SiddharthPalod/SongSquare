import React from 'react'
import { motion } from 'framer-motion'

function Home2() {
  return (
    <div className='z-60'>


    <div className='h-screen flex flex-row align-middle'>
        <div 
            className='max-md:hidden'
        >
        
        <svg width="882" height="798" viewBox="0 0 882 798" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M319.618 798L0 244.406V0H421.275L882 798L319.618 798Z" fill="#B41EB2"/>
        </svg>

        
        </div>

        <div className='bg-ipurple w-1/4 h-3/4 rounded-2xl mt-5 p-5 absolute right-10 translate-y-20 max-md:w-[80%]'>
            <img src='xyz' alt='img-not-found'/>
            <h1> Rohan is mad at you</h1>
        </div>
      </div>
    </div>
  )
}

export default Home2