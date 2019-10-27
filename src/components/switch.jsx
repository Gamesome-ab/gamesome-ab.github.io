import React, { useEffect } from "react";
import "@material/mwc-switch";

import style from "./switch.module.scss";

const Switch = ({ label, onChange }) => {

    useEffect(() => {
        const handleChange = event => {
            onChange(event.target.checked);
        };

        const s = document.querySelector("#descSwitch");
        s.addEventListener("change", handleChange);

        return () => {
            s.removeEventListener("change", handleChange);
        };
    }, [onChange]);

    return (
        <div className={style.switch}>
            <mwc-switch id="descSwitch"></mwc-switch>
            <label for="descSwitch">{label}</label>
        </div>
    );
};

export default Switch;
