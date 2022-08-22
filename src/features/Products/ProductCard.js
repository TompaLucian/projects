import { Link } from "react-router-dom";
import styles from "./Products.module.css";

export function ProductCard({ item }) {
return (
    <div>
        <article>
            <Link to={`/products/${item.id}`}>
                <h2>{item.name}</h2>
                <img className={styles['poster']} src={item.image} alt={`${item.name} poster`} />
            </Link>
        </article>
    </div>

    );
}