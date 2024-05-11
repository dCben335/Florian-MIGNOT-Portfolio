"use client"

import { HTMLAttributes, useEffect, useState } from 'react';
import styles from './AnimatedTextAnim.module.scss';


type AnimatedTextAnimProps = HTMLAttributes<HTMLDivElement> & {
    animatedTexts: string[],
    timeBetweenTexts: number,
}

const AnimatedTextAnim = ({animatedTexts, timeBetweenTexts, className, ...props } : AnimatedTextAnimProps) => {
    const [activeTextIndex, setActiveTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTextIndex((prev) => {
                console.log(prev === animatedTexts.length - 1 ? 0 : prev + 1);
                return prev === animatedTexts.length - 1 ? 0 : prev + 1
            });
        }, timeBetweenTexts);

        return () => clearInterval(interval);

    }, [animatedTexts, timeBetweenTexts]);


    return (
        <div className={`${styles.container} ${className ?? ""}`} {...props}>
            {animatedTexts.map((text, index) => (
                <span 
                    key={index} 
                    className={`${styles.text} ${activeTextIndex === index ? styles.active : ""}`}
                    >
                    {text}
                </span>
            ))}
        </div>
    );
};

export default AnimatedTextAnim;