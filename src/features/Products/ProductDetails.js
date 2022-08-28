import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../Auth/AuthContext";
import styles from "./Products.module.css";


export function ProductDetails () {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { accessToken } = useAuthContext();
    const navigate = useNavigate();
    const {user} = useAuthContext();


    useEffect(() => {
        fetch ('http://localhost:3005/products/' + productId)
        .then((res) => res.json())
        .then ((data) => setProduct(data))
    }, [productId]);

    if (!product) {
        return <strong>Loading...</strong>
    }

    async function handleDeleteProgram() {
        const res = window.confirm(`Are you sure you want to delete the program "${product.name}"?`);
        if(!res) {
            return;
        }

        await fetch('http://localhost:3005/products/' + product.id, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        navigate('/products');
    }

    return (
        <>
            <div className={styles['product_container']}>
                <h1>Find out more about our programms:</h1>
                <h2>{product.name}</h2>
                <div className={styles['product_details']}>
                    <p><strong>Price: {product.price} $/month</strong></p>
                    <p><strong>Class length: {product.length} minutes</strong></p>
                    <p><strong>{product.description}</strong></p>
                    <img className={styles['img_details']} src={product.image} alt={`${product.name} Image`}/> 
                </div>
                <div>
                { user && (
                        <><button className={styles['delete_button']} onClick={handleDeleteProgram}>Delete program</button>
                        <Link className={styles['edit_link']} to={`/products/edit/${product.id}`}>Edit your program</Link>
                        </>
                    )}
                </div>
            </div>    
        </>
    );
}