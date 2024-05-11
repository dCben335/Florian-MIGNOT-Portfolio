import { Metadata } from "next/types";

export const siteName = 'Florian MIGNOT' satisfies Metadata["title"];
export const category = 'Portfolio' satisfies Metadata["category"];

export const authors = [
    {
        name: 'Florian MIGNOT',
        url: 'https://florianmignot.fr',
    },
    {
        name: 'Benoît CABOCEL',
        url: 'https://portfolio-dcben335.vercel.app',
    },
] satisfies Metadata["authors"];

export const robots = {
    index: true,
    follow: true,
} satisfies Metadata["robots"];


export const homeMetadata: Metadata = {
    title: `Accueil | ${siteName}`,
    description: "Découvrez le portfolio de Florian Mignot, étudiant en 3e année de BUT MMI à l'IUT de Dijon-Auxerre, spécialisé en stratégie de communication numérique et design d'expérience. Avec une passion pour le travail d'équipe et une expertise croissante dans la communication digitale, Florian présente ses compétences variées, allant de la rédaction web et la création de campagnes Google Ads à la maîtrise des logiciels Adobe. En dehors de ses études, il s'investit activement dans des initiatives bénévoles en tant que modérateur sur les réseaux sociaux pour divers influenceurs, contribuant ainsi à des communautés en ligne dynamiques.",
    keywords: [
        "accueil",
        "florian mignot",
        "florianmignot.fr",
        "portfolio",
        "développement web", 
        "wordpress",
        "woocommerce",
        "prestashop",
        "shopify",
        "seo",
        "référencement",
        "nature",
        "photographie",
        "photographe",
        "marketing",
        "digital",
        "communication",
        "graphisme",
        "design",
    ],
    robots: robots,
    authors: authors,
    category: category,
} satisfies Metadata;

export const projectsMetadata: Metadata = {
    title: `Projets | ${siteName}`,
    description: "Découvrez les projets variés de Florian Mignot, étudiant en 3e année de BUT MMI à l'IUT de Dijon-Auxerre, à travers son portfolio. Explorez ses réalisations en communication numérique, en rédaction web, en webmarketing, en création numérique et bien plus encore.",
    keywords: [
        "Portfolio",
        "Projets",
        "Florian Mignot",
        "BUT MMI",
        "IUT Dijon-Auxerre",
        "Communication numérique",
        "Rédaction web",
        "Webmarketing",
        "Création numérique",
        "Réalisations"
    ],
    robots: robots,
    authors: authors,
    category: category
} satisfies Metadata;

export const contactMetadata: Metadata = {
    title: `Contact | ${siteName}`,
    description: "Contactez Florian Mignot, étudiant en 3e année de BUT MMI à l'IUT de Dijon-Auxerre, pour toute question, collaboration ou opportunité professionnelle. Utilisez le formulaire de contact pour entrer en communication avec Florian et explorer de nouvelles opportunités dans le domaine de la communication numérique.",
    keywords: [
        "Contact",
        "Florian Mignot",
        "BUT MMI",
        "IUT Dijon-Auxerre",
        "Communication numérique",
        "Collaboration",
        "Opportunité professionnelle",
        "Formulaire de contact"
    ],
    robots: robots,
    authors: authors,
    category: category
} satisfies Metadata;



export const mentionsLegalesMetadata: Metadata = {
    title: `Mentions Légales | ${siteName}`,
    description: "Découvrez les mentions légales de Florian Mignot, étudiant en 3e année de BUT MMI à l'IUT de Dijon-Auxerre, à travers son portfolio. Consultez les informations juridiques nécessaires concernant le site web de Florian, telles que les droits d'auteur, la politique de confidentialité et les conditions d'utilisation.",
    keywords: [
        "Mentions légales",
        "Florian Mignot",
        "BUT MMI",
        "Portfolio",
        "Informations juridiques",
        "Droits d'auteur",
        "Politique de confidentialité",
        "Conditions d'utilisation",
        "Confidentialité",
        "Cookies",
    ],
    robots: robots,
    authors: authors,
    category: category
} satisfies Metadata;


export const conditonsGeneralesMetadata: Metadata = {
    title: `Conditions Générales | ${siteName}`,
    description: "Découvrez les conditions générales de Florian Mignot, étudiant en 3e année de BUT MMI à l'IUT de Dijon-Auxerre, à travers son portfolio. Consultez les conditions d'utilisation et les dispositions légales régissant l'accès et l'utilisation du site web de Florian.",
    keywords: [
        "Conditions générales",
        "Florian Mignot",
        "BUT MMI",
        "Portfolio",
        "Dispositions légales",
        "Utilisation du site"
    ],
    robots: robots,
    authors: authors,
    category: category
} satisfies Metadata;
