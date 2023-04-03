import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { useEffect } from "react"
import { WaveGradient } from "wave-gradient"

const AboutPage = () => {
  useEffect(() => {
    const canvasElement = document.querySelector("canvas")
    try {
      // Throws if it can't get a WebGL 2.0 context. For example, if the
      const gradient = new WaveGradient(canvasElement, {
        colors: [
          // "#ee6c4d",
          // "#F8EB97",
          "#59F8E8",
          "#E56B70",
          // "#97FFC4",
          "#FF928B",
        ],
        fps: 24,
        seed: 4,
        speed: 2,
        amplitude: 440,
        density: [0.06, 0.16],
      })
    } catch (e) {
      console.error(e)
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
                <h1 className="letter__title">Howdy!</h1>
                <div className="letter__largetext">
                  <p>
                    I am Bishal. A product designer made in🇳🇵Nepal, shipped to
                    the 🇺🇸 US.
                  </p>
                  <p>
                    I’m an extraverted, outgoing, outspoken, fun, and easy-to-go
                    type.
                  </p>
                </div>
                <div className="letter__body">
                  <h2>Here's more about me & the work I do.</h2>
                  <p>
                    I started as an intern designer watching photoshop and
                    illustrator tutorials in 2015. I've worn many hats, from
                    illustrating maps, trying hard on graphic design,
                    transforming to a UI designer, understanding and grinding on
                    UX, learning to code, and managing products and teams.
                  </p>
                  <p>
                    Clutching knowledge from every aspect of design, product,
                    marketing, development, and management, I am an end-to-end
                    designer who believes in building experiences that create an
                    impact rather than "just functional." I can Think, Solve,
                    Invent, Design, Code, Manage, Lead, and, most importantly,
                    Learn.
                  </p>
                  <p>
                    I have worked on projects as small as changing a tertiary
                    button color to designing large-scale applications requiring
                    an extensive design system. I can fit in most teams,
                    bridging teams or being an individual contributor.
                  </p>
                  <p>
                    Even though I'm a designer, I like exploring horizontals and
                    scratching my head to understand how my peer work to bring
                    products to life. Being a marketing student in my undergrad,
                    a UX student in my master's, and a coding student at night,
                    I enjoy learning.
                  </p>
                  <p>
                    Are you still reading through? Nice to meet you. Here's more
                    about me.{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Momo_(food)"
                      title="Momo, staple snack of Nepal"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Nepali Momo
                    </a>{" "}
                    is my favorite food. I was born in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Kathmandu"
                      title="Link to wikipedia page of Kathmandu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      the city of temples
                    </a>{" "}
                    where you can encounter perfectly organized chaos and
                    overwhelming charismatic culture. When I was a kid, I
                    believed I would become a pilot one day, but I ended up
                    being a designer.
                  </p>
                  <p>
                    I like trekking (maybe I used to); I have roamed a lot of
                    trekking & hiking routes in Nepal. My last trek was to{" "}
                    <a
                      href="https://www.instagram.com/p/CU-FPkqB9MI/"
                      title="link to bishal's instagram picture of Tsho rolpa"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tsho Rolpa
                    </a>{" "}
                    in 2021. As of now, I'm writing these words sitting on a
                    desk in Philadelphia. I'm pursuing my masters in UX &
                    Interaction design at Jefferson to take a break from work.
                    I'll be done with the program by May 2024.
                  </p>
                  <p>
                    More than that, I'm working on a side project relating to
                    design systems and learning design. I'm still determining
                    the idea, so you will know if it works out. And BTW, if you
                    came this far reading all these words, we should be friends.
                    Hit me on{" "}
                    <a
                      title="Bishal on instagram"
                      target="_blank"
                      rel="noreferrer"
                      href="https://instagram.com/bishaller"
                    >
                      Instagram
                    </a>{" "}
                    or any other social media with the username{" "}
                    <a
                      title="Find Bishal's social media"
                      target="_blank"
                      rel="noreferrer"
                      href="https://linktr.ee/bishaller"
                    >
                      @bishaller
                    </a>
                    . And thanks for being here.
                  </p>
                  <p>Have a good day!</p>
                </div>
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
