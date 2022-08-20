import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

import styles from "./Products.module.css";

export function Products () {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3005/api/products')
        .then((res) => res.json())
        .then((data) =>setProducts(data));
    }, []);

    if (!products) {
        return <strong>Loading..</strong>;
    }

    // const productList = [];
    // for ( product of products) {
    //     productList.push(
    //         <article>
    //             <h2>{product.name}</h2>
    //         </article>
    //     );
    // }

    return (
        <section className={styles['main-section']}>
            <h1>Get in shape with our programs and products:</h1>
            {products.map((product) => 
            ( <ProductCard key={product.id} item={product}/>
    ))}
        </section>
    )
}