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
            <h2 className={styles.projectTitle}>{title}</h2>
            {children}
        </article>
    );
}
