import React from "react";

import { Layout, SEO } from "../components";
import style from "./index.module.scss";
import Logo from "../images/gamesome.svg";

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
            <section id="what">
                <div className="container">
                    <h2>What is Gamesome?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris nisl diam, volutpat sed posuere finibus, feugiat
                        nec est. Nam non ante nec urna mollis volutpat. Sed nec
                        nisi mollis, rutrum enim vel, elementum arcu. Ut in orci
                        vulputate, molestie enim eu, sollicitudin massa. Donec
                        in est arcu. Praesent eget nisl felis. Nullam venenatis
                        nisi vitae posuere interdum. Nam condimentum eu erat ut
                        mollis. Etiam quis fringilla quam. Etiam rutrum lacus et
                        porta vehicula. Nunc facilisis congue lectus ac
                        scelerisque. Quisque nisl turpis, ornare nec tristique
                        sit amet, sollicitudin ac lacus. In ullamcorper purus at
                        nunc auctor, vel viverra metus vehicula. Nam varius nisl
                        quis ante ullamcorper sollicitudin. Nullam interdum
                        tincidunt ipsum a mattis.
                    </p>
                </div>
            </section>
            <section id="why">
                <div className="container">
                    <h2>How we can help</h2>
                    <p>
                        Nullam blandit pellentesque quam et tempor. Aenean
                        blandit molestie sapien vel ultrices. Nunc sagittis
                        tempor lacus, id maximus mauris bibendum in. Curabitur
                        sodales varius bibendum. Aliquam sed lobortis velit, sit
                        amet dapibus dui. In feugiat lacinia augue, ac tincidunt
                        sem placerat ut. Suspendisse eget sodales diam. Nunc
                        volutpat in purus quis luctus. Pellentesque felis nisi,
                        luctus ut lobortis id, tristique vel libero. Nullam sed
                        viverra neque.
                    </p>
                </div>
            </section>
            <section id="who">
                <div className="container">
                    <h2>Who are we?</h2>
                    <p>
                        Duis eget felis tincidunt, egestas lorem in, convallis
                        neque. Aenean a lobortis orci. Fusce non dui sed dolor
                        viverra laoreet sit amet non libero. Donec a sem at
                        metus fermentum placerat in et nibh. Curabitur luctus
                        metus vel ipsum dictum tincidunt. Integer dignissim, dui
                        at aliquam dapibus, tellus est mattis dui, sit amet
                        dapibus quam dolor et ligula. Curabitur lacinia
                        ullamcorper commodo. Nullam efficitur dui sollicitudin
                        pulvinar varius. Aenean ligula enim, euismod et
                        malesuada sollicitudin, fringilla vel lectus.
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;
