import { ProjectProps } from "@/libs/types/projects";
import styles from "./page.module.scss";
import data from "@/contents/projects.json";
import { slugify } from "@/utils/reformat";
import Button from "@/components/ui/Button/Button";
import { notFound } from "next/navigation";
import ProjectSwiper from "@/components/features/Projects/ProjectSwiper/ProjectSwiper";

const projects = data as unknown as ProjectProps[];
type PageProps = {
    params:  {
        title: string;
    };
}

const Page = ({ params }: PageProps) => {
    const project = projects.find((project) => slugify(project.title) === params.title);

    if (!project) {
        notFound();
    }

    return (
        <main className={styles.main}>
            <img src={project.image} alt={project.title} className={styles.presentationImage}/>
            <section>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                {project.button && (
                    <Button href={project.button.link} renderAs="link">{project.button.text}</Button>
                )}
            </section>
            {project.medias.type === "images" && (
                <ProjectSwiper images={project.medias.images} className={styles.swiper}/>
            )}
        </main>
    );
}

export default Page;