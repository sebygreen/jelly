"use client";

import { useState } from "react";
import styles from "../../style/Slideshow.module.css";
import Button from "@/components/Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSwipeable } from "react-swipeable"; // Importez useSwipeable

export default function Slideshow() {
    let [slide, setSlide] = useState(0);

    function next() {
        if (slide < 4) {
            setSlide(slide + 1);
        }
    }
    function previous() {
        if (slide > 0) {
            setSlide(slide - 1);
        }
    }

    function redirectToNosServices(id) {
        window.location.href = "/nos-services#service-" + id;
    }

    // Création des gestionnaires de glissement
    const handlers = useSwipeable({
        onSwipedLeft: () => next(),
        onSwipedRight: () => previous(),
        delta: 10, // Vous pouvez ajuster cette valeur
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
        trackMouse: false, // La souris n'est généralement pas utilisée sur le téléphone
        touchEventOptions: { passive: true } // Cette option peut améliorer la fluidité sur certains navigateurs
    });
    

    return (
        <main className={styles.container}>
            <div {...handlers} className={styles.cards}>
                <Card number={0} slide={slide} title="Web">
                    <ul>
                        <li>Création site vitrine</li>
                        <li>Création site Ecommerce</li>
                        <li>Refonte de site internet</li>
                        <li>Système de réservation</li>
                    </ul>
                    <div className={styles.priceContainer}>
                        <p className={styles.price}>
                            Site vitrine à partir de <span>1490 €</span>
                        </p>
                        <Link href="/nos-services#service-Communication">
                            <div className={styles.arrowContainer}>
                                <ArrowRightIcon />
                            </div>
                        </Link>
                    </div>
                </Card>
                <Card number={1} slide={slide} title="Identité">
                    <ul>
                        <li>Création ou refonte charte graphique</li>
                        <li>Création ou refonte de logo</li>
                        <li>Choix de typographie sur-mesure</li>
                        <li>
                            Création d&apos;illustrations pour tout support
                        </li>
                    </ul>
                    <div className={styles.priceContainer}>
                        <p className={styles.price}>
                            Charte graphique à partir de <span>695 €</span>
                        </p>
                        <Link href="/nos-services#service-Communication">
                            <div className={styles.arrowContainer}>
                                <ArrowRightIcon />
                            </div>
                        </Link>
                    </div>
                </Card>
                <Card number={2} slide={slide} title="SEO & Publicité">
                    <ul>
                        <li>Intégration de mot clés SEO à votre site</li>
                        <li>Rédaction de contenu optimisé pour le SEO</li>
                        <li>Optimisation du google page rank de votre site</li>
                        <li>Gestion de campagnes Google Ads</li>
                    </ul>
                    <div className={styles.priceContainer}>
                        <p className={styles.price}>
                            Analyse de mots clés à partir de <span>190 €</span>
                        </p>
                        <Link href="/nos-services#service-Communication">
                            <div className={styles.arrowContainer}>
                                <ArrowRightIcon />
                            </div>
                        </Link>
                    </div>
                </Card>
                <Card number={3} slide={slide} title="Réseaux Sociaux">
                    <ul>
                        <li>Community manager</li>
                        <li>Rapport de statistiques</li>
                        <li>Création de template de publication</li>
                        <li>Shooting photos</li>
                    </ul>
                    <div className={styles.priceContainer}>
                        <p className={styles.price}>
                            <span>Sur devis</span>
                        </p>
                        <Link href="/nos-services#service-Communication">
                            <div className={styles.arrowContainer}>
                                <ArrowRightIcon />
                            </div>
                        </Link>
                    </div>
                </Card>
                <Card number={4} slide={slide} title="Communication">
                    <ul>
                        <li>Création de supports physiques</li>
                        <li>Création de supports numériques</li>
                        <li>Redaction de newsletter et emails marketing</li>
                        <li>Organisation d&apos;évenements</li>
                    </ul>
                    <div className={styles.priceContainer}>
                        <p className={styles.price}>
                            Newsletter bi-mensuelle à partir de{" "}
                            <span>145 €</span>
                        </p>
                        <Link href="/nos-services#service-Communication">
                            <div className={styles.arrowContainer}>
                                <ArrowRightIcon />
                            </div>
                        </Link>
                    </div>
                </Card>
            </div>
            <div className={styles.controls}>
                <Button
                    type="button"
                    inverted={true}
                    icon={<ArrowLeftIcon />}
                    action={previous}
                    className={styles.controlButton}
                />
                <Button
                    type="button"
                    inverted={true}
                    icon={<ArrowRightIcon />}
                    action={next}
                    className={styles.controlButton}
                />
            </div>
        </main>
    );
}

function Card({ number, slide, title, children }) {
    let status;
    if (slide - 4 === number) {
        status = styles.p4;
    } else if (slide - 3 === number) {
        status = styles.p3;
    } else if (slide - 2 === number) {
        status = styles.p2;
    } else if (slide - 1 === number) {
        status = styles.p1;
    } else if (slide === number) {
        status = styles.current;
    } else if (slide + 1 === number) {
        status = styles.n1;
    } else if (slide + 2 === number) {
        status = styles.n2;
    } else if (slide + 3 === number) {
        status = styles.n3;
    } else if (slide + 4 === number) {
        status = styles.n4;
    }
    return (
        <article className={status}>
            <p className={styles.title}>{title}</p>
            {children}
        </article>
    );
}
