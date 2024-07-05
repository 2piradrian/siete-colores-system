import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/global.css'
import Home from './routes/home/home'
import Products from './routes/products/products'
import Budget from './routes/budget/budget'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/budget" element={<Budget />}/>
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>,
)
