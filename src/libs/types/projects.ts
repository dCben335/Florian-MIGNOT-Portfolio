export type ProjectProps = {
    title: string,
    description: string,
    image: string,
    slug: string,
    isHomePage?: boolean,

    medias: ProjectMediaProps,
    button?: ProjectButtonProps
}

export type ProjectButtonProps = {
    text: string,
    link: string
}

export type ProjectMediaProps =  ProjectImagesMediaProps | ProjectVideoMediaProps

export type ProjectImagesMediaProps = {
    type: "images",
    images: string[]
}

export type ProjectVideoMediaProps = {
    type: "video",
    video: string
}