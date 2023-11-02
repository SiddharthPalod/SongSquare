import React from 'react'
import { Navbar } from './components'
import { Homepg, Author, Album } from './pages'

function App() {
  return (
    <div>
      <Navbar/>
      <Homepg/>
      <Author/>
      <Album/>
    </div>
  )
}

export default App