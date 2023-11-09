import React from 'react'
import { MusicPlayer, Navbar } from './components'
import { Homepg, Author, Album, SearchRes } from './pages'
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <ParallaxProvider>
    <Navbar/>
      <Homepg/>
      <Author/>
      <Album/>
      <SearchRes/>
      {/* <MusicPlayer/> */}
    </ParallaxProvider>
  )
}

export default App