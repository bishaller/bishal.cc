import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Intro = () => {
  return (
    <section className="intro">
      <div className="siteContainer siteContainer--large">
        <div className="intro__inner">
          <div className="intro__content">
            <p>
              Right now, I am 🔍 looking out
              <br />
              for 👨‍💻 product & UX opportunities anywhere in the states 🇺🇸 .
            </p>
          </div>
          <a
                className="intro__link"
                title="Find Bishal's resume on https://read.cv/bishaller"
                href="https://read.cv/bishaller"
                target="_blank"
                rel="noreferrer"
              >
                And here's my Resume
              </a>
        </div>
      </div>
    </section>
  )
}

export default Intro
