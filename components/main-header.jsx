'use client';
import Link from "next/link";
import logo from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header-background";
import NavLink from "@/components/nav-link";


export default function MainHeader() {
    return <>
        <MainHeaderBackground/>
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logo} alt="logo" priority/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href='/meals'>Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href='/community'>Foodies community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}