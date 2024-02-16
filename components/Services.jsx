import styles from "@/style/Services.module.css";
import { Suspense } from "react";
import Slideshow from "@/components/Slideshow";

export default function Services({ children }) {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2>Services</h2>
                <Suspense fallback="Loading...">
                    <Slideshow />
                </Suspense>
            </div>
            {children}
        </section>
    );
}
