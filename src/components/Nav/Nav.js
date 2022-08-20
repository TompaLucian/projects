import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css"

export function Nav() {
    return (
        <>
        <header className={styles['nav-bar']}>
            <nav>
                <ul>
                    <li className={styles['home']}>
                        <NavLink className={({isActive}) => isActive ? styles.active : ""} to="/Home">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? styles.active : ""} to="/Products">
                            Products
                        </NavLink>
                    </li>
                    <li className={styles['push-right']}>
                        <NavLink className={({isActive}) => isActive ? styles.active : ""} to="/auth">
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

