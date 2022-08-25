import { useState } from "react";
import { useAuthContext } from "../Auth/AuthContext";
import styles from "./Products.module.css";



export function AddProduct () {
    const [values, setValues] = useState({
        name: '',
        poster: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        poster: '',
    });

    const [message, setMessage] = useState('');
    
    const {accessToken} = useAuthContext();

    function handleInputChange(e) {
        setErrors({...errors, [e.target.name]: '' });
        setValues({...values, [e.target.name]: e.target.value }); 
    }

    async function handleSubmit(e) {
        e.PreventDefault();
        const data = await fetch('http://localhost:3005/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(values),
        }).then((res) => res.json());

        setMessage('Congrats! You have added your program.');
    }

    return (
        <>
        <h1>Add your program</h1>
        <form onSubmit={handleSubmit}> 
        {message && (<p className={styles['message']}>{message}</p>)}
            <p>
                <label className={styles['label']} htmlFor="email">Name</label>
                <input className={styles['input']}
                 type="text" 
                 name="name" 
                 id="name"
                 value={values.name}
                 onChange={handleInputChange}>
                 </input>
            </p>
            {errors.name && <p className={styles['add_name']}>{errors.name}</p>}
            <p>
                <label className={styles['label']} htmlFor="email">Poster</label>
                <input className={styles['input']}
                 type="text" 
                 name="poster" 
                 id="poster"
                 value={values.email}
                 onChange={handleInputChange}>
                 </input>
            </p>
            {errors.poster && <p className={styles['add_poster']}>{errors.poster}</p>}
            <p>
            <button className={styles['button']}>Add Program</button>
            </p>

        </form>
        </>

    )
}