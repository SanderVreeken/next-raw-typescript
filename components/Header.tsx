import { useEffect, useRef } from 'react'
import { MdLanguage, MdMailOutline, MdStayPrimaryPortrait } from 'react-icons/md'

import styles from '../styles/Header.module.scss'
import Anchor from './Anchor'
import Logo from './Logo'

// TODO: Could be moved to seperate file in case changed to dicts.
const symbols = [{
    href: 'tel:+31612480089',
    icon: <MdStayPrimaryPortrait />
}, {
    href: 'mailto:info@revenueatwork.com',
    icon: <MdMailOutline />
}, {
    // TODO: Change the href of the icon below to configure the right language.
    href: '/',
    icon: <MdLanguage />
}]
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

// TODO: Locked for scrolling.
export default function Header() {
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
                        {symbols.map(symbol => (
                            <Anchor href={symbol.href}>
                                {symbol.icon}
                            </Anchor>
                        ))}
                    </span>
                </span>
            </span>
        </header>
    )
}