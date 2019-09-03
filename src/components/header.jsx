import React from "react";
import { Link } from ".";
import "./header.module.scss";

const Header = () => (
    <header>
        <nav>
            <Link className="colored-bg" to="/#what">
                <h4>What</h4>
            </Link>
            <Link className="colored-bg" to="/#why">
                <h4>Why</h4>
            </Link>
            <Link className="colored-bg" to="/#who">
                <h4>Who</h4>
            </Link>
        </nav>
    </header>
);

export default Header;
