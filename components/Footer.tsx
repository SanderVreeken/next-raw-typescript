import { MdMailOutline, MdStayPrimaryPortrait } from 'react-icons/md'
import Link from 'next/link'
import Logo from './Logo'
import styles from '../styles/Footer.module.scss'
import { IconContext } from 'react-icons'

export default function Footer() {
    const contacts = [{
        icon: <MdMailOutline />,
        text: 'info@revenueatwork.com'
    }, {
        icon: <MdStayPrimaryPortrait />,
        text: '+31 612 480 089'
    }]

    return (
        <footer className={styles.footer}>
            <span className={styles.footer__body}>
                <span>
                    <span role='leading'>
                        <Logo light={false} />
                    </span>
                    <span role='trailing'>
                        {contacts.map(contact => (
                            <span>
                                <IconContext.Provider value={{ color: 'white', size: '14px' }}>
                                    {contact.icon}
                                </IconContext.Provider>
                                <p>{contact.text}</p>
                            </span>
                        ))}
                    </span>
                </span>
                <p>Chamber of Commerce no. 70219095, licensed in Breda, The Netherlands</p>
                <p>Copyright Revenue At Work, 2021</p>
                <p>Website maintainted by <Link href='https://www.linkedin.com/in/sandervreeken/'>Sander Vreeken</Link></p>
            </span>
        </footer>
    )
}