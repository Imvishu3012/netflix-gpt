import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { Login_Bg } from '../utils/constants';
const GptMain = () => {
  return (<div><div className="absolute inset-0 -z-10">
  <img 
    src={Login_Bg} 
    alt="BackgroundImage"
    className="w-full h-full object-cover brightness-75"
  />
  <div className="absolute inset-0 bg-black/50"></div>
</div>

    <GPTSearchBar/>
    <GPTMovieSuggestions/>
    </div>
  )
}

export default GptMain;