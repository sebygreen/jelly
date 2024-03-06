"use client";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeaderMobile from "@/components/HeaderMobile";

import { useState, useEffect } from "react";

import localFont from "next/font/local";
// const satoshi = localFont({
//     src: [
//         {
//             path: "../fonts/Satoshi[wght].ttf",
//             display: "swap",
//             style: "normal",
//             weight: "100 900",
//         },
//         {
//             path: "../fonts/Satoshi-Italic[wght].ttf",
//             display: "swap",
//             style: "italic",
//             weight: "100 900",
//         },
//         {
//             path: '../fonts/\salbabida-sans-regulartrial.otf',
//             display: 'swap',
//             style: 'normal',
//             weight: '100 900',
//         }
//     ],
// });

const metadata = {
    title: "Jelly Agency",
    description:
        "Votre Expert en Stratégies Digitales pour Restaurants et Entreprises Innovantes.",
};

export default function RootLayout({ children }) {
    const [isMobile, setIsMobile] = useState(false);

    // Effect to check screen width
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // For example, 768px is a common breakpoint for mobile devices
        };

        // Check on mount and on window resize
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <html lang="en">
            <body>
                {isMobile ? <HeaderMobile /> : <Header />}
                {children}
                <Footer />
            </body>
        </html>
    );
}
