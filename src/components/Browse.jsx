import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
export const Browse = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
signOut(auth).then(() => {
    navigate("/")
  // Sign-out successful.
}).catch((error) => {
  navigate("/error")
  // An error happened.
});
  }
  return (<><div className='flex justify-between'>
    <div>Browse</div>
    <button onClick={handleClick} className='text-white bg-gradient-to-b bg-red-600 p-2 m-4 rounded-lg cursor-pointer transition-all duration-100 ease-out hover:bg-red-500 active:scale-95 outline-none font-bold select-none shadow-red-400  shadow-lg'>Sign Out</button>
    </div>
    </>
  )
}
