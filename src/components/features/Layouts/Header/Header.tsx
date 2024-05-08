

import Link from 'next/link';
import styles from './Header.module.scss';
import BurgerButton from '@/components/ui/BurgerButton/BurgerButton';
import { useState } from 'react';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation'
import Logo from '@/components/Icons/Logo';

type HeaderProps = {
    
}

export type PageLink = {
    title: string,
    href: string,
}

const pages: PageLink[] = [
    {
        title: "Accueil",
        href: "/"
    },
    {
        title: "Mes Projets",
        href: "/projets"
    },
    {
        title: "Contact",
        href: "/contact"
    }
]

const Header = ({} : HeaderProps) => {
    return (
        <header className={styles.header}>
            <Link href={"/"} className={styles.logo}>
                <Logo className={"animate-on-hover"}/>
            </Link>

            <HeaderNavigation pages={pages} className={styles.navigation} />
        </header>
    );
};

export default Header;