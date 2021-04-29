import { MdLanguage, MdMailOutline, MdStayPrimaryPortrait } from 'react-icons/md'

import styles from '../styles/Header.module.scss'
import Anchor from './Anchor'
import Logo from './Logo'

// TODO: Locked for scrolling.
export default function Header() {
    // TODO: Could be moved to seperate file in case changed to dicts.
    const icons = [<MdStayPrimaryPortrait />, <MdMailOutline />, <MdLanguage />]
    const links = [{
        href: '/services',
        title: 'Services'
    }, {
        href: '/about-us',
        title: 'About Us'
    }, {
        href: '/blog',
        title: 'Blog'
    }, {
        href: '/contact',
        title: 'Contact'
    }]
    const titles = ['Services', 'About Us', 'Blog', 'Contact']

    return (
        <header className={styles.header}>
            <span>
                <span role='leading'>
                    <Anchor href='/'>
                        <Logo />
                    </Anchor>
                </span>
                <span role='trailing'>
                    <span>
                        {links.map(link => (
                            <Anchor href={link.href}>
                                <p>{link.title}</p>
                            </Anchor>
                        ))}
                    </span>
                    <span>
                        {icons.map(icon => icon)}
                    </span>
                </span>
            </span>
        </header>
    )
}