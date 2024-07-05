import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/home/home'
import Products from './routes/products/products'
import Budget from './routes/budget/budget'
import Budgets from './routes/budgets/budgets'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/budget" element={<Budget />}/>
        <Route path="/budgets" element={<Budgets />}/>
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>,
)
