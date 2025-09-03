import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (<div className='absolute bg-gradient-to-r from-black/10 h-full w-full text-white '>
    <div className='pt-36 ml-12 text-6xl  w-1/3'>
    <h1 className='font-bold text-3xl'>{title}</h1>
    <p className='text-lg text-white leading-relaxed drop-shadow-lg line-clamp-3 py-2'>{overview}</p>
    <div className='flex item items-center gap-3'>
      <button className='flex items-center gap-2 cursor-pointer bg-white text-black hover:bg-gray-200 transition-all duration-200 font-semibold px-6 md:px-8 py-2 md:py-3 rounded-md text-sm md:text-lg shadow-lg hover:scale-105'>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Play
            </button>
            
            {/* More Info Button */}
            <button className='flex items-center gap-2 cursor-pointer bg-gray-600/70 text-white hover:bg-gray-600/90 backdrop-blur-sm transition-all duration-200 font-semibold px-6 md:px-8 py-2 md:py-3 rounded-md text-sm md:text-lg border border-gray-500/30 hover:scale-105'>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              More Info
            </button>
    
    </div>
   </div>
    </div>
  )
}

export default VideoTitle;