import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio';
import { ArtistMusic, state } from '../components';
import { Icon } from '@iconify/react';
import { artist_songs } from './data';

// add to blockchain
let songs = [];

function Author() {
    const snap = useSnapshot(state);
    
  
  const [text,setText] = useState("ADD YOUR FILE HERE")
  const [str, setStr] = useState("");
  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setText(selectedFile.name);
      const result = await audioToBase64(selectedFile);
      setStr(result);
    }
  }
  
  const handleButtonClick = () => {
    songs.push(str);
    setText("ADD YOUR FILE HERE")
    alert("Music added successfully");
    console.log(songs)
  }


  async function audioToBase64(audioFile) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onerror = reject;
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(audioFile);
    });
  }

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
        <div className='flex flex-row justify-center p-4 my-10 text-dark font-bold max-md:my-0'>
        {snap.user &&(
        <>
        <label htmlFor="fileInput" className="box p-4 bg-ipink w-1/3 mr-5 rounded-2xl max-md:w-2/3 max-md:p-2">
                    { text }
          <input
            type="file"
            id="fileInput"
            accept="audio/mp3"
            style={{ display: 'none' }} // Hide the default file input
            onChange={(e) => handleFileChange(e)} // Add an onChange handler if needed
          />
        </label>
                      
                  <button className='box p-4 text-center bg-ipink w-1/5 rounded-2xl max-md:w-1/3 max-md:p-2 '
                  onClick={handleButtonClick}>
          Add Music
            {/* Add music */}
        </button> 
        </>
        )}

        {snap.artist &&(     
        <>
        <div className='max-md:w-1/2 box p-4 text-center items-center flex justify-center space-x-3 bg-ipink w-1/5 rounded-2xl'>
            <Icon icon="la:donate" style={{scale:"2"}} />
            <b> Tip Artist </b>  {/* Give TIP */}
        </div> 

        </>
        )}

        </div>

        <div>
          <div className='absolute translate-x-[-40%] translate-y-[-20%] top-[50%] left-[50%] z-30 max-md:hidden'>
            <svg width="400" height="400" viewBox="0 0 836 836" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M227.648 822.6L9.88036 9.88035L822.6 227.648L227.648 822.6Z" fill="#B41EB2" fill-opacity="0.15" stroke="#5C1D6B" stroke-width="13"/>
            </svg>
          </div>
          <div className='avatar flex justify-center '>        
                <div className="w-1/4 rounded-full border-8 border-ipink max-md:w-1/2">
                    <img src="https://plus.unsplash.com/premium_photo-1666265384842-31bdda25f026?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
          </div>
        </div>
        
        <div className='w-1/34 absolute top-1/2 ml-10 border-2 border-ipink rounded-2xl py-10 px-3 max-md:w-[80%] max-md:relative max-md:top-0 max-md:my-5'>
            <h1 className='text-4xl font-bold capitalize'>MEET RAMAIYA CHAN</h1> 
            <h1 className='text-2xl'>Former President of UN</h1>
            <p>Aiming to change world with new technologies</p>
            <h3 className='text-xl font-semibold'>No of songs: <span> xyz </span></h3>
        </div>

    </div>
    
    <div className='mx-5 mt-10 flex flex-wrap gap-7 justify-center bg-ipink p-4 mb-5'>
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

export { Author , songs}
