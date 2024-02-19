import styles from "./page.module.css";
import Hero from "@/components/home/Hero";
import Values from "@/components/home/Values";
import Hook from "@/components/home/Hook";
import Services from "@/components/home/Services";
import Method from "@/components/home/Method";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import Button from "@/components/Button";
import { Suspense } from "react";
import Three from "@/components/home/Three";

export default function Page() {
    return (
        <main className={styles.container}>
            <div className={styles.three}>
                <Suspense fallback="Loading WebGL...">
                    <Three />
                </Suspense>
                <Hero />
                <Hook />
            </div>
            <Values />
            <Services />
            <Method />
            <section className={styles.contact}>
                <div>
                    <h3>🤝</h3>
                    <h4>Contactez-nous dés aujourd&apos;hui.</h4>
                </div>
            </section>
        </main>
    );
}
