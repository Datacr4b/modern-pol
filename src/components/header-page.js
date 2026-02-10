import React from "react";
import globe from "../images/globe.png";
import "./header-page.css";

function HeaderPage() {
    return (
        <>
            <header>
                <section className="header-content">
                    <img id="logo" src={globe} height="150" alt="globe icon"></img>
                    <h1 id="title"><b>ModernPol</b></h1>
                </section>
                <hr></hr>
            </header>
        </>
    );
};

export default HeaderPage;