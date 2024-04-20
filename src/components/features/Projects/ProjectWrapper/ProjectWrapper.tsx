import { ProjectProps } from '@/libs/types/projects';
import styles from './ProjectWrapper.module.scss';
import { HTMLAttributes } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

type ProjectWrapperProps = HTMLAttributes<HTMLDivElement> & {
    projects: ProjectProps[]
}

const ProjectWrapper = ({ projects, className, ...props} : ProjectWrapperProps) => {
    return (
        <div className={styles.wrapper}>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} className={styles.project} />
            ))}
        </div>
    );
};

export default ProjectWrapper;