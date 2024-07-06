import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './routes/home/home'
import Products from './routes/products/products'
import Budget from './routes/budget/budget'
import Budgets from './routes/budgets/budgets'
import BudgetDetail from './routes/budget-detail/budget-detail'
import './styles/global.css'
import Percent from './routes/percent/percent'
import Categories from './routes/categories/categories'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/budget" element={<Budget />}/>
        <Route path="/budgets" element={<Budgets />}/>
        <Route path="/budget-detail/:id" element={<BudgetDetail />}/>
        <Route path="/percents" element={<Percent />}/>
        <Route path="/categories" element={<Categories />}/>
      </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
