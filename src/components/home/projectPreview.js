import * as React from "react"
import dwtBG from "../../images/dwt-bg.jpg"
import wpBG from "../../images/wordcamp.jpg"
import tpnBG from "../../images/tpn.jpg"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-fast-marquee"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ProjectPreview = linkData => {
  return (
    <section className="projectPreview">
      <div className="siteContainer siteContainer--medium">
        <h2 className="projectPreview__title">work</h2>
      </div>
      <Marquee speed={100} gradient={false}>
        UX Designer&nbsp;&nbsp;⍟&nbsp;&nbsp;UI
        Designer&nbsp;&nbsp;⍟&nbsp;&nbsp;Visual
        Design&nbsp;&nbsp;⍟&nbsp;&nbsp;UX
        Research&nbsp;&nbsp;⍟&nbsp;&nbsp;Product
        Design&nbsp;&nbsp;⍟&nbsp;&nbsp;Systems
        Design&nbsp;&nbsp;⍟&nbsp;&nbsp;FrontEnd&nbsp;&nbsp;⍟&nbsp;&nbsp;
      </Marquee>

      <div className="projectPreview__notice">
        <div className="siteContainer siteContainer--medium">
          <p>🚧 Case studies are coming soon. A week or two maybe.</p>
        </div>
      </div>

      <div className="projectPreview__projects">
        <div className="siteContainer siteContainer--medium">
          <div className="projectPreview__wrap">
            <article
              className="projectCard projectCard--dwt"
              style={{ backgroundImage: `url(${dwtBG})` }}
            >
              <span className="projectCard__soon">Case Study</span>
              <h2>
                Discovering a<br />
                better travel experience
              </h2>
              <StaticImage
                src={"../../images/dwt-fg.png"}
                alt="Photo resembles a couple travelling, work case study for Discovery World Trekking"
                width={5000}
                className="projectCard__image"
              />
              <div className="projectCard__footer">
                <h3 className="projectCard__title">
                  Reimagined travel booking experinece to improve experiences
                  for three distinct users.
                </h3>
                <div className="projectCard__icon">
                  <svg className="" viewBox="0 0 17 17">
                    <use xlinkHref="#icon-target-arrow"></use>
                  </svg>
                </div>
              </div>
              <a
                className="projectCard__link"
                href="https://bishaller.notion.site/Discovery-World-Trekking-DWT-d8e41e7cfdd64a02873db1e38ae3066b/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="screen-reader-text">View Case Study</span>
              </a>
            </article>
            <div className="projectPreview__wrap projectPreview__wrap--two">
              <article className="projectCard projectCard--rubbermaid">
                <AniLink
                  cover
                  direction="left"
                  bg="#DF0021"
                  duration={1.25}
                  to={`/rubbermaid/`}
                  key={`Visit Case Study`}
                  title={`Visit Case Study`}
                  className="projectCard__link"
                >
                  <span className="screen-reader-text">Visit Case Study</span>
                </AniLink>

                <span className="projectCard__soon">Case Study</span>
                <h2>Elevating rubbermaid’s purchase experience</h2>
                <StaticImage
                  src={"../../images/rubbermaid/rubbermaid_thumb.png"}
                  alt="UI screenshots of an event management app."
                  width={5000}
                  className="projectCard__image"
                />
              </article>
              <article
                className="projectCard projectCard--wp"
                style={{ backgroundImage: `url(${wpBG})` }}
              >
                <span className="projectCard__soon projectCard__soon--alt">
                  Coming Soon
                </span>
                <a
                  className="projectCard__link"
                  href="https://kathmandu.wordcamp.org/2018/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="screen-reader-text">Visit Website</span>
                </a>
              </article>
            </div>
          </div>
          <div className="projectPreview__wrap projectPreview__wrap--three">
            <article className="projectCard projectCard--sampression">
              <span className="projectCard__soon projectCard__soon--alt">
                Coming Soon
              </span>
              <a
                className="projectCard__link"
                href="https://sampression.com"
                rel="noreferrer"
                target="_blank"
              >
                <span className="screen-reader-text">Visit Website</span>
              </a>
              <h2>
                Simplified
                <br />
                no-code websites
              </h2>
              <StaticImage
                src={"../../images/sampression.png"}
                alt=""
                width={5000}
                className="projectCard__image"
              />
            </article>
            <div className="projectPreview__wrap projectPreview__wrap--vertical">
              <article className="projectCard projectCard--idealaya">
                <h2>Content strategy and web design for creative agency</h2>
                <StaticImage
                  src={"../../images/idealaya.png"}
                  alt=""
                  width={5000}
                  className="projectCard__image"
                />
                <a
                  className="projectCard__link"
                  href="https://idealaya.co/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="screen-reader-text">Visit Website</span>
                </a>
              </article>
              <article
                className="projectCard projectCard--tpn"
                style={{ backgroundImage: `url(${tpnBG})` }}
              >
                <span className="projectCard__soon projectCard__soon--alt">
                  Coming Soon
                </span>
                <a
                  className="projectCard__link"
                  href="https://trekkersparadisenepal.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="screen-reader-text">Visit Website</span>
                </a>
              </article>
            </div>
            <article className="projectCard projectCard--traqit">
              <a
                className="projectCard__link"
                href="https://traqit.com/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="screen-reader-text">Visit Website</span>
              </a>
              <span className="projectCard__soon">Coming Soon</span>
              <h2>Event management simplified.</h2>
              <StaticImage
                src={"../../images/traqit.png"}
                alt="UI screenshots of an event management app."
                width={5000}
                className="projectCard__image"
              />
            </article>
          </div>
          <div className="projectPreview__wrap projectPreview__wrap--single">
            <article className="projectCard projectCard--dribbble">
              <StaticImage
                src={"../../images/dribbble.jpg"}
                alt="Showcase or screenshots of UI work showcased on dribbble."
                width={5000}
                className="projectCard__image"
              />
              <a
                className="projectCard__link"
                href="https://dribbble.com/bishaller"
                rel="noreferrer"
                target="_blank"
              >
                <span className="screen-reader-text">Visit dribbble account</span>
              </a>
            </article>
          </div>
          <span className="button--disabled">More work coming soon...</span>
        </div>
      </div>
    </section>
  )
}

export default ProjectPreview
