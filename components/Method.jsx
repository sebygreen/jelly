import styles from "@/style/Method.module.css";
import Divider from "@/components/Divider";

export default function Method() {
    return (
        <div className={styles.container}>
            <Divider color="primary" />
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <article className={styles.item}>
                        <span className={styles.dot}>1</span>
                        <div>
                            <h3>Premier Rendez-Vous</h3>
                            <p>
                                Nous présentons nos services et recueillons vos
                                besoins spécifiques.
                                <br />
                                <span>
                                    Signature et paiement de votre contrat de
                                    vente.
                                </span>
                            </p>
                        </div>
                    </article>
                    <article className={styles.item}>
                        <span className={styles.dot}>2</span>
                        <div>
                            <h3>Processus de Développement</h3>
                            <p>
                                Nous développons votre projet en suivant les
                                spécifications convenues.
                                <br />
                                <span>
                                    Vous nous faites part de vos retours.
                                </span>
                            </p>
                        </div>
                    </article>
                    <article className={styles.item}>
                        <span className={styles.dot}>3</span>
                        <div>
                            <h3>Finitions du Produit</h3>
                            <p>
                                Nous peaufinons les derniers détails et
                                préparons la livraison de votre produit.
                            </p>
                        </div>
                    </article>
                    <article className={styles.item}>
                        <span className={styles.dot}>4</span>
                        <div>
                            <h3>Rendez-Vous et Livraison Finale</h3>
                            <p>
                                Nous vous présentons le produit fini et
                                finalisons ensemble votre projet.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
