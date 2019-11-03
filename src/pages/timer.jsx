import React, { useEffect, useState } from "react";
import { Layout, SEO } from "../components";
import "@material/mwc-button";

import "./timer.module.scss";
import colors from "../style/_colors.scss";
import hf from "../style/_header-footer.scss";

const SWE = "sv-SE";
const HOOK_URL =
    "https://wh.automate.io/webhook/5dbf53573787e5653ead6750";

function start() {
    window.localStorage.setItem("start", new Date().toLocaleTimeString(SWE));
}

function lunch() {
    window.localStorage.setItem("lunch", new Date().toLocaleTimeString(SWE));
}

async function home() {
    const summary = {
        date: new Date().toLocaleDateString(SWE),
        start: window.localStorage.getItem("start"),
        lunch: window.localStorage.getItem("lunch"),
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
            setButtonToShow("lunch");
        }
        const lunchTime = window.localStorage.getItem("lunch");
        if (lunchTime) {
            setButtonToShow("home");
        }
    }

    const handleStart = () => {
        start();
        setButtonToShow("lunch");
    }
    const handleLunch = () => {
        lunch();
        setButtonToShow("home");
    };
    const handleHome = async () => {
        await home();
        setButtonToShow("start");
    };

    useEffect(() => {
        const startButton = document.querySelector("#start");
        const lunchButton = document.querySelector("#lunch");
        const homeButton = document.querySelector("#home");
        startButton.addEventListener("click", handleStart);
        lunchButton.addEventListener("click", handleLunch);
        homeButton.addEventListener("click", handleHome);

        showTheRightButtonOnRefresh();

        return () => {
            startButton.removeEventListener("click", handleStart);
            lunchButton.removeEventListener("click", handleLunch);
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
                        "--mdc-theme-primary": colors.primary,
                    }}
                    label="Start the day"
                    raised
                    icon="timer"
                ></mwc-button>
                <mwc-button
                    id="lunch"
                    style={{
                        display: buttonToShow === "lunch" ? "block" : "none",
                        "--mdc-theme-primary": colors.yellowish,
                    }}
                    label="Going for lunch?"
                    raised
                    icon="fastfood"
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
