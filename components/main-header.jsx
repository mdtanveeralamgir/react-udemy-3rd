import Link from "next/link";
import logo from '@/assets/logo.png';

export default function MainHeader() {
    return <header>
        <Link href="/">
            <img src={logo.src} alt="logo"/>
            NextLevel Food
        </Link>
        <nav>
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