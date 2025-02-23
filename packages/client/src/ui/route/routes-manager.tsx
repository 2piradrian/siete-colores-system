import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./home/home-route";
import ProductsRoute from "./products/products-route";
import ProductEditor from "./product-editor/product-editor";
import BudgetRoute from "./budget/budget";
import BudgetsRoute from "./budgets/budgets";
import BudgetDetail from "./budget-detail/budget-detail";
import { CategoriesRoute } from "./categories/categories";
import { SubCategoriesRoute } from "./subcategories/subcategories";
import { PercentRoute } from "./percent/percent";

export default function RoutesManager() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeRoute />} />

                <Route path="/products" element={<ProductsRoute />}/>
                <Route path='/products/:code' element={<ProductEditor />}/>

                <Route path="/budget" element={<BudgetRoute />}/>
                <Route path="/budgets" element={<BudgetsRoute />}/>
                <Route path="/budget-detail/:id" element={<BudgetDetail />}/>

                <Route path="/categories" element={<CategoriesRoute />}/>

                <Route path="/subcategories" element={<SubCategoriesRoute />}/>

                <Route path="/percents" element={<PercentRoute />} />

                <Route path="*" element={<HomeRoute />} />
            </Routes>
        </BrowserRouter>
    )
};