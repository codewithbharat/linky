import React from 'react'
import Home from './pages/Home'
import Redirect from './pages/Redirect'
// importing react-router-dom 
import { Routes, Route } from "react-router-dom";
import './App.css'
const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Redirect />} />
      </Routes>
    </div>
  )
}

export default App