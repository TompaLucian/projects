import styles from "./Auth.module.css";

export function Auth() {
    return (
        <>
        <div className={styles['main-container']}>
            <h1 className={styles['register']}>Register</h1>
            <form className={styles['form']}>
                <p>
                    <label className={styles['label']} htmlFor="email">Email</label>
                    <input className={styles['input']} type="email" name="email" id="email"></input>
                </p>
                <p>
                    <label className={styles['label']} htmlFor="password">Password</label>
                    <input className={styles['input']} type="password" name="password" id="password"></input>
                </p>
                <p>
                    <label className={styles['label']} htmlFor="retype_password">Re-type Password</label>
                    <input className={styles['input']} type="password" name="retype_password" id="retype_password"></input>
                </p>
                <p>
                    <label className={styles['label']} htmlFor="fName">First Name</label>
                    <input className={styles['input']} type="text" name="fName" id="fName"></input>
                </p>
                <p>
                    <label className={styles['label']} htmlFor="lName">Last Name</label>
                    <input className={styles['input']} type="text" name="lName" id="lName"></input>
                </p>
                <p>
                    <button className={styles['button']}>Register</button>
                </p>
            </form>
        </div>
        </>
    )
};