"use client";

import getIsClient from '@/hooks/useIsClient';
import { DetailedHTMLProps, useEffect, useRef, VideoHTMLAttributes } from 'react';

type VideoAutoPlayProps =DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> & {
    fileName: string
}

const VideoAutoPlay = ({ fileName, className, ...props }: VideoAutoPlayProps) => {
    const isClient = getIsClient();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, [videoRef])


    return (
        isClient ? (
            <video ref={videoRef} className={`${className ? className : ''}`}  {...props} >
                <source src={fileName} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        ) : null
    )
}

export default VideoAutoPlay;