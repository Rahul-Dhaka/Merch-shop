import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  
  return (
    <>
    <div className='h-screen w-screen '>
    <Navbar/>
    <Outlet/>
    </div>
    
    </>
    
  )
}

export default App
