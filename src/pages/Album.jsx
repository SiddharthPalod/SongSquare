import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio';
import { LatestPlay, PopularPlay, state } from '../components'

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
            Happy holi
            <LatestPlay/>
            <PopularPlay/>
        </div>

    </motion.div>)}
    </AnimatePresence>
    )
}

export default Album