import { ProjectProps } from '@/libs/types/projects';
import styles from './Projects.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectWrapper from './ProjectWrapper/ProjectWrapper';
import Button from '@/components/ui/Button/Button';

type ProjectsProps =  {
    projects: ProjectProps[],
    title: string
    full?: boolean,
}

    
const Projects = ({ projects, title, full } : ProjectsProps) => {

    return (
        <section className={styles.projects}>
            <h2>{title}</h2>
            
            <ProjectWrapper projects={projects} />

            {!full && (   
                <Button href="/projets" renderAs={'link'} secondary={true}>
                    Voir tous les projets
                </Button>
            )}
        </section>
    );
};

export default Projects;