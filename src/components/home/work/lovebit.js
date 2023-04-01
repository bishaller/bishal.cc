import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Lovebit = () => {
  return (
    <section className="lovebit">
      <div className="siteContainer">
        <div className="lovebit__header">
          <h2 className="heading heading--one">
            Blocking your favourite apps to form a habit
          </h2>
          <div className="paragraph">
            <p className="disabled-button">Case study coming soon</p>
          </div>
        </div>
        <StaticImage
          src={"../../../images/home/lovebit_screens.png"}
          alt=""
          width={5000}
          className="lovebit__image"
        />
      </div>
    </section>
  )
}

export default Lovebit
