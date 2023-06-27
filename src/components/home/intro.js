import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Intro = () => {
  return (
    <section className="intro">
      <div className="siteContainer">
        <div className="intro__inner">
          <div className="intro__content">
            <p>
              <strong className="intro__title">As a designer,</strong>
              Clutching knowledge from every aspect of design, product,
              marketing, engineering, & business, I am an end-to-end designer
              who believes in building experiences that create an impact rather
              than "just functional."
            </p>
          </div>
          <div className="intro__Image">
            <StaticImage
              src={"../../images/intro.webp"}
              alt="RandomImage"
              width={10000}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
