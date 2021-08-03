import React from "react";
import NavBar from "./NavBar";
import styles from '../styles/PageLayout.module.css'

export default function PageLayout({ children }) {
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
            </div>
        </>
    )
}