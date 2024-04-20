import VideoAutoPlay from '@/components/ui/Video/VideoAutoPlay';
import styles from './Hero.module.scss';

type HeroProps = {
    
}

const Hero = ({  } : HeroProps) => {
    return (
        <>
            <section className={styles.hero}>
                <VideoAutoPlay className={styles.video} fileName="/assets/hero.mp4" loop muted />
                <div className={styles.content}>
                    <h1 className={styles.title}>Bienvenue sur mon portfolio</h1>
                </div>
            </section>  
        </>
    );
};

export default Hero;