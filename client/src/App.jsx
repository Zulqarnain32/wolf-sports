import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './Home'
import Navbar from './components/Navbar'
import Product from './components/Product'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/products' element={<Product/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
