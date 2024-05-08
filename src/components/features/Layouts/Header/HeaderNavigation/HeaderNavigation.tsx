"use client"

import BurgerButton from '@/components/ui/BurgerButton/BurgerButton';
import { PageLink } from '../Header';
import styles from './HeaderNavigation.module.scss';
import Link from 'next/link';
import { HTMLAttributes, useState } from 'react';
import { usePathname } from 'next/navigation'


type HeaderNavigationProps = HTMLAttributes<HTMLElement> & {
    pages: PageLink[],
}

const HeaderNavigation = ({ pages, className, ...props } : HeaderNavigationProps) => {
    const [isOpened, setIsOpened] = useState(false);
    const pathname = usePathname()

    const handleBurgerClick = () => {
        setIsOpened(!isOpened);
    }

    return (
        <nav className={`${styles.nav} ${className ? className : ""}`} {...props}>
            <BurgerButton 
                onClick={() => handleBurgerClick()} 
                cross={isOpened} 
                className={styles.burgerBtn}
            />

            <ul className={`${styles.list} ${isOpened ? styles.opened : ""}`}>
                {pages.map(({href, title}, index) => (
                    <li key={index}>
                        <Link 
                            href={href} 
                            className={`${styles.link} ${href === pathname ? styles.active : ""} animate-on-hover`} 
                            onClick={() => handleBurgerClick()}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HeaderNavigation;