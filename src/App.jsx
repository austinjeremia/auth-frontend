import { useState } from 'react'
import './App.css'
import SignUp from './pages/SignUp' 
import Login from './pages/Login';
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home';
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App
