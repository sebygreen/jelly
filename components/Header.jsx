import styles from "@/style/Header.module.css";
import Button from "@/components/Button";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import Nav from "@/components/Nav";
import { Suspense } from "react";

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Suspense fallback={"Loading..."}>
                    <Nav />
                </Suspense>
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
