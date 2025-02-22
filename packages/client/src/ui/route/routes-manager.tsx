import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./home/home-route";
import ProductsRoute from "./products/products-route";
import ProductEditor from "./product-editor/product-editor";
import BudgetRoute from "./budget/budget";

export default function RoutesManager() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeRoute />} />

                <Route path="/products" element={<ProductsRoute />}/>
                <Route path='/products/:code' element={<ProductEditor />}/>

                <Route path="/budget" element={<BudgetRoute />}/>

                <Route path="*" element={<HomeRoute />} />
            
            </Routes>
        </BrowserRouter>
    )
};