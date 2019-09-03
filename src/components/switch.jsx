import React, { useEffect } from "react";
import { MDCSwitch } from "@material/switch";
import "./switch.scss";

const Switch = ({ label, onChange }) => {
    useEffect(() => {
        // Update the document title using the browser API
        new MDCSwitch(document.querySelector(".mdc-switch"));
    });

    return (
        <div>
            <div className="mdc-switch switch">
                <div className="mdc-switch__track"></div>
                <div className="mdc-switch__thumb-underlay">
                    <div className="mdc-switch__thumb">
                        <input
                            type="checkbox"
                            id="switch"
                            className="mdc-switch__native-control"
                            role="switch"
                            onChange={e => onChange(e.target.checked)}
                        />
                    </div>
                </div>
            </div>
            <label style={{ marginLeft: "1rem" }} htmlFor="switch">
                {label}
            </label>
        </div>
    );
};

export default Switch;
