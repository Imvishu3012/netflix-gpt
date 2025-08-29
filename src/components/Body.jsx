import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import React, { useEffect } from 'react'
import Login from './Login'
import { Browse } from './Browse'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
const Body = () => {
    const dispatch = useDispatch();
    const AppRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/Browse",
            element: <Browse/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const {uid, displayName, email} = user;
    dispatch(addUser({uid:uid, displayName:displayName, email:email}))
    // ...
  } else {
    dispatch(removeUser())
    // User is signed out
    // ...
  }
});
    },[])

  return (
    <div>
        <RouterProvider router = {AppRouter}/>
    </div>
  )
}

export default Body