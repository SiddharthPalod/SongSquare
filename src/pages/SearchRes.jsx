import React from 'react'
import { artist_songs } from './data'
import { ArtistMusic, state } from '../components'
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';


function SearchRes() {
    const snap = useSnapshot(state);

    return (
    <AnimatePresence>
    {snap.searchon &&(
              <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 ,ease:'easeInOut'}} >


        <div className='text-8xl font-gothic p-10 max-md:text-5xl max-md:pb-0'> Search results for XYZ</div>
        <div className='bg-ipink mx-10 my-5 flex flex-row justify-evenly p-5 max-md:flex-col'>

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

        <div className='text-5xl font-gothic px-10 py-5'> You might also like: </div>
{/* here add list from the popular page */}

        <div className='bg-ipurple mx-10 my-5 flex flex-row justify-evenly p-5 mb-5 max-md:flex-col'>

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

export default SearchRes