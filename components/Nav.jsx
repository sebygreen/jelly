"use client";

import Link from "next/link";
import styles from "@/style/Nav.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Nav() {
    const pathname = usePathname();
    const nav = useRef(null);

    useEffect(() => {
        const active = nav.current.querySelector(".active");
        const indicator = nav.current.querySelector(`.${styles.indicator}`);
        if (active) {
            const values = {
                width: active.offsetWidth,
                offset: active.offsetLeft,
            };
            indicator.style.width = `${values.width}px`;
            indicator.style.transform = `translateX(${values.offset}px)`;
            indicator.style.opacity = 1;
        } else {
            indicator.style.opacity = 0;
        }
    }, [pathname]);

    return (
        <nav ref={nav} className={styles.container}>
            <Link className={pathname === "/" ? "active" : undefined} href="/">
                Home
            </Link>
            <Link
                className={pathname === "/about" ? "active" : undefined}
                href="/about"
            >
                About
            </Link>
            <Link
                className={pathname === "/projects" ? "active" : undefined}
                href="/projects"
            >
                Projects
            </Link>
            <div className={styles.indicator} />
        </nav>
    );
}
