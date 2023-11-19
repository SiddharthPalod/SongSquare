import React from 'react'
import { MusicPlayer, Navbar } from './components'
import { Homepg, Author, Album, SearchRes } from './pages'
import { TransactionProvider } from './context/TransactionContext'

function App() {
  return (
    <TransactionProvider>
      <Navbar/>
      <Homepg/>
      <Author/>
      <Album/>
      <SearchRes/>
      {/* <MusicPlayer/> */}
    </TransactionProvider>
  )
}

export default App