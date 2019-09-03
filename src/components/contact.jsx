import React from "react";
import { Link } from "./link";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => (
    <div
        style={{
            width: "15rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}
    >
        <Link className="colored-bg" to="https://github.com/gamesome-ab">
            <FaGithub />
        </Link>
        <Link className="colored-bg" to="mailto:game@gamesome.io">
            <MdEmail />
        </Link>
        <Link className="colored-bg" to="https://www.linkedin.com/in/gamesome">
            <FaLinkedinIn />
        </Link>
    </div>
);

export default Contact;
