import Hero from "@/components/features/Hero/Hero";
import styles from "./page.module.scss";
import Projects from "@/components/features/Projects/Projects";
import { ProjectProps } from "@/libs/types/projects";
import data from "@/contents/projects.json";

const projects = data as unknown as ProjectProps[];

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects projects={projects}/>
    </main>
  );
}
