import React, {useState, useEffect} from 'react'
import { state } from '.';
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio';


function MusicPlayer() {
    const snap = useSnapshot(state);
    const [isFirstIconVisible, setIsFirstIconVisible] = useState(true);

    const handleIconClick = () => {
      setIsFirstIconVisible(!isFirstIconVisible);
    };

  return (
    <AnimatePresence>
    {snap.music &&(
              <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 ,ease:'easeInOut'}} >
        <div className='flex flex-row'>
            <div className='w-1/4 h-44 p-4 ml-28 mt-5 rounded-2xl bg-ipink'> Powerful Peaopl </div>
            <div className='w-1/2 mx-28 mt-5 p-4 rounded-2xl bg-ipink'> Romero  </div>
        </div>


        <div className='flex flex-row justify-between px-10 bg-ipink p-1 mx-10 rounded-2xl items-center my-10'>
            
            <img
            src='https://images.unsplash.com/photo-1696813519917-1fb0a17177b7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D'
            alt='not-found'
            className='rounded-2xl border-4 border-dark'
            style={{ maxWidth: '10%', maxHeight: '10%', objectFit: 'contain' }}/>
            
            <div className='audio-player rounded-2xl flex flex-col items-center'>
                <div className='flex flex-row space-x-10 py-2'>
                <Icon icon="iconamoon:player-end-fill" color="#323232" rotate={2} style={{scale:"2"}} />

                {isFirstIconVisible ? (
                    <Icon icon="octicon:play-16" color="#323232"  onClick={handleIconClick} style={{scale:"2"}} />
                ) : (
                    <Icon icon="zondicons:pause-outline" color="#323232"  onClick={handleIconClick} style={{scale:"2"}} />)
                }

                <Icon icon="iconamoon:player-end-fill" color="#323232" style={{scale:"2"}} />

                </div>
                <div className='flex flex-row items-center justify-center space-x-3'>
                    <h1>00:00</h1>
                    <div className='w-64 bg-dark translate-y-[0.1rem]'>
                        <div className='circle bg-dark w-2 h-2 rounded-2xl scale-150 translate-x-2 '/>
                    </div>
                    <h1>10:00</h1>
                </div>
            </div>

            
            <div className='flex felx-row space-x-10'>
                <a
                className="cursor-pointer"
                onClick={() => {
                    const originalXOffset = window.scrollX;
                    for (const key in state) {
                    if (key == "artist" || key== "music") {
                        state[key] = true;
                    } else {
                        state[key] = false;
                    }
                    }
                    window.scrollTo(originalXOffset, 0);
                }}
                >
                    <Icon icon="iconamoon:profile-circle-fill" color="#323232" style={{scale:"3"}}/>
                </a>

                <Icon icon="bxs:donate-heart" color="#323232" style={{scale:"3"}} />
            </div>


        </div>

    </motion.div>)}
</AnimatePresence>
  )
}

export default MusicPlayer