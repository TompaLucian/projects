import { Link } from "react-router-dom";
import styles from "./Products.module.css";

export function ProductCard({ item }) {
return (
    <article>
        <Link to={`/ProductDetails/${item.id}`}>
            <h2>{item.name}</h2>
            <img className={styles['img']} src={item.image} alt={`${item.name} image`} />
        </Link>
    </article>
)
}