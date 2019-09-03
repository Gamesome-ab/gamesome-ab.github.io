import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";
import { Layout, SEO, Link, TechLogos, Switch } from "../components";

import Logo from "../images/gamesome.svg";
import InvertedLogo from "../images/gamesome-inverted.svg";
import { MdMultilineChart, MdCode, MdSchool } from "react-icons/md";

import style from "./index.module.scss";

const hero = (
    <div className={style.hero}>
        <img src={Logo} alt="Gamesome Logo"></img>
        <h1>Gamesome</h1>
    </div>
);

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            game: file(relativePath: { eq: "Game.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    const [viewOriginal, setViewOriginal] = useState(false);
    const description = {
        en: (
            <div className={style.description}>
                <p>
                    A Scania lad, who, after spending parts of his upbringing
                    among mummies, scarabs and koshari, returned and had to
                    start repairing Malmö dialect.
                </p>
                <p>
                    I possess unique talents such as being able to cook risotto
                    without rice and was once the biggest basket ball talent
                    north of Värnhem.
                </p>
                <p>
                    After an astonishing flight, however, I landed as bitter
                    joy-spreader behind a keyboard, where I'd rather code and do
                    it well.
                </p>
            </div>
        ),
        sv: (
            <div className={style.description}>
                <p>
                    En skånepåg som, efter att ha tillbringat delar av sin
                    uppväxt bland mumier, och koshari, återvände och fick börja
                    med att reparera sin malmöitiska.
                </p>
                <p>
                    Besitter unika talanger så som att kunna laga risotto utan
                    ris och var en gång den största baskettalangen norr om
                    värnhem.
                </p>
                <p>
                    Efter en häpnadsväckande flygresa landade jag emellertid som
                    bitter glädjespridare bakom tangentbordet där jag numera
                    kodar hellre och bra.
                </p>
            </div>
        ),
    };

    const getDescription = viewOriginal => {
        if (viewOriginal) {
            return description["sv"];
        }
        return description["en"];
    };

    return (
        <Layout hero={hero}>
            <SEO />
            <section id="what">
                <div className="container">
                    <h2 style={{ textAlign: "center" }}>What is Gamesome?</h2>
                    <div className={style.row}>
                        <div className={style.column}>
                            <img
                                width="250"
                                src={InvertedLogo}
                                alt="Gamesome Logo again"
                            />
                        </div>
                        <div className={style.column}>
                            <p>
                                Gamesome is a software consultant company with a
                                long term goal to grow into developing our own
                                products.
                            </p>
                            <p>
                                The plan is to work in cycles alternating
                                between consulting and developing my own product
                                ideas.
                            </p>
                            <p>
                                The consultant cycles will finance the product
                                cycles and provide an environment of validating
                                my product ideas.
                            </p>
                            <p>
                                The product cycles will give me experience that
                                I can use to help customers build better
                                products.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="why">
                <div className="container">
                    <h2 style={{ textAlign: "center" }}>How I can help</h2>
                    <div className={style.row}>
                        <div className={style.column}>
                            <div className={style.header}>
                                <MdCode className="color-primary" />
                                <h4>Developer</h4>
                            </div>
                            <p>
                                I am first and foremost a developer. For me,
                                software development is about solving problems
                                in a creative way, which is awesome!
                            </p>
                            <div className={style.header}>
                                <MdMultilineChart className="color-primary" />
                                <h4>Product Manager</h4>
                            </div>
                            <p>
                                We shouldn't forget that the end goal of all
                                software is to solve human problems. The user
                                perspective and the business side of software
                                development is something that I find
                                interesting.
                            </p>
                            <div className={style.header}>
                                <MdSchool className="color-primary" />
                                <h4>Teacher</h4>
                            </div>
                            <p>
                                I've been often described as a good teacher.
                                Which is quite useful when trying to explain
                                software and getting different people to work
                                together.
                            </p>
                            <p>
                                <Link to="https://ahmadgame.com/experience/">
                                    Read more about my experience...
                                </Link>
                            </p>
                        </div>
                        <div className={style.column}>
                            <TechLogos />
                        </div>
                    </div>
                </div>
            </section>
            <section id="who">
                <div className="container">
                    <h2 style={{ textAlign: "center" }}>Who I am</h2>
                    <div className={style.row}>
                        <div className={style.column}>
                            <Img fluid={data.game.childImageSharp.fluid} />
                        </div>
                        <div className={style.column}>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span>Ahmad Game</span>
                                <Switch
                                    label="Original"
                                    onChange={checked =>
                                        setViewOriginal(checked)
                                    }
                                />
                            </div>
                            {getDescription(viewOriginal)}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;
