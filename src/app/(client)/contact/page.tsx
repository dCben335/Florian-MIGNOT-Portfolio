import Contact from "@/components/features/Sections/Contact/Contact";
import styles from "./page.module.scss";
import { contactMetadata } from "@/contents/meta";
import { Metadata } from "next/types";

export const metadata: Metadata = contactMetadata;


const Page = () => {
    return (
        <main className={styles.main}>
            <Contact />
        </main>
    );
}

export default Page;