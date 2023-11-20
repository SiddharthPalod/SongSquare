import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio';
import { state,LatestPlay,PopularPlay } from '../components'
import { px3 } from '../assets';

function Album() {
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
    {snap.playlist &&(
              <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 ,ease:'easeInOut'}} >

        <div>
            <LatestPlay/>
            <div className='absolute translate-y-[-50%] translate-x-[-20%] font-gothic text-9xl uppercase left-1/2 backdrop-blur-[5px] rounder-2xl max-md:hidden z-20'> 
                Popular<br/>Songs
            </div>
            <img className='absolute mix-blend-luminosity translate-y-[-50%] right-0 max-md:hidden' src={px3} alt="React Logo" />
            <PopularPlay/>
        </div>

    </motion.div>)}
    </AnimatePresence>
    )
}

export default Album