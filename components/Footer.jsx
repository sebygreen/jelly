import Link from "next/link";
import styles from "@/style/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.wrapper}>
                <p>&copy; 2024 Jelly Agency</p>
                <Link href="/legal">Conditions Générales</Link>
            </div>
        </footer>
    );
}
