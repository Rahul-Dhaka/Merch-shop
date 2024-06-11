import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  
  return (
    <>
    <div className='h-screen w-screen overflow-hidden'>
    <Navbar/>
    <div className='h-full w-screen mt-12 overflow-y-scroll '>
    <Outlet/>
    </div>
    
    </div>
    
    </>
    
  )
}

export default App
