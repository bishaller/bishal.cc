import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Trekkersparadise = () => {
  return (
    <section className="trekkersParadise">
      <div className="siteContainer siteContainer--large">
        <div className="trekkersParadise__header">
          <h2 className="heading heading--one heading--light">
            The true fun of touring in Nepal
          </h2>
          <div className="paragraph">
            <p>
              I led the UX work, producing all major deliverables &
              communication. I worked closely with the product team to
              understand the business goals and user needs. I then designed the
              user flows, wireframes, and prototypes to help the team validate
              the product vision.
            </p>
          </div>
          <a
            href="https://trekkersparadisenepal.com/"
            target="_blank"
            rel="noreferrer" 
            title={`Visit the website`}
            className="buttonSpecial buttonSpecial--large"
          >
            Visit the website
            <span>
              <svg className="icon icon-arrow">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </span>
          </a>
        </div>
        <StaticImage
          src={"../../../images/home/trekkersparadise_banner.png"}
          alt=""
          width={5000}
          className="traqit__image"
        />
      </div>
    </section>
  )
}

export default Trekkersparadise
