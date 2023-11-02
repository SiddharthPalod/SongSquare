import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio';
import { state,LatestPlay,PopularPlay } from '../components'

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
            <div className='absolute translate-y-[-50%] translate-x-[-20%] font-gothic text-9xl uppercase left-1/2 backdrop-blur-[5px] rounder-2xl'> 
                Popular<br/>Songs
            </div>
            <PopularPlay/>
        </div>

    </motion.div>)}
    </AnimatePresence>
    )
}

export default Album