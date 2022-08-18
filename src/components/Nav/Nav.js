import { NavLink } from "react-router-dom";

// import styles from "/Nav.module.css"

export function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Homepage</NavLink></li>
                <li><NavLink to="/auth">Login</NavLink></li>
            </ul>
        </nav>
    )
}

