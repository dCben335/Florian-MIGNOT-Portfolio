import { ProjectProps } from '@/libs/types/projects';
import styles from './ProjectCard.module.scss';
import { slugify } from '@/utils/reformat';
import Button from '@/components/ui/Button/Button';
import { HTMLAttributes } from 'react';
import Link from 'next/link';

type ProjectCardProps = ProjectProps & HTMLAttributes<HTMLElement>; {

};

const ProjectCard = ({ title, image, description, className, ...props } : ProjectCardProps) => {
    const projectLink = `/projets/${slugify(title)}`;
    const shortDescription = description.length > 200 ? `${description.slice(0, 300)}...` : description;

    return (
        <article className={`${className ? className : ""}`} {...props}>
            <Link href={projectLink} className={`${styles.projectCard}`} >
                <span className={styles.imageContainer}>
                    <img src={image} alt={`image de présentation du projet ${title}`} />
                </span>
                <span className={styles.content}>
                    <h3>{title}</h3>
                    <p>{shortDescription}</p>
                    <Button secondary={false}>
                        Voir le projet
                    </Button>
                </span>
            </Link>
        </article>
    );
};

export default ProjectCard;