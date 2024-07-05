import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/home/home'
import Products from './routes/products/products'
import Budget from './routes/budget/budget'
import Budgets from './routes/budgets/budgets'
import BudgetDetail from './routes/budget-detail/budget-detail'
import './styles/global.css'
import Percent from './routes/percent/percent'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/budget" element={<Budget />}/>
        <Route path="/budgets" element={<Budgets />}/>
        <Route path="/budget-detail/:id" element={<BudgetDetail />}/>
        <Route path="/percents" element={<Percent />}/>
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>,
)
