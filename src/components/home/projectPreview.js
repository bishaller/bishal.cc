import * as React from "react"
import dwtBG from "../../images/dwt-bg.jpg"
import wpBG from "../../images/wordcamp.jpg"
import tpnBG from "../../images/tpn.jpg"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-fast-marquee";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const ProjectPreview = (linkData) => {

  return (
    <section className="projectPreview">
      <div className="siteContainer siteContainer--medium">
        <h2 className="projectPreview__title">work</h2>
      </div>
      <Marquee
        speed={100}
        gradient={false}
      >
        UX Designer&nbsp;&nbsp;⍟&nbsp;&nbsp;UI Designer&nbsp;&nbsp;⍟&nbsp;&nbsp;Visual Design&nbsp;&nbsp;⍟&nbsp;&nbsp;UX Research&nbsp;&nbsp;⍟&nbsp;&nbsp;Product Design&nbsp;&nbsp;⍟&nbsp;&nbsp;Systems Design&nbsp;&nbsp;⍟&nbsp;&nbsp;FrontEnd&nbsp;&nbsp;⍟&nbsp;&nbsp;
      </Marquee>

      <div className="projectPreview__notice">
        <div className="siteContainer siteContainer--medium">
          <p>🚧 Case studies are coming soon. A week or two maybe.</p>
        </div>
      </div>

      <div className="projectPreview__projects">
        <div className="siteContainer siteContainer--medium">
          <div className="projectPreview__wrap">
            <article className="projectCard projectCard--dwt" style={{ backgroundImage: `url(${dwtBG})` }}>
              <span className="projectCard__soon">Coming Soon</span>
              <h2>Discovering a<br />better travel experience</h2>
              <StaticImage
                src={"../../images/dwt-fg.png"}
                alt="Photo resembles a couple travelling, work case study for Discovery World Trekking"
                width={5000}
                className="projectCard__image"
              />
              <div className="projectCard__footer">
                <h3 className="projectCard__title">Reimagined travel booking experinece to improve experiences for three distinct users.</h3>
                <div className="projectCard__icon">
                  <svg className="" viewBox="0 0 17 17">
                    <use xlinkHref="#icon-target-arrow"></use>
                  </svg>
                </div>
              </div>
              <AniLink
                to="https://discoveryworldtrekking.com/"
                className="projectCard__link"
                target="_blank"
              >
                <span className="screen-reader-text">Visit Website</span>
              </AniLink>
            </article>
            <div className="projectPreview__wrap projectPreview__wrap--two">
              <article className="projectCard projectCard--traqit">
                <AniLink
                  to="https://traqit.com/"
                  className="projectCard__link"
                  target="_blank"
                >
                  <span className="screen-reader-text">Visit Website</span>
                </AniLink>
                <span className="projectCard__soon">Coming Soon</span>
                <h2>Event management simplified.</h2>
                <StaticImage
                  src={"../../images/traqit.png"}
                  alt="UI screenshots of an event management app."
                  width={5000}
                  className="projectCard__image"
                />
              </article>
              <article className="projectCard projectCard--wp" style={{ backgroundImage: `url(${wpBG})` }}>
                <AniLink
                  to="https://kathmandu.wordcamp.org/2018/"
                  className="projectCard__link"
                  target="_blank"
                >
                  <span className="screen-reader-text">Visit Website</span>
                </AniLink>
              </article>
            </div>

          </div>
          <div className="projectPreview__wrap projectPreview__wrap--three">
            <article className="projectCard projectCard--sampression">
              <AniLink
                to="https://sampression.com/"
                className="projectCard__link"
                target="_blank"
              >
                <span className="screen-reader-text">Visit Website</span>
              </AniLink>
              <h2>Simplified<br />no-code websites</h2>
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
                <AniLink
                  to="https://idealaya.co/"
                  className="projectCard__link"
                  target="_blank"
                >
                  <span className="screen-reader-text">Visit Website</span>
                </AniLink>
              </article>
              <article className="projectCard projectCard--tpn" style={{ backgroundImage: `url(${tpnBG})` }}>
                <AniLink
                  to="https://trekkersparadisenepal.com/"
                  className="projectCard__link"
                  target="_blank"
                >
                  <span className="screen-reader-text">Visit Website</span>
                </AniLink>
              </article>
            </div>
            <article className="projectCard projectCard--sites">
              <span className="projectCard__soon">Coming Soon</span>
              <h2>How might we build a chain of websites that is so similar yet different to each other and resemble their uniqueness?</h2>
            </article>
          </div>
          <span className="button--disabled">More work coming soon...</span>
        </div>
      </div>
    </section>
  )
}

export default ProjectPreview