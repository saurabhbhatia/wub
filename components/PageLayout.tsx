import React from "react";
import NavBar from "./navbar/NavBar";

export default function PageLayout({ children }) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    )
}