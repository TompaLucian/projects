
// import styles from "./App.module.css" 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Auth } from "./features/Auth/Auth";
import { Home } from "./features/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/auth" element={<Auth/>} />
            </Routes>
        </BrowserRouter>
    );
}

export { App };