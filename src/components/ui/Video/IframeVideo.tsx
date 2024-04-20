import { DetailedHTMLProps, HTMLAttributes, IframeHTMLAttributes } from 'react';
import styles from './IframeVideo.module.scss';

type IframeVideoProps = DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> & {
        
}

const IframeVideo = ({ className, ...props } : IframeVideoProps) => {
    return (
        <iframe 
            className={styles.iframe} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            {...props}
        ></iframe>
    );
};

export default IframeVideo;