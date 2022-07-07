import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { useEffect } from 'react'
import { WaveGradient } from "wave-gradient";

// import { Helmet } from "react-helmet";
// import { withPrefix } from "gatsby"

const AboutPage = () => {

  useEffect(() => {
    const canvasElement = document.querySelector("canvas");
    try {
      // Throws if it can't get a WebGL 2.0 context. For example, if the
      // browser does not support it.
      const gradient = new WaveGradient(canvasElement, {
        colors: ["#ee6c4d", "#F8EB97", "#59F8E8", "#E56B70", "#97FFC4", "#FF928B"],
        fps: 60,
        seed: 3,
        speed: 1.4,
        amplitude: 440,
        density: [0.06, 0.16],
      });
    } catch (e) {
      console.error(e);
    }
  }, [])

  return (
    <main className="mainStatic">
      <Seo
        title="About Bishal | UX Designer | Product Lead |  @bishaller"
        description="My name is Bishal. I am a UX and Product Designer, who turns
        complex problem sets to simple solutions, focused to build
        experiences."
      />
      <Layout>
        <canvas id="gradient-canvas" />
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
                <h1 className="letter__title">It’s a nice to meet you here</h1>
                <p>Hi 👋</p>
                <p>
                  My name is Bishal. I am a UX &amp; Product Designer, who turns
                  complex problem sets to simple solutions, focused to build
                  experiences.
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
        {/* <Helmet>
        <script src={withPrefix('gradient.js')} type="text/javascript" defer={false} async/>
      </Helmet> */}
      </Layout>
    </main>
  )
}
export default AboutPage
