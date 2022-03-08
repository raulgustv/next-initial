//import Link from "next/link"
import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'

const Navbar = () => {

    const menuItems = [
        {
            id: 1,
            text: 'Home',
            href: '/'
        },
        {
            id: 2,
            text: 'About',
            href: '/about'
        },
        {
            id: 3,
            text: 'Contact',
            href: '/contact'
        },
        {
            id: 4,
            text: 'Pricing',
            href: '/pricing'
        }
    ]

    return (
        <nav className={styles ['menu']}>
            {menuItems.map(({text, href, id}) =>(
                <ActiveLink key={id} text={text} href={href} />
            ))}
            {/* <ActiveLink text='Home' href="/" />
            <ActiveLink text='About' href="/about" />
            <ActiveLink text='Contact' href="/contact" />
            <ActiveLink text='Pricing' href="/pricing" /> */}
        </nav>
    )
}

export default Navbar