import React from 'react'
import { motion } from 'framer-motion'

function Home2() {
  return (
    <div>

      <motion.div className='mark bg-dark text-5xl uppercase p-3 font-bold overflow-hidden h-[20%] z-20 translate-y-20'> 
            <h1>
            Power ful people <span> have a way with words </span> 
            </h1>
            <h1>
            Wonderful people
             <span> have a way with life </span> 
            </h1>
            <h1>
            Wonderful people
             <span> have a way with life </span> 
            </h1>      
        </motion.div>

    <div className='h-screen flex flex-row align-middle'>
        <div 
            className='max-md:hidden -z-50 translate-x-[-1.9rem]'
        >
        
        <svg width="882" height="798" viewBox="0 0 882 798" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M319.618 798L0 244.406V0H421.275L882 798L319.618 798Z" fill="#B41EB2"/>
        </svg>

        
        </div>

        <div className='bg-ipurple w-1/4 h-3/4 rounded-2xl mt-5 p-5 absolute left-2/3 translate-y-20'>
            <img src='xyz' alt='img-not-found'/>
            <h1> Rohan is mad at you</h1>
        </div>
      </div>
    </div>
  )
}

export default Home2