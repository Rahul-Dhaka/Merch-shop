import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />}/>
      {/* <Route path='login' element={<Login />}/> */}
      
    </Route> 
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} >
      
    </RouterProvider> 
  
)
