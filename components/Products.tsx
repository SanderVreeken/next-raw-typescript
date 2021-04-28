import products from '../elements/products'
import styles from '../styles/Products.module.scss'
import Product from './Product'

export default function Products() {
    return (
        <span className={styles.products}>
            {products.map(product => <Product product={product} />)}
        </span>
    )
}