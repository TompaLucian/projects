import React from 'react';

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Auth/AuthContext';
import { ProductCard } from "./ProductCard";

import styles from "./Products.module.css";

export function Products () {
    const [products, setProducts] = useState(null);
    const {user} = useAuthContext();

    useEffect(() => {
        fetch('http://localhost:3005/api/products')
        .then((res) => res.json())
        .then((data) =>setProducts(data));
    }, []);

    if (!products) {
        return <strong>Loading..</strong>;
    }

    return (
        <section className={styles['main-section']}>
            { user && (
            <Link className={styles['add_product']} to="/products/add">Add new program</Link> 
            )}
            <h1>Get in shape with our programs:</h1>
            {products.map((product) => 
            ( <ProductCard key={product.id} item={product}/>
    ))}
        </section>
    )
}