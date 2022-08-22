import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductDetails () {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch ('http://localhost:3005/products/' + productId)
        .then((res) => res.json())
        .then ((data) => setProduct(data))
    
    }, [productId]);

    if (!product) {
        return <strong>Loading...</strong>
    }


    return (
        <>
            <h1>Find out more about our programms:</h1>
            <h2>{product.name}</h2>
            <img src={product.image} alt={`${product.name} Image`}/> 
            <p>{product.description}</p>

        </>
    );
}