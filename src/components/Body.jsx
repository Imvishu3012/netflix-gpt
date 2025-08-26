import React from 'react'
import Login from './Login'
import { Browse } from './Browse'
import { RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
const Body = () => {
    const Login = lazy(()=>import('./Login'))
    const AppRouter = createBrowserRouter([
        {
            path: "/",
            element: <Suspense fallback={<div>Loading..</div>}><Login/></Suspense>
        },
        {
            path: "/Browse",
            element: <Browse/>
        }
    ])

  return (
    <div>
        <RouterProvider router = {AppRouter}/>
    </div>
  )
}

export default Body