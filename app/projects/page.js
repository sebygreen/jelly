import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Nos réalisations</h1>
                <section className={styles.design}>
                    <h2>Design</h2>
                    <div className={styles.grid}>
                        <Project
                            img="/images/topo.jpeg"
                            title="Topo"
                            link={"/images/topo.pdf"}
                        >
                            <p>
                                Découvrez Topo : notre projet d&apos;identité visuelle innovant pour une marque de surf éco-responsable, alliant design moderne et conscience environnementale pour séduire une clientèle soucieuse de l&apos;impact de ses achats.
                            </p>
                        </Project>
                        <Project
                            img="/images/Dojo.png"
                            title="Dojo"
                            link={"/images/Dojo.pdf"}
                        >
                            <p>
                                Dojo : une identité visuelle captivante pour une plateforme de mise en relation dans l&apos;univers japonais, conçue pour marquer les esprits et établir une présence mémorable dans un marché concurrentiel.
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
                            link={"https://couteau-suisse-des-soins.com/"}
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
                            img="/images/tapisbazar_hp.png"
                            title="Tapis Bazar"
                            link={"https://tapisbazar.com/"}
                        >
                            <p>
                            "Tapis Bazar" résulte d&npos;une collaboration entre Jelly Agency et le monde du e-commerce de tapis, mettant en lumière notre travail sur des projets personnalisés. Cette initiative a abouti à la création d&npos;une plateforme d&npos;e-commerce, facilitant la connexion entre les consommateurs et des fournisseurs chinois et indiens réputés. Grâce à notre expérience, nous avons élaboré un site pratique et esthétique, valorisant une sélection variée de tapis. À Jelly Agency, nous sommes contents de participer au développement de "Tapis Bazar", ce qui reflète notre dévouement à l&npos;innovation et à l&npos;amélioration continue dans le domaine du web.
                            </p>
                        </Project>
                        <Project
                            img="/images/metastar.png"
                            title="MetaStars"
                            link="#"
                        >
                            <p>
                            MetaStars représente notre capacité à créer des produits numériques innovants, avec le développement d&apos;un MVP pour une plateforme d&apos;écoute de musique attirant investisseurs et utilisateurs grâce à une stratégie de conception et de développement orientée utilisateur.
                            </p>
                        </Project>
                        <Project
                            img="/images/istany.png"
                            title="Istany"
                            link="https://istany.ch/"
                        >
                            <p>
                            Pour Istany, photographe de mariage, Jelly Agency a créé un site élégant et fonctionnel, mettant en valeur son portfolio et ses services tout en optimisant son référencement pour capter une clientèle plus large et plus engagée
                            </p>
                        </Project>
                    </div>
                </section>
            </div>
        </main>
    );
}

function Project({ children, img, title, link }) {
    return (
        <Link href={link}>
        <article>
            <figure>
                <Image src={img} alt={title} fill />
            </figure>
            <h2 className={styles.projectTitle}>{title}</h2>
            {children}
        </article>
        </Link>
    );
}
