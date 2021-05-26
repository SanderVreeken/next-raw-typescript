import products from '../elements/products'
import styles from '../styles/Products.module.scss'
import Product from './Product'

export default function Products() {
    return (
        <span className={styles.products}>
            <h3>Our Services</h3>
            <span>
                {products.map(product => <Product product={product} />)}    
            </span>
        </span>
    )
}