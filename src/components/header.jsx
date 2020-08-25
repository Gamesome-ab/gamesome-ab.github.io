import React from "react";
import { Link } from ".";

const Header = () => (
    <header>
        <nav>
            <Link className="colored-bg" to="/#about">
                <h4>About</h4>
            </Link>
            <Link className="colored-bg" to="/#services">
                <h4>Services</h4>
            </Link>
            <Link className="colored-bg" to="/#projects">
                <h4>Projects</h4>
            </Link>
        </nav>
    </header>
);

export default Header;
