import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Rubbermaid = () => {
  return (
    <section className="rubbermaid">
      <div className="siteContainer siteContainer--large">
        <div className="rubbermaid__header">
          <h2 className="heading heading--two">
            <span>🛍️</span> shopping <span>🏡</span> home organizational
            products as easy as <span>🔥</span> tinder swipes
          </h2>
          <AniLink
            cover
            direction="left"
            bg="var(--c-brandHome)"
            duration={1.25}
            to={`/dwt/`}
            key={`/dwt/`}
            title={`View case study`}
            className="buttonSpecial buttonSpecial--large"
          >
            View Case Study
            <span>
              <svg className="icon icon-arrow">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </span>
          </AniLink>
        </div>
      </div>
      <StaticImage
        src={"../../../images/home/rubbermaid_banner.png"}
        alt=""
        width={5000}
        className="rubbermaid__image"
      />
    </section>
  )
}

export default Rubbermaid
