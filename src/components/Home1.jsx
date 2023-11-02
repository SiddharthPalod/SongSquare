import React from 'react'

function Home1() {
  return (
    <div className='h-screen '>
        <div 
            className='bg-ipink w-screen max-md:hidden  h-3/4 rotate-[-60deg] absolute translate-x-[-20%] -z-30'
        />

        <div className='bg-ipink w-1/3 h-2/4 rounded-2xl absolute right-10 top-1/4 p-5'>
            <img src='xyz' alt='img-not-found'/>
            <h1> Rohan is mad at you</h1>
        </div>

        <div className='bg-transparent w-1/3 rounded-2xl border-ipink border-2 p-2 absolute right-10 top-3/4 mt-3'>
            hellow
        </div>

    </div>
  )
}

export default Home1