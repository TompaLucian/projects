
// import styles from "./App.module.css" 

import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Auth } from "./features/Auth/Auth";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/auth" element={<Auth/>} />
            </Routes>
        </BrowserRouter>
    );
}

export { App };