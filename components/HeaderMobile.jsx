import { useState } from 'react';
import Link from 'next/link';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import style from '@/style/HeaderMobile.module.css'; // Make sure this path is correct

export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={style.headerContainer}>
            <button onClick={toggleMenu} className={style.headerMobileButton}>
                {isOpen ? <XMarkIcon className={style.headerMobileIcon} /> : <Bars3Icon className={style.headerMobileIcon} />}
            </button>
            {isOpen && (
                <div className={style.fullScreenMenu}>
                     <button onClick={toggleMenu} className={style.headerCloseIcon}>
                            <XMarkIcon className={style.headerMobileIcon} />
                    </button>
                    <nav>
                        <ul>
                            <li onClick={toggleMenu}>
                                <Link href="/contact" className={style.fullScreenMenuLink}>
                                    Contact
                                </Link>
                            </li>
                            <li onClick={toggleMenu}>
                                <Link href="/nos-services" className={style.fullScreenMenuLink}>
                                    Services
                                </Link>
                            </li>
                            <li onClick={toggleMenu}>
                                <Link href="/projects" className={style.fullScreenMenuLink}>
                                    Projets
                                </Link>
                            </li>
                            <li onClick={toggleMenu}>
                                <Link href="/" className={style.fullScreenMenuLink}>
                                   Home
                                </Link>
                            </li>
                            <li onClick={toggleMenu}>
                                <Link href="/about" className={style.fullScreenMenuLink}>
                                    A propos
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}
