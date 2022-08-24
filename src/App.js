
// import styles from "./App.module.css" 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Auth } from "./features/Auth/Auth";
import { Home } from "./features/Home/Home";
import { Products } from "./features/Products/Products";
import { ProductDetails } from "./features/Products/ProductDetails";
import { AuthContextProvider } from "./features/Auth/AuthContext";


function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/login" element={<Auth/>} />
                    <Route path="/register" element={<Auth/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/products/:productId" element={<ProductDetails/>} />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export { App };