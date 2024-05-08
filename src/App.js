import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Getproject from './pages/get-project/Getproject'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/getproject-form' element={<Getproject />} />
    </Routes>
  )
}

export default App