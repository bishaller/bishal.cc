import * as React from "react";
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";

const AboutPage = () => {
    return (
        <main className="mainStatic">
            <Layout>
                <canvas id="gradient-canvas"/>
                <div className="letter">
                    <div className="letter__content">
                        <section className="letter__section">
                            <StaticImage
                                src={"../images/bishal_mishra_favicon.png"}
                                alt=""
                                width={5000}
                                className="letter__headshot"
                            />
                            <div className="letter__paragraph">
                                <h2 className="letter__title">It’s a nice to meet you here</h2>
                                <p>Hi 👋</p>
                                <p>
                                    My name is Bishal. I am a UX &amp; Product Designer, who
                                    turns complex problem sets to simple solutions, focused to
                                    build experiences.
                                </p>
                                <p>
                                    I can Think, Solve, Invent, Design, Code, Manage, Lead and
                                    most importantly, Learn. I have worn many hats, but currently
                                    I lead all things product(s) and team(s) at Last Door, a B2B
                                Design and Development agency.
                                </p>
                                <p>
                                    I am passionate about all areas of Design and Marketing. Being
                                    a business studies graduate helps me blend the business side
                                    with Design and make decisions as a product lead.
                                </p>
                                <p>
                                    As of april 2022, I am learning to code and be consistent with
                                    it, which also sums up the in-progress version of my personal
                                    site. Besides that, I'm a fun person to hang around. You can
                                    find me on any social media with @bishaller username. Or,
                                    let's just connect on linkedin.
                                </p>
                                <p></p>
                                <div className="letter__button">
                                    <a
                                        className="button button--linkedin"
                                        title="Connect on Linkedin"
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://linkedin.com/in/bishaller"
                                    >
                                        Connect on Linkedin
                                    </a>
                                </div>
                            </div>
                        </section>
                        {/* <section className="letter__section">
              <div className="letter__paragraph">
                <h2 className="letter__title">I am from the city of temples</h2>
                <p>
                  I‘m a UX/UI Designer with over six years experience
                  conceptualizing and crafting digital products, helping
                  businesses and non-profits expand their capacity for impact.
                </p>
              </div>
            </section> */}
                        {/* <div className="letter__footer">
              <h2 className="letter__footerTitle">
                Shoot me emails (or Request Portfolio)
              </h2>
              <address>
                <a href="mailto:hello@bishal.cc">hello@bishal.cc</a>
              </address>
              <h2 className="letter__footerTitle">Visit my Dribbble Profile:</h2>
            </div> */}
                    </div>
                </div>
            </Layout>
        </main>
    );
};
export default AboutPage;
