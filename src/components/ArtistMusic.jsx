import { motion } from 'framer-motion';
import React from 'react'
import { Tilt } from 'react-tilt';



const ArtistMusic = ({ title, description, image, imagelink }) => {
    return (
      <motion.div
      onClick={() => window.open(imagelink, "_blank")}>
        <Tilt
          options={{
            max: 30,
            scale: 1,
            speed: 500,
          }}
          className='p-3 px-5  sm:w-[360px] w-full bg-[#5C1D6B] text-white hover:border-4 border-ipink' //added responsive box
        >

            <div className='relative w-full h-[250px] mt-5'>
              <div className='h-full bg-cover'>
                  <img
                      src={image}
                      alt='project_image'
                      className='w-full h-full hover:cursor-pointer'
                  />
              </div>
            </div>

          <div className='mt-3'>
            <h3 className='text-white font-bold text-[24px] leading-6'>{title}</h3>
            <p className=' text-[14px]'>{description}</p>
          </div>
  
        </Tilt>
      </motion.div>
    );
};
  

export default ArtistMusic