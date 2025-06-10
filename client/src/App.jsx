import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './Home'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Registration from './components/Registration'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer 
        position="top-center" 
        autoClose={2000}
      />
    <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/products' element={<Product/>}/>
         <Route path='/registeration' element={<Registration/>}/>
         <Route path='/login' element={<Login/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
