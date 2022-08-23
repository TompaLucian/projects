import { useState } from "react";
import styles from "./Auth.module.css";

export function Auth() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        retype_password: '',
        firstName: '',
        lastName: ''
    })

    function handleInputChange(e) {
       setValues({...values, [e.target.name]: e.target.value}); 
    }
    
    async function HandleSubmit(e) {
        e.preventDefault();
        const {retype_password, ...dataForServer} = values;

       const data = await fetch('http://localhost:3005/api/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(dataForServer),
       }).then((res) => res.json());

       console.log(data);
    }


    return (
        <>
        <div className={styles['main-container']}>
            <h1 className={styles['register']}>Register</h1>
            <form onSubmit={HandleSubmit} className={styles['form']}>
                <p>
                    <label className={styles['label']} htmlFor="email">Email</label>
                    <input className={styles['input']}
                     type="email" 
                     name="email" 
                     id="email"
                     value={values.email}
                     onChange={handleInputChange}>
                     </input>
                </p>
                <p>
                    <label className={styles['label']} htmlFor="password">Password</label>
                    <input className={styles['input']}
                     type="password" 
                     name="password" 
                     id="password"                     
                     value={values.password}
                     onChange={handleInputChange}>
                     </input>
                </p>
                <p>
                    <label className={styles['label']} htmlFor="retype_password">Re-type Password</label>
                    <input className={styles['input']}
                     type="password" 
                     name="retype_password" 
                     id="retype_password"
                     value={values.retype_password}
                     onChange={handleInputChange}>
                     </input>
                </p>
                <p>
                    <label className={styles['label']} htmlFor="firstName">First Name</label>
                    <input className={styles['input']}
                     type="text" 
                     name="firstName" 
                     id="firstName"
                     value={values.firstName}
                     onChange={handleInputChange}>
                     </input>
                </p>
                <p>
                    <label className={styles['label']} htmlFor="lastName">Last Name</label>
                    <input className={styles['input']}
                     type="text" 
                     name="lastName" 
                     id="lastName"                     
                     value={values.lastName}
                     onChange={handleInputChange}>
                     </input>
                </p>
                <p>
                    <button className={styles['button']}>Register</button>
                </p>
            </form>
        </div>
        </>
    )
};