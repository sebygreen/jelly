import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import localFont from "next/font/local";
const satoshi = localFont({
    src: [
        {
            path: "../fonts/Satoshi[wght].ttf",
            display: "swap",
            style: "normal",
            weight: "100 900",
        },
        {
            path: "../fonts/Satoshi-Italic[wght].ttf",
            display: "swap",
            style: "italic",
            weight: "100 900",
        },
    ],
});

export const metadata = {
    title: "Jelly Agency",
    description:
        "Votre Expert en Stratégies Digitales pour Restaurants et Entreprises Innovantes.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={satoshi.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
