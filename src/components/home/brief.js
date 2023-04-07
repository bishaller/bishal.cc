import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Brief = () => {
  return (
    <section className="brief">
      <div className="siteContainer siteContainer--billboard">
        <h2 className="brief__title screen-reader-text">
          Brief intro about Bishal Mishra
        </h2>
        <div className="heading heading--three">
          <p>
            By now, I’ve designed small to
            <br />
            large-scale, end-to-end products and experiences that I am proud of.
          </p>
        </div>
        <AniLink
              cover
              direction="left"
              bg="var(--c-brandHome)"
              duration={1.25}
              to={`/about/`}
              key={`/about/`}
              title={`go to about page`}
              className="buttonSpecial"
            >
              About Me
              <span>
                <svg className="icon icon-arrow">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
              </span>
            </AniLink>
      </div>
    </section>
  )
}

export default Brief