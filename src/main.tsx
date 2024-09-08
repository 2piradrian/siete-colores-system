import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Budget, BudgetDetail, Budgets, Categories, Home, Percent, ProductEditor, Products } from './presentation'
import './presentation/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path='/products/:code' element={<ProductEditor />}/>
        <Route path='/products/new' element={<ProductEditor />}/>
        <Route path="/budget" element={<Budget />}/>
        <Route path="/budgets" element={<Budgets />}/>
        <Route path="/budget-detail/:id" element={<BudgetDetail />}/>
        <Route path="/percents" element={<Percent />}/>
        <Route path="/categories" element={<Categories />}/>
      </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
