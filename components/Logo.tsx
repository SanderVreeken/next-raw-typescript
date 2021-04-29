import styles from '../styles/Logo.module.scss'
import Image from 'next/image'

interface Props {
    light?: boolean
}

export default function Logo({ light = true }: Props) {
    const renderImage = () => {
        if (light) {
            return <Image height={74} src='/assets/logo-light.jpg' width={345} />
        } else {
            return <Image height={74} src='/assets/logo-dark.jpg' width={345} />
        }
    }

    return (
        <span className={styles.logo}>
            {renderImage()}
        </span>
    )
}