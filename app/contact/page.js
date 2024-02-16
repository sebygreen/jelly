import Contact from "@/components/Contact";
import styles from "./page.module.css";

export default function Page() {
    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Contact</h1>
                <Contact />
            </div>
        </main>
    );
}
