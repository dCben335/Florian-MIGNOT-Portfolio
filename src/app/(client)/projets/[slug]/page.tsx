import { ProjectProps } from "@/libs/types/projects";
import styles from "./page.module.scss";
import data from "@/contents/projects.json";
import { slugify } from "@/utils/reformat";
import Button from "@/components/ui/Button/Button";
import { notFound } from "next/navigation";
import ProjectSwiper from "@/components/features/Projects/ProjectSwiper/ProjectSwiper";
import parse from 'html-react-parser';
import { Metadata, ResolvingMetadata } from "next/types";
import { authors, category, robots, siteName } from "@/contents/meta";

const projects = data as unknown as ProjectProps[];
type PageProps = {
    params:  {
        slug: string;
    };
}

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const project = projects.find((project) => project.slug === params.slug);

    const previousImages = (await parent).openGraph?.images || []

    return {
        title: project?.title ? `${project.title} | ${siteName}` : "Projet non trouvé",
        description: project?.meta?.description || "Projet non trouvé",
        keywords: project?.meta?.keywords  || [],
        openGraph: {
            images: [
                ...previousImages,
                { 
                    url: project?.image || "", 
                    alt: project?.title || "Projet non trouvé",
                    pathname: `/projets/${params.slug}`
                }
            ]
        },
        authors: authors,
        category: category,
        robots: robots
    }
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: slugify(project.slug),
    }));
}

const Page = ({ params }: PageProps) => {
    const project = projects.find((project) => project.slug === params.slug);
    if (!project) {
        notFound();
    }
    
    return (
        <main className={styles.main}>
            {project.medias.type === "images" && (
                <ProjectSwiper images={project.medias.images} className={styles.swiper}/>
            )}
            {project.medias.type === "video" && (
                <iframe src={project.medias.video} name={project.title} title={project.title} className={styles.video}/>
            )}
            <section>
                <h1>{project.title}</h1>
                <div>
                    {parse(project.description)}
                </div>
                {project.button && (
                    <Button href={project.button.link} renderAs="link" className={styles.link} target="_blank">{project.button.text}</Button>
                )}
            </section>
        </main>
    );
}

export default Page;