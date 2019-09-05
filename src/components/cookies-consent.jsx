import React, { useState, useEffect } from "react";

import style from "./cookies-consent.module.scss";
import Cookies from "js-cookie";

const headerHeight = 70;
const cookieName = "Gamesome-cookie-consent";
const debug = false;

const CookiesConsent = () => {
    const [visible, setVisible] = useState(false);

    function handleScroll() {
        // Hide when the header reaches the top.
        const whenTohide = document.documentElement.clientHeight - headerHeight;
        if (document.documentElement.scrollTop >= whenTohide) {
            setVisible(false);
        }
    }

    function accept() {
        // remove listener if set
        window.removeEventListener("scroll", handleScroll);

        Cookies.set(cookieName, true, {
            expires: 150, //days
        });
        setVisible(false);
    }

    useEffect(() => {
        // if cookie undefined or debug
        const show = !debug
            ? !hasDoNotTrack() && Cookies.get(cookieName) === undefined
            : true;
        if (show) {
            setVisible(true);
            window.addEventListener("scroll", handleScroll, {
                passive: true,
            });
        }
        // returned function will be called on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <div className={style.cookieConsent}>
            <span>This webiste uses cookies for anonymous analytics.</span>
            <button onClick={accept}>OK</button>
        </div>
    );
};

function hasDoNotTrack() {
    const doNotTrack =
        // The browser supports Do Not Track!
        (window.doNotTrack ||
            navigator.doNotTrack ||
            navigator.msDoNotTrack ||
            "msTrackingProtectionEnabled" in window.external) &&
        // Do Not Track is enabled!
        (window.doNotTrack === "1" ||
            navigator.doNotTrack === "yes" ||
            navigator.doNotTrack === "1" ||
            navigator.msDoNotTrack === "1" ||
            window.external.msTrackingProtectionEnabled());

    if (doNotTrack) {
        console.log("Do not track detected. I will repect that :)");
    }
    return doNotTrack;
}

export default CookiesConsent;
