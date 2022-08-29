
// import styles from "./App.module.css" 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Auth } from "./features/Auth/Auth";
import { Home } from "./features/Home/Home";
import { Products } from "./features/Products/Products";
import { ProductDetails } from "./features/Products/ProductDetails";
import { AuthContextProvider } from "./features/Auth/AuthContext";
import { AddProduct } from "./features/Products/AddProduct";
import { EditProduct } from "./features/Products/EditProduct";
import { EditProfile } from "./features/Auth/EditProfile";

function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/login" element={<Auth/>} />
                    <Route path="/register" element={<Auth/>} />
                    <Route path="/profile/edit/:productId" element={<EditProfile/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/products/add" element={<AddProduct/>} />
                    <Route path="/products/edit/:productId" element={<EditProduct/>} />
                    <Route path="/products/:productId" element={<ProductDetails/>} />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export { App };