import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import "./header.module.scss";

const Header = () => (
    <header>
        <nav>
            <AnchorLink className="colored-bg" href="#what">
                <h4>What</h4>
            </AnchorLink>
            <AnchorLink className="colored-bg" href="#why">
                <h4>Why</h4>
            </AnchorLink>
            <AnchorLink className="colored-bg" href="#who">
                <h4>Who</h4>
            </AnchorLink>
        </nav>
    </header>
);

export default Header;
