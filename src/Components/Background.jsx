import React from 'react'
import Navbar from './Navbar'

const Background = () => {
    return (

        <div className='fixed z-[2] w-full h-screen'>
            <Navbar />
            <h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] text-zinc-950 tracking-tighter font-semibold'
            >
                DOCS.
            </h1>
        </div>

    )
}

export default Background
