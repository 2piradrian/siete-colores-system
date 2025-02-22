import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./home/home-route";
import ProductsRoute from "./products/products-route";

export default function RoutesManager() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeRoute />} />

                <Route path="/products" element={<ProductsRoute />}/>
                <Route path='/products/:code' element={<ProductsRoute />}/>
            
            </Routes>
        </BrowserRouter>
    )
};