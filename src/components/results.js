import React from "react";
import { communism, environment, freemarket, globalism, conservative, liberty, nationalism, order } from "../images";
import "./results.css";
import { useSearchParams } from "react-router";

function Results() {
    const [searchParams] = useSearchParams();
    const e = searchParams.get("e");
    const l = searchParams.get("l");
    const g = searchParams.get("g");
    const s = searchParams.get("s");

    const e_free = 100-e;
    const l_order = 100-l;
    const g_nationalism = 100-g;
    const s_prog = 100-s;

    return (
        <>
            <div className="title-container">
                <h1>ModernPol</h1>
                <hr></hr>
                <h1>Results</h1>
            </div>
            <h2>Economic Axis: </h2>
            <div className="axis">
                <img alt="communist icon" height="128pt" src={communism}></img>
                <div className="bar communism" style={{width: `${e}%`}}>
                    <div className="text-wrapper">{e}%</div>
                </div>
                <div className="bar freemarket" style={{width: `${e_free}%`}}>
                    <div className="text-wrapper">{e_free}%</div>
                </div>
                <img alt="communist icon" height="128pt" src={freemarket}></img>
            </div>
            <h2>Legal Axis: </h2>
            <div className="axis">
                <img alt="liberty icon" height="128pt" src={liberty}></img>
                <div className="bar liberty" style={{width: `${l}%`}}>
                    <div className="text-wrapper">{l}%</div>
                </div>
                <div className="bar order" style={{width: `${l_order}%`}}>
                    <div className="text-wrapper">{l_order}%</div>
                </div>
                <img alt="law and order icon" height="128pt" src={order}></img>
            </div>
            <h2>Global Axis: </h2>
            <div className="axis">
                <img alt="globalism icon" height="128pt" src={globalism}></img>
                <div className="bar globalism" style={{width: `${g}%`}}>
                    <div className="text-wrapper">{g}%</div>
                </div>
                <div className="bar nationalism" style={{width: `${g_nationalism}%`}}>
                    <div className="text-wrapper">{g_nationalism}%</div>
                </div>
                <img alt="nationalism icon" height="128pt" src={nationalism}></img>
            </div>
            <h2>Social Axis: </h2>
            <div className="axis">
                <img alt="conservatism icon" height="128pt" src={conservative}></img>
                <div className="bar conservative" style={{width: `${s}%`}}>
                    <div className="text-wrapper">{s}%</div>
                </div>
                <div className="bar progressive" style={{width: `${s_prog}%`}}>
                    <div className="text-wrapper">{s_prog}%</div>
                </div>
                <img alt="progressive icon" height="128pt" src={environment}></img>
            </div>
            <br></br>
            <hr></hr>
            <h2>Closest Match: </h2>
        </>
    );
}

export default Results;