import { IconContext } from 'react-icons'
import { BsGraphUp } from 'react-icons/bs'
import styles from '../styles/Logo.module.scss'

interface Props {
    light?: boolean
}

export default function Logo({ light = true }: Props) {
    return (
        <span className={styles.logo}>
            <IconContext.Provider value={{ color: light ? 'black' : 'white', size: '28px' }}>
                <BsGraphUp />
            </IconContext.Provider>
            <span className={styles.text}>
                <p style={{
                    color: light ? 'black' : 'white'
                }}>REVENUE AT WORK</p>
                <p style={{
                    color: light ? 'black' : 'white'
                }}>Revenue Management & Business Intelligence</p>
            </span>
        </span>
    )
}