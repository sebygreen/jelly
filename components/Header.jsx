import styles from "@/style/Header.module.css";
import Button from "@/components/Button";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Link href="/">
                    <p>Jelly Design</p>
                </Link>
                <nav>
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                </nav>
                <Button
                    type="route"
                    href="/contact"
                    text="Contact"
                    icon={<ChatBubbleOvalLeftIcon />}
                />
            </div>
        </header>
    );
}
