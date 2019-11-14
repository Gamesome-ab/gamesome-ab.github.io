import React, { useEffect, useState } from "react";
import { Layout, SEO } from "../components";
import "@material/mwc-button";

import "./timer.module.scss";
import colors from "../style/_colors.scss";
import hf from "../style/_header-footer.scss";

const SWE = "sv-SE";
const HOOK_URL =
    "https://wh.automate.io/webhook/5dbf53573787e5653ead6750";

function setTimeStamp(key) {
    window.localStorage.setItem(key, new Date().toLocaleTimeString(SWE));
}

async function goHome() {
    const summary = {
        date: new Date().toLocaleDateString(SWE),
        start: window.localStorage.getItem("start"),
        home: new Date().toLocaleTimeString(SWE),
    };
    const response = await fetch(HOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(summary),
    });

    if (response.ok) {
        window.localStorage.clear();
    } else {
        alert("shit hit the fan")
    }
}

const Timer = () => {
    const [buttonToShow, setButtonToShow] = useState("start");

    function showTheRightButtonOnRefresh() {
        const startTime = window.localStorage.getItem("start");
        if (startTime) {
            setButtonToShow("home");
        }
    }

    const handleStart = () => {
        setTimeStamp("start");
        setButtonToShow("home");
    }
    const handleHome = async () => {
        await goHome();
        setButtonToShow("start");
    };

    useEffect(() => {
        const startButton = document.querySelector("#start");
        const homeButton = document.querySelector("#home");

        startButton.addEventListener("click", handleStart);
        homeButton.addEventListener("click", handleHome);

        showTheRightButtonOnRefresh();

        return () => {
            startButton.removeEventListener("click", handleStart);
            homeButton.removeEventListener("click", handleHome);
        };
    }, []);

    return (
        <Layout>
            <SEO title="Timer-ish" />
            <div
                className="container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: `calc(100vh - ${hf.headerHeight} - ${hf.footerHeight})`,
                }}
            >
                <h2>Timerish</h2>
                <mwc-button
                    id="start"
                    style={{
                        display: buttonToShow === "start" ? "block" : "none",
                        "--mdc-theme-primary": colors.greenish,
                    }}
                    label="Start the day"
                    raised
                    icon="timer"
                ></mwc-button>
                <mwc-button
                    id="home"
                    style={{
                        display: buttonToShow === "home" ? "block" : "none",
                        "--mdc-theme-primary": colors.darkGrey,
                    }}
                    label="Go home"
                    raised
                    icon="home"
                ></mwc-button>
            </div>
        </Layout>
    );
};

export default Timer;
