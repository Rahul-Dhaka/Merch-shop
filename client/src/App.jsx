import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'

function App() {

  
  return (
    <>
    <div className='h-vh w-vw overflow-hidden'>
    <Navbar/>
    <div className=' w-full mt-12 '>
    <Outlet/>
    </div>
    </div>
    <Footer/>
    
    </>
    
  )
}

export default App
