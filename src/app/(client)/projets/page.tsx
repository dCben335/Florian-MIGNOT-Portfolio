import Projects from "@/components/features/Projects/Projects";
import styles from "./page.module.scss";

import data from "@/contents/projects.json";
import { ProjectProps } from "@/libs/types/projects";

const projects = data as unknown as ProjectProps[];

const Page = () => {
    return (
        <main className={styles.main}>
            <Projects title="Mes Projets" full={true} projects={projects} />
        </main>
    );
}

export default Page;