import Login from './Login'
import React from 'react'
import { Browse } from './Browse'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

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
const Body = () => {
  return (
    <div>
        <RouterProvider router = {AppRouter}/>
    </div>
  )
}

export default Body

