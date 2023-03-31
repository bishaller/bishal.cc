import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Background from "../../../images/home/dwt_mountain.png"

const Dwt = () => {
  return (
    <section className="dwt">
      <div className="siteContainer">
        <div className="dwt__header">
          <StaticImage
            src={"../../../images/home/dwt_emoji.png"}
            alt=""
            width={5000}
            className="dwt__headerImage"
          />
          <h2 className="heading">Web App</h2>
        </div>
        <div
          className="dwt__wrap"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="dwt__wrapInner">
          <div className="dwt__image">
              <StaticImage
                src={"../../../images/home/dwt_phone.png"}
                alt=""
                width={5000}
                className=""
              />
            </div>
            <div className="dwt__content">
              <h2 className="heading heading--three">
                Defining the travel experience from the ground up for travelers,
                agents & sherpas.
              </h2>
              <div className="paragraph">
                <p>
                  I lead the project to strategize & re-design the travel web
                  app from the scratch to address issues in payment,
                  information architecture, custom trips, traveler onboarding, the list goes on...
                </p>
              </div>
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
        </div>
      </div>
    </section>
  )
}

export default Dwt
