import styles from "./page.module.scss";
import Projects from "@/components/features/Projects/Projects";
import { ProjectProps } from "@/libs/types/projects";
import data from "@/contents/projects.json";
import Hero from "@/components/features/Sections/Hero/Hero";
import About from "@/components/features/Sections/About/About";
import { Metadata } from "next";
import { homeMetadata } from "@/contents/meta";

const projects = data as unknown as ProjectProps[];
export const metadata: Metadata = homeMetadata;

export default function Home() {
  const homePageProjects = projects.filter((project) => project.isHomePage);

  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Projects 
        projects={homePageProjects} 
        full={false} 
        title={"Mes Projets"}
      />
    </main>
  );
}
