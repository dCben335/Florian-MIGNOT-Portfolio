import Logo from '@/components/Icons/Logo';
import styles from './Footer.module.scss';
import Link from 'next/link';
import LinkedIn from '@/components/Icons/LinkedIn';

type FooterProps = {
    
}

const siteMap = [
    {
        title: "Accueil",
        link: "/"
    },
    {
        title: "Projets",
        link: "/projets"
    },
    {
        title: "Contact",
        link: "/contact"
    },
    {
        title: "Mentions légales",
        link: "/mentions-legales"
    },
    {
        title: "Conditions générales",
        link: "/conditions-generales"
    }
]

const socials = [
    {
        icon: <LinkedIn />,
        link: "https://www.linkedin.com/in/florian-mignot/"
    }
]

const Footer = ({  } : FooterProps) => {
    return (
        <footer className={styles.footer}>
            <section className={styles.wrapper}>
                <div className={`${styles.container} ${styles.logoContainer}`}>
                    <Link href={"/"} >
                        <Logo className={`${styles.logo} animate-on-hover`}/>
                    </Link>
                    <p>© 2024 - Tous droits réservés</p>
                </div>
                <div className={styles.container}>
                    <h3>Plan du site</h3>
                    <ul className={styles.siteMap}>
                        {siteMap.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link} className='animate-on-hover'>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.container}>
                    <h3>Me suivre</h3>
                    <ul className={styles.socials}>
                        {socials.map((social, index) => (
                            <li key={index}>
                                <Link href={social.link} className='animate-on-hover' target='_blank'>{social.icon}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <p className={styles.createdBy}>Ce site a été créé par <Link href={"https://www.github.com/dCben335"} target='_blank'>Benoît CABOCEL</Link></p>
        </footer>
    );
};

export default Footer;