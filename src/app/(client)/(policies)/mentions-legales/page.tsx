import Link from 'next/link';
import styles from '../page.module.scss';
import { mentionsLegalesMetadata } from '@/contents/meta';
import { Metadata } from 'next/types';

export const metadata: Metadata = mentionsLegalesMetadata;


const Page = () => {
    return (
        <main className={`${styles.main}`} >
            <section>
                <div className={styles.title}>
                    <h1>Mentions Légales</h1>
                    <small>En vigueur en 2024</small>
                </div>
                <div className={styles.container}>
                    <article>
                        <h2>Introduction</h2>
                        <p>Dans le cadre de son activité, Florian Mignot est amenée à collecter et à traiter des informations
                            dont certaines sont qualifiées de «&nbsp;données personnelles&nbsp;». Il attache une grande
                            importance au respect de la vie privée, et n&apos;utilise que des données de manière responsable et
                            confidentielle et dans une finalité précise.</p>
                    </article>
                    <article>
                        <h2>Données personnelles</h2>
                        <p>Sur le site web, il y a 2 types de données susceptibles d&apos;être recueillies :</p>
                        <ul>
                            <li><b>Les données transmises directement: </b>Ces données sont celles que vous nous transmettez
                                directement, via un formulaire de contact ou bien par contact direct par email. Sont
                                obligatoires dans le formulaire de contact le champs «&nbsp;prénom et nom&nbsp;», et «&nbsp;email&nbsp;».</li>
                            <li><b>&nbsp;Les données collectées automatiquement: </b>Lors de vos visites, une fois votre
                                consentement donné, nous pouvons recueillir des informations anonymes de type «&nbsp; web
                                analytics &nbsp;» relatives à votre navigation, la durée de votre consultation, votre type et
                                version de navigateur. La technologie utilisée est le cookie.</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Utilisation des données</h2>
                        <p>Les données que vous nous transmettez directement sont utilisées dans le but de vous re-contacter
                            et/ou dans le cadre de la demande que vous nous faites. Les données «&nbsp; web analytics &nbsp;»
                            sont collectées de forme anonyme (en enregistrant des adresses IP anonymes) par Google Analytics,
                            Youtube, et nous permettent de mesurer l&apos;audience de notre site web, les consultations et les
                            éventuelles erreurs afin d&apos;améliorer constamment l&apos;expérience des utilisateurs. Ces données sont
                            anonymes. Ces données sont utilisées par Florian Mignot responsable du traitement des données, et ne
                            seront jamais cédées à un tiers ni utilisées à d&apos;autres fins que celles détaillées ci-dessus</p>
                    </article>
                    <article>
                        <h2>Base légale</h2>
                        <p>Les données personnelles ne sont collectées qu&apos;après consentement obligatoire de l&apos;utilisateur. Ce
                            consentement est valablement recueilli (boutons et cases à cocher), libre, clair et sans équivoque.
                        </p>
                    </article>
                    <article>
                        <h2>Durée de conservation</h2>
                        <p>Les données seront sauvegardées durant une durée maximale de 3 ans.</p>
                    </article>
                    <article>
                        <h2>Cookies</h2>
                        <p>Voici la liste des cookies utilisées et leur objectif :</p>
                        <ul>
                            <li>Cookies Google Analytics<Link target="_blank" href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">liste exhaustive</Link> : Web analytics</li>
                            <li>CookieLawInfoConsent : Permet de garder en mémoire le fait que vous acceptez les cookies afin de ne plus vous importuner lors de votre prochaine visite.</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Vos droits concernant les données personnelles</h2>
                        <p>Vous avez le droit de consultation, demande de modification ou d&apos;effacement sur l&apos;ensemble de vos
                            données personnelles. Vous pouvez également retirer votre consentement au traitement de vos données.
                        </p>
                    </article>
                    <article>
                        <h2>Contact délégué à la protection des données</h2>
                        <p>M. MIGNOT Florian</p>
                        <p>Par email : <Link href="mailto:florianmignot25@gmail.com">florianmignot25@gmail.com</Link> </p>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default Page;