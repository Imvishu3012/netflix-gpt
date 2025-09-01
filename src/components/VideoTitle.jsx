import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (<div className='absolute aspect-video w-screen text-white '>
    <div className='pt-36 relative ml-20 text-6xl  w-1/3'>
    <h1 className='font-bold text-3xl'>{title}</h1>
    <p className='text-lg py-2'>{overview}</p>
    <div className=''>
    <button className='font-bold rounded-md text-2xl cursor-pointer bg-white text-black hover:opacity-70  py-2 mr-2 px-6'>Play</button >
    <button className='font-bold cursor-pointer text-2xl bg-gray-500/50 py-2 rounded-md mx-2 px-6'>More Info</button></div>
   </div>
    </div>
  )
}

export default VideoTitle;