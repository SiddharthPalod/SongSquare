import React from 'react'
import { px2 } from '../assets'

function PopularPlay() {
  return (
    <div className='flex flex-row justify-evenly items-center'>

        <div className='w-1/3 text-white flex flex-col items-center max-md:m-10 max-md:w-[80%]'>
            <div className=' w-full h-64 bg-ipurple rounded-2xl p-4'>
                Forminig
            </div>
            <div className=' w-2/3 h-10 my-10 bg-ipurple rounded-2xl p-2 text-center font-bold text-dark '>
                Feeling Lucky Artist
            </div>
            <div className=' w-full h-64 bg-ipurple rounded-2xl p-4 '>
                dssdds
            </div>
        </div>

        <div className='max-md:hidden'>
        <svg width="759" height="832" viewBox="0 0 759 832" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M758.162 0H243.064L0 421L239.023 835H758.654L517.364 417.074L758.162 0Z" fill="#B41EB2"/>
        </svg>
        <img className='absolute mix-blend-luminosity bg-cover translate-y-[-100%]' src={px2} alt="React Logo" />
        </div>

        <div className='absolute font-gothic text-9xl uppercase right-20 backdrop-blur-[5px] rounder-2xl max-md:hidden'>
        Popular <br/>Artists
        </div>

    </div>
  )
}

export default PopularPlay