import { ProjectProps } from '@/libs/types/projects';
import styles from './Projects.module.scss';

type ProjectsProps =  {
    projects: ProjectProps[]
}

    
const Projects = ({ projects } : ProjectsProps) => {

    return (
        <div className={styles.projects}>
            {projects.map((project, index) => (
                <article key={index} className={styles.project}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <img src={project.image} alt={project.title} />
                </article>
            ))}
        </div>
    );
};

export default Projects;