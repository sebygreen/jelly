import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Hook from "@/components/Hook";
import Services from "@/components/Services";
import Method from "@/components/Method";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import Button from "@/components/Button";

export default function Page() {
    return (
        <main>
            <Hero>
                <Hook />
            </Hero>
            <Values />
            <Services>
                <Method />
            </Services>
            <section className={styles.contact}>
                <div>
                    <h3>🤝</h3>
                    <h4>Contactez-nous dés aujourd&apos;hui.</h4>
                </div>
            </section>
        </main>
    );
}
