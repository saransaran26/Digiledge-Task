import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Update from './components/Update'
import Create from './components/Create'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    <Route path='/edit/:id' element={<Update/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
