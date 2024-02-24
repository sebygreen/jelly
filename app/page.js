import styles from "./page.module.css";
import Hero from "@/components/home/Hero";
import Values from "@/components/home/Values";
import Hook from "@/components/home/Hook";
import Services from "@/components/home/Services";
import Method from "@/components/home/Method";
import { Suspense } from "react";
import Three from "@/components/home/Three";
import Image from "next/image";


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
                    <a href="/contact">
                        <Image
                            src={"/3dicons/hand-shake.svg"}
                            alt={"a hand shake"}
                            width={64}
                            height={64}
                        />
                    </a>
                    <a href="/contact"><h4>Contactez-nous dés aujourd&apos;hui.</h4></a>
                </div>
            </section>
        </main>
    );
}
