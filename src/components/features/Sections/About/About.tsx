import { HTMLAttributes } from 'react';
import styles from './About.module.scss';
import Image from 'next/image';
import Button from '@/components/ui/Button/Button';
import Link from 'next/link';


type AboutProps = HTMLAttributes<HTMLDivElement> & {
    
}

const About = ({ className, ...props } : AboutProps) => {
    return (
        <section className={`${styles.section} ${className ?? ""}`} {...props}>
            <h2 className={styles.title}>À Propos de Moi</h2>
            <div className={styles.gridContainer}>
                <div className={styles.imageContainer}>
                    <div className={styles.image}>
                        <Image src="/assets/florian_mignot.jpg" alt="photo de profil de Florian Mignot" fill />
                    </div>
                    <Button 
                        className={styles.cvButton}
                        href="/assets/CV_Florian_Mignot.pdf" 
                        renderAs="link" 
                        secondary={false} 
                        target='_blank'
                        >
                        Télécharger mon CV
                    </Button>
                </div>
                <div className={styles.content}>
                    <p>Je m&apos;appelle Florian Mignot et j&apos;ai 20 ans. Je suis actuellement en 3e année d&apos;étude d&apos;un <strong>BUT MMI</strong> (Métiers du Multimédia et de l&apos;Internet) à <strong>l&apos;IUT de Dijon-Auxerre</strong>. Depuis la deuxième année, je me suis spécialité en <strong>stratégie de communication numérique et design d&apos;expérience</strong>.</p>                    
                    <p><strong>Respectueux, ponctuel, motivé et dynamique</strong>, j&apos;aime particulièrement le <strong>travail</strong> <strong>d&apos;équipe</strong> que j&apos;ai déjà pu découvrir dans ma formation. En effet, lors de la réalisation de projets, j&apos;ai développé plusieurs compétences dans le domaine de la communication, par exemple en rédigeant des <strong>communiqués de presse</strong> et des <strong>articles de presse</strong>. J&apos;ai également acquis des compétences en <strong>webmarketing</strong>, notamment dans la création de campagnes <strong>Google Ads</strong> et la <strong>rédaction web</strong>. De plus, j&apos;ai réalisé des <strong>audits SEO</strong> et effectué des analyses des <strong>KPI</strong>, en créant des graphiques pour illustrer les données obtenues. En outre, j&apos;ai développé des compétences dans la <strong>création numérique</strong>, telles que le <strong>montage vidéo</strong>, la création <strong>de logos</strong> et la maîtrise des logiciels Adobe tels qu&apos;<strong>Illustrator</strong>, <strong>Photoshop</strong>, <strong>InDesign</strong> et <strong>Première Pro</strong>.</p>
                    <p>En dehors de mon travail professionnel, je m&apos;engage activement dans le domaine de la communication en consacrant mes compétences à des initiatives bénévoles, notamment en tant que <strong>modérateur</strong> sur les réseaux sociaux pour plusieurs <strong>influenceurs</strong>. À titre d&apos;exemple, je suis modérateur sur les réseaux sociaux 
                    de <Link href={"https://www.youtube.com/@GaspowRocketLeague"} target="_blank" className={styles.link}>Gaspow</Link> et <Link href={"https://www.youtube.com/@inoxtag"} target="_blank" className={styles.link}>Inoxtag</Link>.
                    Cette expérience enrichissante me permet non seulement de mettre en pratique mes compétences en communication, mais aussi de contribuer de manière positive à des communautés en ligne dynamiques.</p>
                </div>
            </div>
        </section>
    );
};

export default About;