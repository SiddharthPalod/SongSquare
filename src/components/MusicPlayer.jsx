import React, {useState, useEffect} from 'react'
import { state } from '.';
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio';
import { songs } from '../pages';



function MusicPlayer() {
    const snap = useSnapshot(state);
    const [isFirstIconVisible, setIsFirstIconVisible] = useState(true);

    const handleIconClick = () => {
      setIsFirstIconVisible(!isFirstIconVisible);
    };

    const playSong = () => {
        return songs[0];
    }

  return (
    <AnimatePresence>
    {snap.music &&(
              <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 ,ease:'easeInOut'}} >
        <div className='flex justify-center mt-5 max-md:mx-5'>
            {/* When adding content from backend remove this h-44 this is here just for showing space */}
            <div className='w-1/3 h-44 p-4 ml-28 rounded-2xl bg-ipink max-md:h-auto max-md:ml-0 mr-4'> Powerful Peaopl </div>
            <div className='w-2/3 mx-28 p-4 rounded-2xl bg-ipink max-md:mx-0'> Romero  </div>
        </div>


        <div className='flex flex-row justify-between px-10 bg-ipink py-1 mx-10 rounded-2xl items-center my-10 max-md:w-[80%] max-md:justify-center'>
            <div className='object-contain max-md:hidden' style={{ maxWidth: '10%', maxHeight: '10%' }}>
            <img
            src='https://images.unsplash.com/photo-1696813519917-1fb0a17177b7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D'
            alt='not-found'
            className='rounded-2xl border-4 border-dark'/>
            </div>
            
            {/* <div className='audio-player rounded-2xl flex flex-col items-center max-md:scale-75'>
                <div className='flex flex-row space-x-10 py-2'>
                <Icon icon="iconamoon:player-end-fill" color="#323232" rotate={2} style={{scale:"2"}} />

                {isFirstIconVisible ? (
                    <Icon icon="octicon:play-16" color="#323232" onClick={handleIconClick} style={{ scale: "2" }} />

                ) : (
                    <Icon icon="zondicons:pause-outline" color="#323232"  onClick={handleIconClick} style={{scale:"2"}} />)
                }

                <Icon icon="iconamoon:player-end-fill" color="#323232" style={{scale:"2"}} />

                </div>
                <div className='flex flex-row items-center justify-center space-x-3'>
                    <h1>00:00</h1>
                    <div className='w-64 bg-dark translate-y-[0.1rem] max-md:w-32'>
                        <div className='circle bg-dark w-2 h-2 rounded-2xl scale-150 translate-x-2 '/>
                    </div>
                    <h1>10:00</h1>
                </div>
            </div> */}
                      
            <audio id='audio' src={playSong()} controls></audio>

            
            <div className='flex flex-row space-x-10 max-md:scale-50'>
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
