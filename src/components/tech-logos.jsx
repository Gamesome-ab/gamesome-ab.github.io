import React from "react";
import { Link } from ".";
import PythonLogo from "../images/python.svg";
import ReactLogo from "../images/react.svg";
import WebComponentsLogo from "../images/web-components.svg";
import GraphQl from "../images/graphql.svg";
import NetCore from "../images/net-core.svg";
import Docker from "../images/docker.svg";
import Elastic from "../images/elastic.svg";
import Aws from "../images/aws.svg";
import Psql from "../images/psql.svg";

import style from "./tech-logos.module.scss";
const TechLogos = () => {
    return (
        <div className={style.grid}>
            <Link to="https://reactjs.org/">
                <img width="100" height="100" src={ReactLogo} alt="react" />
            </Link>
            <Link to="https://developer.mozilla.org/en-US/docs/Web/Web_Components">
                <img
                    width="100"
                    height="100"
                    src={WebComponentsLogo}
                    alt="Web Components"
                />
            </Link>
            <Link to="https://graphql.org/">
                <img width="100" height="100" src={GraphQl} alt="Graph QL" />
            </Link>
            <Link to="https://github.com/dotnet/core">
                <img width="100" height="100" src={NetCore} alt=".Net core" />
            </Link>
            <Link to="https://python.org/">
                <img width="100" height="100" src={PythonLogo} alt="Python" />
            </Link>
            <Link to="https://www.postgresql.org/">
                <img width="100" height="100" src={Psql} alt="PostgreSQL" />
            </Link>
            <Link to="https://www.elastic.co/">
                <img width="100" height="100" src={Elastic} alt="Elastic" />
            </Link>
            <Link to="https://www.docker.com/">
                <img width="100" height="100" src={Docker} alt="Docker" />
            </Link>
            <Link to="https://aws.amazon.com/">
                <img width="100" height="100" src={Aws} alt="AWS" />
            </Link>
        </div>
    );
};

export default TechLogos;
