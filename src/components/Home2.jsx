import React from 'react'

function Home2() {
  return (
    <div className='h-screen'>
        <div 
            className='bg-ipurple w-screen max-md:hidden h-3/4 rotate-[60deg] absolute translate-x-[-20%] translate-y-[60%] -z-50'
        />

        <div className='bg-ipurple w-1/3 h-3/4 rounded-2xl p-5 absolute right-10 translate-y-[50%]'>
            <img src='xyz' alt='img-not-found'/>
            <h1> Rohan is mad at you</h1>
        </div>

        <div className='h-1/2 absolute bg-dark w-[80vw] translate-y-[70vw]'/>
    </div>
  )
}

export default Home2