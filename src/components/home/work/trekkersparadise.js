import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Trekkersparadise = () => {
  return (
    <section className="trekkersParadise">
      <div className="siteContainer siteContainer--large">
        <div className="trekkersParadise__header">
          <h2 className="heading heading--one heading--light">
            Unfolding the true touring experience.
          </h2>
          <div className="paragraph">
            <p>
              From strategy, planning, iterating, and testing to coding the
              whole site on WordPress, I built this site from scratch to bring
              its uniqueness online.
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
