import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slider from './Slider'


const App = () => {
  return (
      <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
        <Slider />
      </div>
  )
}

export default App
