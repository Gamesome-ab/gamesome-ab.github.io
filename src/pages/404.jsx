import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Layout, SEO } from "../components";

const NotFoundPage = () => {
    const data = useStaticQuery(graphql`
        query {
            gif: file(relativePath: { eq: "cat.gif" }) {
                publicURL
            }
        }
    `);
    return (
        <Layout>
            <SEO title="404: Not found" />
            <div
                className="container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <h1 style={{ textAlign: "center" }}>
                    <strong>404 </strong> Page not found
                </h1>
                <p style={{ marginBottom: "5rem", textAlign: "center" }}>
                    You just hit a route that doesn&#39;t exist... the sadness.{" "}
                    <br />
                    Hopefully this gif can cheer you up.
                </p>
                <img
                    src={data.gif.publicURL}
                    alt="cat shaq wiggle"
                    width="400"
                />
            </div>
        </Layout>
    );
};

export default NotFoundPage;
