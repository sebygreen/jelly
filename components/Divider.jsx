import styles from "@/style/Divider.module.css";

export default function Divider({ color }) {
    return <div className={`${styles.divider} ${styles[color]}`} />;
}
