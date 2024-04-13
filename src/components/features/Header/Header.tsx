import Link from 'next/link';
import styles from './Header.module.scss';

type HeaderProps = {
    
}

const Header = ({} : HeaderProps) => {
    return (
        <header className={styles.header}>
            <Link href={"/"}>
                <img src="" alt="" />
            </Link>

            <nav>
                <button>a</button>
                <ul>
                    <li>
                        <Link href={"/"}>Accueil</Link>
                    </li>
                    <li>
                        <Link href={"/projets"}>Mes Projets</Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;