"use client";

import { useState } from "react";
import styles from "../../style/Slideshow.module.css";
import Button from "@/components/Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

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

    return (
        <main className={styles.container}>
            <div className={styles.cards}>
                <Card number={0} slide={slide} title="Identité">
                    <ul>
                        <li>Création ou refonte charte graphique</li>
                        <li>Création ou refonte de logo</li>
                        <li>Choix de typographie sur-mesure</li>
                        <li>Création d'illustrations pour support physique ou numérique</li>
                    </ul>
                    <p className={styles.price}>A partir de <span>700 $</span></p>
                </Card>
                <Card number={1} slide={slide} title="SEO & Publicité" />
                <Card number={2} slide={slide} title="Réseaux Sociaux" />
                <Card number={3} slide={slide} title="Web" />
                <Card number={4} slide={slide} title="Communication" />
            </div>
            <div className={styles.controls}>
                <Button
                    type="button"
                    inverted={true}
                    icon={<ArrowLeftIcon />}
                    action={previous}
                />
                <Button
                    type="button"
                    inverted={true}
                    icon={<ArrowRightIcon />}
                    action={next}
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
