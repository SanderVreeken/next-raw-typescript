import products from '../elements/products'
import ProductI from '../interfaces/Product'
import styles from '../styles/Product.module.scss'
import Anchor from './Anchor'
import Button from './Button'

interface Props {
    product: ProductI
}

export default function Product({ product }: Props) {
    return (
        <span className={styles.product}>
            <span>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <ul>
                    {product.items.map(item => <li>{item}</li>)}
                </ul>
            </span>
            <Anchor href={product.href}>
                <Button title='Learn More' />
            </Anchor>
        </span>
    )
}