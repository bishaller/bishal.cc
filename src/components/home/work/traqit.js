import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Traqit = () => {
  return (
    <section className="traqit">
      <div className="siteContainer">
        <div className="traqit__header">
          <h2 className="heading heading--two">
            Revamping the 20-year old <span>📆</span> event management system,
            step-by-step
          </h2>
          <div className="traqit__content">
            <div className="paragraph">
              <p>
                I lead the UX work, producing all major deliverables &
                communication. Rather than jumping up to build a revolutionized
                software, I focused on transitioning users from the old
                overwhelming software to a task-focused minimal interface in
                multiple phases.
              </p>
              <p className="disabled-button">Case study coming soon</p>
            </div>
          </div>
        </div>
      </div>
      <StaticImage
        src={"../../../images/home/traqit_dashboard.webp"}
        alt=""
        width={5000}
        className="traqit__image"
      />
    </section>
  )
}

export default Traqit
