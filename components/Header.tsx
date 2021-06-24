import { useState } from 'react'
import { MdClear, MdLanguage, MdMailOutline, MdMenu, MdStayPrimaryPortrait } from 'react-icons/md'
import products from '../elements/products'

import styles from '../styles/Header.module.scss'
import Anchor from './Anchor'
import Icon from './Icon'
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
    const [isDropdown, setIsDropdown] = useState(false)
    const [isMenu, setIsMenu] = useState(false)

    return (
        <header className={styles.header}>
            <span>
                <span className={styles['leading--desktop']}>
                    <Anchor href='/'>
                        <Logo />
                        {/* <Icon /> */}
                    </Anchor>
                </span> 
                <span className={styles['leading--mobile']}>
                    <Anchor href='/'>
                        {/* <Logo /> */}
                        <Icon />
                    </Anchor>
                </span> 
                <span className={styles['trailing--desktop']}>
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
                <span className={`${styles['trailing--mobile']}`} onClick={() => setIsMenu(!isMenu)}>
                    {isMenu ? <MdClear /> : <MdMenu />}
                </span>
                {isMenu && (
                    <span className={styles.header__options}>
                        {links.map(link => (
                            <Anchor href={link.href}>
                                <p>{link.title}</p>
                            </Anchor>
                        ))}
                    </span> 
                )}
            </span>
        </header>
    )
}