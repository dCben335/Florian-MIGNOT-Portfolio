import styles from "./page.module.scss";
import Projects from "@/components/features/Projects/Projects";
import { ProjectProps } from "@/libs/types/projects";
import data from "@/contents/projects.json";
import Hero from "@/components/features/Sections/Hero/Hero";
import About from "@/components/features/Sections/About/About";

const projects = data as unknown as ProjectProps[];

export default function Home() {
  const homePageProjects = projects.filter((project) => project.isHomePage);

  return (
    <main className={styles.main}>
      <Hero title="Portfolio de Florian Mignot"/>
      <About />
      <Projects 
        projects={homePageProjects} 
        full={false} 
        title={"Mes Projets"}
      />
    </main>
  );
}
