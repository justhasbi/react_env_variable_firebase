import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Blog from './pages/Blog'

export default function App() {
  return (
    <div className='App'>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blog' element={<Blog />} />

      </Routes>
    </div>
  )
}
