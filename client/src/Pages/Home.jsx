import React from 'react'
import VideoComponent from '../components/VideoComponent'
import ProductSection from '../components/ProductSection'

const Home = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-fit'><VideoComponent/></div>
      <div className='w-full h-fit'><ProductSection/></div>
    </div>
  )
}

export default Home
