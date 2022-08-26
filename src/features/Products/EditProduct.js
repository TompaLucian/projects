import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../Auth/AuthContext";
import styles from "./Products.module.css";



export function EditProduct() {
    const [values, setValues] = useState({
        name: '',
        poster: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        poster: '',
    });

    const { productId } = useParams();

    useEffect(() => {
        fetch('http://localhost:3005/products/' + productId)
        .then(res => res.json())
        .then((data) => setValues(data));
    }, [productId])
    

    const [message, setMessage] = useState('');
    
    const {accessToken} = useAuthContext();

    function handleInputChange(e) {
        setErrors({ ...errors, [e.target.name]: '' });
        setValues({ ...values, [e.target.name]: e.target.value }); 
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const data = await fetch('http://localhost:3005/products/' + values.id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(values),
        }).then((res) => res.json());

        setMessage('Your program was updated successfully');    
    }

    return (
        <>
        <h1>Edit the program: {values.name}</h1>
        <form onSubmit={handleSubmit}> 
        {message && (<p className={styles['message']}>{message}</p>)}
            <p>
                <label className={styles['label']} htmlFor="name">Name</label>
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
                <label className={styles['label']} htmlFor="poster">Poster</label>
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
            <button type="submit" className={styles['button']}>Finish</button>
            </p>

        </form>
        </>
    )
}