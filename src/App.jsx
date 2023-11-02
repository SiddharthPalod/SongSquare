import React from 'react'
import { MusicPlayer, Navbar } from './components'
import { Homepg, Author, Album, SearchRes } from './pages'

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Homepg/>
      <Author/>
      <Album/>
      <SearchRes/> */}
      <MusicPlayer/>
    </div>
  )
}

export default App