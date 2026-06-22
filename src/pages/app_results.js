import React from "react";
import Results from "./components/results";
import Header from "./components/header";
import { Helmet } from "react-helmet";

function AppResults() {
    return (
        <>
            <Helmet>
                <title>{`Poland Values - Results`}</title>
            </Helmet>
            <Header />
            <Results />
        </>
    );
}

export default AppResults;