"use client"

import { HTMLAttributes } from 'react';
import styles from './ProjectSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { ProjectImagesMediaProps } from '@/libs/types/projects';


type ProjectSwiperProps = HTMLAttributes<HTMLDivElement> & {
    images: ProjectImagesMediaProps["images"]
}

const ProjectSwiper = ({images, className, ...props } : ProjectSwiperProps) => {
    return (
        <div className={`${styles.swipper} ${className ?? ""}`} {...props}>
            <Swiper 
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ 
                    clickable: true, 
                    dynamicBullets: true,
                    dynamicMainBullets: 1,
                }}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <img src={image} alt={image}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProjectSwiper;