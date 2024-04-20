import { ProjectProps } from "@/libs/types/projects";
import styles from "./page.module.scss";
import data from "@/contents/projects.json";
import { slugify } from "@/utils/reformat";

const projects = data as unknown as ProjectProps[];
type PageProps = {
    params:  {
        title: string;
    };
}

const Page = ({ params }: PageProps) => {
    const project = projects.find((project) => slugify(project.title) === params.title);

    if (!project) {
        return (
            <main className={styles.main}>
                <h1>404</h1>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>

        </main>
    );
}

export default Page;