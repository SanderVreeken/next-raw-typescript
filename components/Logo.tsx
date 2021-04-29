import styles from '../styles/Logo.module.scss'

interface Props {
    light?: boolean
}

export default function Logo({ light = true }: Props) {
    const renderImage = () => {
        return (
            <div style={{
                height: '70px',
                backgroundImage: light ? "url('assets/logo-light.png')" : "url('assets/logo-dark.jpg')",
                width: '342px'
            }}></div>
        )
    }

    return (
        <span className={styles.logo}>
            {renderImage()}
        </span>
    )
}