import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Projets</h1>
                <section className={styles.design}>
                    <h2>Design</h2>
                    <div className={styles.grid}>
                        <Project
                            img="/images/topo.jpeg"
                            title="Topo"
                        >
                            <p>
                                Découvrez Topo : notre projet d'identité visuelle innovant pour une marque de surf éco-responsable, alliant design moderne et conscience environnementale pour séduire une clientèle soucieuse de l'impact de ses achats.
                            </p>
                        </Project>
                        <Project
                            img="/images/Dojo.png"
                            title="Dojo"
                        >
                            <p>
                                Dojo : une identité visuelle captivante pour une plateforme de mise en relation dans l'univers japonais, conçue pour marquer les esprits et établir une présence mémorable dans un marché concurrentiel.
                            </p>
                        </Project>
                    </div>
                </section>
                <section className={styles.web}>
                    <h2>Web</h2>
                    <div className={styles.grid}>
                        <Project
                            img="/images/couteau_suisse.png"
                            title="Le Couteau Suisse"
                        >
                            <p>
                                Le site &apos;Couteau-suisse-des-soins&apos;
                                reflète notre expertise en SEO et marketing
                                digital, offrant une refonte complète pour
                                améliorer l&apos;expérience utilisateur et la
                                visibilité, attirant ainsi une audience ciblée
                                en quête de thérapies de bien-être en Suisse.
                            </p>
                        </Project>
                        <Project
                            img="/images/NRobert.png"
                            title="Accupuncture N.Robert"
                        >
                            <p>
                            Jelly Agency a propulsé le site d&apos;E-commerce de Mme. N.Robert, professionnelle de l&apos;acupuncture, avec un design intuitif et un référencement optimisé, augmentant significativement sa clientèle et sa visibilité en ligne.
                            </p>
                        </Project>
                        <Project
                            img="/images/metastar.png"
                            title="MetaStars"
                        >
                            <p>
                            MetaStars représente notre capacité à créer des produits numériques innovants, avec le développement d&apos;un MVP pour une plateforme d&apos;écoute de musique attirant investisseurs et utilisateurs grâce à une stratégie de conception et de développement orientée utilisateur.
                            </p>
                        </Project>
                    </div>
                </section>
            </div>
        </main>
    );
}

function Project({ children, img, title }) {
    return (
        <article>
            <figure>
                <Image src={img} alt={title} fill />
            </figure>
            <h2>{title}</h2>
            {children}
        </article>
    );
}
