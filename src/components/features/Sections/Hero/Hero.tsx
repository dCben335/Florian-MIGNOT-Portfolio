import VideoAutoPlay from '@/components/ui/Video/VideoAutoPlay';
import styles from './Hero.module.scss';
import { HTMLAttributes } from 'react';
import AnimatedTextAnim from '../../AnimatedTextAnim/AnimatedTextAnim';

type HeroProps = HTMLAttributes<HTMLElement> & {
}

const Hero = ({ className, ...props } : HeroProps) => {
    const animatedTexts = ["Communication.", "Marketing.", "Digital.", "SEO & SEA.", "Réseaux sociaux.", "Vidéo.",  "WordPress.", "Shopify"];

    return (
        <section className={`${styles.hero} ${className ? className: ""}`} {...props}>
            <VideoAutoPlay className={styles.video} fileName="/assets/hero.mp4" loop muted />
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <AnimatedTextAnim
                        className={"h1"} 
                        animatedTexts={animatedTexts} 
                        timeBetweenTexts={3000} 
                    />
                    <h1 className={`${styles.title} p`}>Portfolio de Florian Mignot</h1>
                </div>
            </div>
        </section>  
    );
};

export default Hero;