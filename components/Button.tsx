import styles from '../styles/Button.module.scss'

export default function Button({ title }) {
    return (
        <button className={styles.button}>
            <h3>{title}</h3>   
        </button>
    )
}