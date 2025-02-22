import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./home/home-route";

export default function RoutesManager() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeRoute />} />
            </Routes>
        </BrowserRouter>
    )
};