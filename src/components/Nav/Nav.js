import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css"

export function Nav() {
    return (
        <>
        <header className={styles['nav-bar']}>
            <nav>
               <div>
                    <h1 className={styles['title']}><img className={styles['logo']} src="/logo/logo.png" alt="logo"/></h1>
               </div>
                <ul>
                    <li className={styles['home']}>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/Home">
                            Home
                        </NavLink>
                    </li>
                    <li className={styles['products']}>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/Products">
                            Products
                        </NavLink>
                    </li>
                    <li className={styles['push-right']}>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/login">
                            Login
                        </NavLink>
                    </li>
                    <li className={styles['push-right']}>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/register">
                            Register
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

