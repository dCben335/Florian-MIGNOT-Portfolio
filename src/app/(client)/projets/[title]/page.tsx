import styles from "./page.module.scss";

type PageProps = {
    params:  {
        title: string;
    };
}

const Page = ({ params }: PageProps) => {
    return (
        <div>
            <h1>{params.title}</h1>
        </div>
    );
}

export default Page;