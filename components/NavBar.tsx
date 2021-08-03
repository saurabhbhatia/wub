import React from "react";
import Link from "next/link";
import styles from '../styles/Navbar.module.css'

const NavBar: React.FC = () => {

    return (
        <nav className="flex items-center justify-between my-2">
            <div className={styles.primaryMenu}>
                <ul className={styles.menuItems}>
                    <li className={styles.listItem}>
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <Link href="/resume">
                <a className="w-full h-4 font-heading text-5xl">Resume</a>
            </Link>
            <div className={styles.secondMenu}>
                <ul className={styles.menuItems}>
                    <li className={styles.listItem}>Writing</li>
                    <li className={styles.listItem}>Talks</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;