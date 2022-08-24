import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../features/Auth/AuthContext";

import styles from "./Nav.module.css"

export function Nav() {
    const {user, logout} = useAuthContext();

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

                    {user && (
                        <li className={styles['push-right']}>
                            Welcome, 
                            <NavLink  to="/profile">
                            {user.firstName}!{' '}
                            </NavLink>
                            <a href="/" onClick={(e) => {
                               e.preventDefault();
                               logout(); 
                            }}>
                             Logout   
                            </a>
                        </li>
                    )}

                    {!user && (
                    <>
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
                    </>
                    )}
                </ul>
            </nav>
        </header>
        </>
    )
}

