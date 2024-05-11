import Projects from "@/components/features/Projects/Projects";
import styles from "./page.module.scss";
import { ProjectProps } from "@/libs/types/projects";
import { projectsMetadata } from "@/contents/meta";
import { Metadata } from "next/types";
import data from "@/contents/projects.json";

const projects = data as unknown as ProjectProps[];
export const metadata: Metadata = projectsMetadata;

const Page = () => {
    return (
        <main className={styles.main}>
            <Projects title="Mes Projets" full={true} projects={projects} />
        </main>
    );
}

export default Page;