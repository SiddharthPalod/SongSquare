import React from 'react'
import { Navbar } from './components'
import { Homepg, Author, Album, SearchRes } from './pages'

function App() {
  return (
    <div>
      <Navbar/>
      <Homepg/>
      <Author/>
      <Album/>
      <SearchRes/>
    </div>
  )
}

export default App