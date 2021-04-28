import ProductI from '../interfaces/Product'
import styles from '../styles/Product.module.scss'
import Button from './Button'

interface Props {
    product: ProductI
}

export default function Product({ product }: Props) {
    return (
        <span className={styles.product}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <ul>
                {product.items.map(item => <li>{item}</li>)}
            </ul>
            <Button title='Read More' />
        </span>
    )
}