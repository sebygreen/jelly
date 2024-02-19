import styles from "@/style/Values.module.css";
import Image from "next/image";

export default function Values() {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <article className={styles.philosophy}>
                    <figure>
                        <Image
                            src={"/3dicons/bulb.png"}
                            alt={"a light bulb"}
                            width={2400}
                            height={2400}
                        />
                    </figure>
                    <span>
                        <h3>Notre Philosophie</h3>
                        <p>
                            Optimiser la visibilité et séduire une clientèle
                            plus large grâce à des technologies digitales
                            avancées et économiques. Chez Jelly Agency, nous
                            surpassons vos attentes, en vous offrant des
                            solutions avant-gardistes pour garantir une présence
                            en ligne distinguée et efficace.
                        </p>
                    </span>
                </article>
                <article className={styles.projects}>
                    <figure>
                        <Image
                            src={"/3dicons/brush.png"}
                            alt={"a paint brush"}
                            width={2400}
                            height={2400}
                        />
                    </figure>
                    <span>
                        <h3>Nos Réalisations</h3>
                        <p>
                            Nos collaborations avec une gamme variée de
                            restaurants et entreprises témoignent de notre
                            capacité à fournir des solutions personnalisées et
                            performantes. Chaque projet illustre notre
                            engagement envers l&apos;excellence et notre passion
                            pour l&apos;innovation dans le domaine digital.
                        </p>
                    </span>
                </article>
            </div>
        </section>
    );
}
