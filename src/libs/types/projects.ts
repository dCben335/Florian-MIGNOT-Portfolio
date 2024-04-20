export type ProjectProps = {
    title: string,
    description: string,
    image: string,
    isHomePage?: boolean,

    medias: ProjectMediaProps,
    button?: ProjectButtonProps
}

export type ProjectButtonProps = {
    title: string,
    href: string
}

export type ProjectMediaProps = {
    type: "images",
    images: string[]
} | {
    type: "video",
    video: string
}