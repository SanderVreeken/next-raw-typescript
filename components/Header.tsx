import { MdLanguage, MdMailOutline, MdStayPrimaryPortrait } from 'react-icons/md'

import styles from '../styles/Header.module.scss'
import Logo from './Logo'

// TODO: Locked for scrolling.
export default function Header() {
    // TODO: Could be moved to seperate file in case changed to dicts.
    const icons = [<MdStayPrimaryPortrait />, <MdMailOutline />, <MdLanguage />]
    const titles = ['Services', 'About Us', 'Blog', 'Contact']

    return (
        <header className={styles.header}>
            <span role='leading'>
                <Logo />
            </span>
            <span role='trailing'>
                <span>
                    {titles.map(title => <p>{title}</p>)}
                </span>
                <span>
                    {icons.map(icon => icon)}
                </span>
            </span>
        </header>
    )
}