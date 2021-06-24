import styles from '../styles/Icon.module.scss'

export default function Icon() {
    return (
        <span className={styles.icon} id='icon'>
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="75" height="75" fill="white"/>
                    <circle cx="37.5" cy="37.5" r="36.5" stroke="black" stroke-width="2"/>
                <rect x="19" y="17" width="37" height="31" rx="3" stroke="black" stroke-width="2"/>
                <line x1="38" y1="49" x2="38" y2="56" stroke="black" stroke-width="2"/>
                <rect x="26" y="56" width="23" height="2" rx="1" fill="black"/>
                <rect x="24" y="43" width="28" height="2" rx="1" fill="black"/>
                <rect x="49" y="22" width="2" height="20" rx="1" fill="black"/>
                <rect x="25" y="35" width="2" height="7" rx="1" fill="black"/>
                <rect x="33" y="29" width="2" height="13" rx="1" fill="black"/>
                <rect x="41" y="26" width="2" height="16" rx="1" fill="black"/>
            </svg>
        </span>
    )
}