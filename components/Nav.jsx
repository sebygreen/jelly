"use client";

import Link from "next/link";
import styles from "@/style/Nav.module.css";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav>
            <Link
                className={pathname === "/" ? styles.active : undefined}
                href="/"
            >
                Home
            </Link>
            <Link
                className={pathname === "/about" ? styles.active : undefined}
                href="/about"
            >
                About
            </Link>
            <Link
                className={pathname === "/projects" ? styles.active : undefined}
                href="/projects"
            >
                Projects
            </Link>
        </nav>
    );
}
