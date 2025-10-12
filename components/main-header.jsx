import Link from "next/link";
import logo from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader() {
    return <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <img src={logo.src} alt="logo"/>
            NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies community</Link>
                </li>
            </ul>
        </nav>
    </header>
}