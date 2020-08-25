import React from "react";
import { Layout, SEO, Link, TechLogos } from "../components";

import Logo from "../images/gamesome.svg";
import InvertedLogo from "../images/gamesome-inverted.svg";
import { MdShowChart, MdCode, MdMergeType } from "react-icons/md";

import style from "./index.module.scss";

const hero = (
  <div className={style.hero}>
    <img src={Logo} alt="Gamesome Logo"></img>
    <h1>Gamesome</h1>
  </div>
);

const IndexPage = () => {
    return (
        <Layout hero={hero}>
            <SEO />
            <section id="about">
                <div className="container">
                    <h2 style={{ textAlign: "center" }}>What is Gamesome?</h2>
                    <div className={style.row}>
                        <div className={`${style.column} ${style.logoColumn}`}>
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
                                between consulting and trying out product ideas.
                            </p>
                            <p>
                                The consultant cycles will finance the product
                                cycles and provide an environment of validating
                                these ideas.
                            </p>
                            <p>
                                The product cycles will give us experience that
                                we can use to help customers build better
                                products.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services">
                <div className="container">
                    <h2 style={{ textAlign: "center" }}>
                        How Gamesome can help
                    </h2>
                    <div className={style.row}>
                        <div className={style.column}>
                            <div className={style.header}>
                                <MdCode className="color-primary" />
                                <h4>Development</h4>
                            </div>
                            <p>
                                Software development and building products is
                                our core business. We think software is about
                                solving real problems in a creative and
                                practical way.
                            </p>
                            <div className={style.header}>
                                <MdShowChart className="color-primary" />
                                <h4>Product Management</h4>
                            </div>
                            <p>
                                The end goal of all software is to solve human
                                problems. The user perspective and the business
                                side of software development is something we
                                have experience with.
                            </p>
                            <div className={style.header}>
                                <MdMergeType className="color-primary" />
                                <h4>Coaching</h4>
                            </div>
                            <p>
                                Software is built by people. Getting people to
                                work together in synergy towards a common goal
                                is both productive and rewarding.
                            </p>
                            <p>
                                <Link to="https://ahmadgame.com/experience/">
                                    Read more...
                                </Link>
                            </p>
                        </div>
                        <div className={style.column}>
                            <TechLogos />
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects">
                <div className="container">
                    <h2 style={{ textAlign: "center" }}>Projects</h2>
                    <div className={style.project}>
                        <h4>E-Space Survey Manager</h4>
                        <p>
                            E-Space is a company that offers online surveys for
                            their customers to engage with users in order to
                            improve their websites, products and services.
                            E-Space helps their customers to design engaging
                            surveys, analyze the responses, present aggregated
                            results and suggest improvements. They use a
                            proprietary tool called “Survey Manager” to publish
                            surveys, collect and analyse responses.
                        </p>
                        <p>
                            In order to scale their business they wanted to make
                            the Survey Manager available for customers to
                            publish their own surveys and get an overview of the
                            response data. Additionally they wanted to help
                            their customers make sense of the data and find
                            insights into their users behaviours. E-Space then
                            relied on their own expertise to provide deeper
                            analysis and suggest improvements.
                        </p>
                        <p>
                            E-Space reached out to us in order to help them with
                            this transformation and it was quite an interesting
                            assignment, where we had to use our entire toolkit
                            from development, through UX design and product
                            management.
                        </p>
                        <p>
                            Firstly, the Survey Manager had to be visually and
                            functionally redesigned to cater to both the expert
                            analysts at E-Space, and newer less experienced
                            users.
                        </p>
                        <p>
                            Secondly, we needed to automate and simplify some
                            workflows performed by the analysts that the new
                            users expected to be able to do themselves.
                        </p>
                        <p>
                            Finally, we had to rework pricing and marketing
                            strategies where license fees and expert services
                            should complement each other to provide a good
                            customer experience.
                        </p>
                    </div>
                    <div className={style.project}>
                        <h4>Bathroom Finder</h4>
                        <p>
                            Bathroom Finder is a community driven app that helps
                            new parents find a good place to change a diaper. It
                            is completely free and available for{" "}
                            <Link to="https://apps.apple.com/us/app/id1518954012">
                                iOS
                            </Link>{" "}
                            and{" "}
                            <Link to="https://play.google.com/store/apps/details?id=io.gamesome.bathroom_finder">
                                Android
                            </Link>
                            .
                        </p>
                        <p>
                            Building this app solved a real life problem and
                            provided a learning experience of developing and
                            releasing a cross platform app built with flutter.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;
