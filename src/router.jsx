import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Pages/Main'

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Main/>} />
    </Routes>
  )
}

export default Routers