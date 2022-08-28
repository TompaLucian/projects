import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../Auth/AuthContext";
import styles from "./Products.module.css";



export function EditProduct() {
    const [values, setValues] = useState({
        name: '',
        lenghth: '',
        type: '',
        poster: '',
        description: '',
        image: '',
        price: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        lenghth: '',
        type: '',
        poster: '',
        description: '',
        image: '',
        price: '',
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
        <div className={styles['main-section']}>
            <h1>Edit the program: {values.name}</h1>
            <form onSubmit={handleSubmit}> 
            {message && (<p className={styles['message']}>{message}</p>)}
                    <p>
                        <label className={styles['label']} htmlFor="name">Name: </label>
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
                        <label className={styles['label']} htmlFor="length">Class length: </label>
                        <select className={styles['input']}
                        name="length" 
                        id="length"
                        value={values.length}
                        onChange={handleInputChange}>
                            <option value="30">30 </option>
                            <option value="60">60 </option>
                            <option value="90">90 </option>
                            <option value="120">120 </option>
                        </select>
                    </p>
                    {/* {errors.name && <p className={styles['add_name']}>{errors.name}</p>} */}
                    <p>
                        <label className={styles['label']} htmlFor="type">Type: </label>
                        <input className={styles['input']}
                        type="text" 
                        name="type" 
                        id="type"
                        value={values.type}
                        onChange={handleInputChange}>
                        </input>
                    </p>
                    {/* {errors.poster && <p className={styles['add_poster']}>{errors.poster}</p>} */}
                    <p>
                        <label className={styles['label']} htmlFor="poster">Poster: </label>
                        <input className={styles['input']}
                        type="text" 
                        name="poster" 
                        id="poster"
                        value={values.poster}
                        onChange={handleInputChange}>
                        </input>
                    </p>
                    {/* {errors.poster && <p className={styles['add_poster']}>{errors.poster}</p>} */}
                    <p>
                        <label className={styles['label']} htmlFor="description">Description: </label>
                        <textarea className={styles['input']}
                        placeholder="Describe your activity in a few words.."
                        type="text" 
                        name="description" 
                        id="description"
                        value={values.description}
                        onChange={handleInputChange}>
                        </textarea>
                    </p>
                    {/* {errors.poster && <p className={styles['add_poster']}>{errors.poster}</p>} */}
                    <p>
                        <label className={styles['label']} htmlFor="image">Details Image: </label>
                        <input className={styles['input']}
                        type="text" 
                        name="image" 
                        id="image"
                        value={values.image}
                        onChange={handleInputChange}>
                        </input>
                    </p>
                    <p>
                        <label className={styles['label']} htmlFor="price">Price: </label>
                        <input className={styles['input']}
                        type="text" 
                        name="price"
                        // min="1"
                        // max="1000" 
                        id="price"
                        value={values.price}
                        // onInput={this.value}
                        onChange={handleInputChange}>
                        </input>
                    </p>
                    {errors.name && <p className={styles['add_name']}>{errors.name}</p>}
                <p>
                <button type="submit" className={styles['button']}>Finish update</button>
                </p>
            </form>
        </div>
        </>
    )
}