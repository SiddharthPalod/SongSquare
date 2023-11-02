import React from 'react'
import { Home1, Home2, state } from '../components'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio';

function Homepg() {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
    {snap.home &&(
              <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 ,ease:'easeInOut'}} >


    <div className='overflow-hidden'>
        <Home1/>
                
        <Home2/>
    </div>
</motion.div>)}
</AnimatePresence>
  )
}

export default Homepg