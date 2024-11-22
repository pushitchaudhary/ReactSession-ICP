import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import About from './pages/About/About'

function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/about' element={<About/>} />

        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
