import styles from "@/style/Hook.module.css";
import Divider from "@/components/home/Divider";

export default function Hook() {
    return (
        <section className={styles.container}>
            <Divider color={"primary"} />
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h3>Pourquoi Jelly?</h3>
                    <p>
                        Nous ne sommes pas de simples prestataires, mais des
                        partenaires dédiés à votre succès numérique. Notre
                        approche sur mesure, notre expertise technique et notre
                        créativité sans limites nous permettent de concevoir des
                        solutions qui dépassent vos attentes.
                    </p>
                </div>
            </div>
        </section>
    );
}
