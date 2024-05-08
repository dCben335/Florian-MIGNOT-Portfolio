"use client"

import { HTMLAttributes } from 'react';
import styles from './ProjectSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
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
                modules={[Navigation, Pagination, Scrollbar, A11y]}

                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    enabled: true,
                    // nextEl: '.swiper-button-next',
                    // prevEl: '.swiper-button-prev',
                }}
                pagination={{ 
                    clickable: true, 
                    dynamicBullets: true,
                    dynamicMainBullets: 1,
                }}
                allowSlideNext={true}
                allowSlidePrev={true}
                loop={true}
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