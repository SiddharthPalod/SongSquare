import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio';
import { state } from '../components';
import { Icon } from '@iconify/react';
import { Tilt } from 'react-tilt';
import { artist_songs } from './data';

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
          className='p-3 pl-5 pr-5 sm:w-[360px] w-full bg-[#5C1D6B] text-white hover:border-4 border-ipink' //added responsive box
        >

            <div className='relative w-full h-[230px] mt-5'>
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
  


function Author() {
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
    {(snap.artist || snap.user) &&(
              <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 ,ease:'easeInOut'}} >

    <div className='h-screen'>
        <div className='flex flex-row justify-center p-4 mt-10 mb-10 text-dark font-bold'>
        {snap.user &&(
        <>
        <div className='box p-4 bg-ipink w-1/3 mr-5 rounded-2xl'>
            ADD YOUR FILE HERE  {/* Add Music file */}
        </div>
        <div className='box p-4 text-center bg-ipink w-1/5 rounded-2xl'>
            Add Song           {/* Add music */}
        </div> 
        </>
        )}

        {snap.artist &&(     
        <>
        <div className='box p-4 text-center items-center flex justify-center space-x-3 bg-ipink w-1/5 rounded-2xl'>
            <Icon icon="la:donate" style={{scale:"2"}} />
            <b> Tip Artist </b>  {/* Give TIP */}
        </div> 

        </>
        )}

        </div>

        <div>
            <div className='absolute translate-x-[-40%] translate-y-[-20%] top-[50%] left-[50%] z-30'>
            <svg width="400" height="400" viewBox="0 0 836 836" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M227.648 822.6L9.88036 9.88035L822.6 227.648L227.648 822.6Z" fill="#B41EB2" fill-opacity="0.33" stroke="#5C1D6B" stroke-width="13"/>
            </svg>
            </div>
            <div className='avatar flex justify-center '>        
                <div className="w-1/4 rounded-full border-8 border-ipink">
                    <img src="https://plus.unsplash.com/premium_photo-1666265384842-31bdda25f026?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
            </div>
        </div>
        
        <div className='w-1/3 absolute top-1/2 ml-10'>
            <h1 className='text-4xl font-bold capitalize'>MEET RAMAIYA CHAN</h1> 
            <h1 className='text-2xl'>Former President of UN</h1>
            <p>Aiming to change world with new technologies</p>
            <h3 className='text-xl font-semibold'>No of songs: <span> xyz </span></h3>
        </div>

    </div>
    
    <div className='mx-5 mt-10 flex flex-wrap gap-7 justify-center bg-ipink p-4'>
      {artist_songs.map((article, index) => (
        <ArtistMusic
          key={`article-${index}`}
          title={article.name}
          description={article.description}
          image={article.image}
          imagelink={article.source_code_link}
        />
      ))}
    </div>

    </motion.div>)}
</AnimatePresence>
  )
}

export default Author