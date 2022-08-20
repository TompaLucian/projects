
// import styles from "./App.module.css" 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Auth } from "./features/Auth/Auth";
import { Home } from "./features/Home/Home";
import { ProductDetails } from "./features/Products/ProductDetails";
import { Products } from "./features/Products/Products";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/auth" element={<Auth/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/products" element={<ProductDetails/>} />
            </Routes>
        </BrowserRouter>
    );
}

export { App };