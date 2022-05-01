import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Project = ({ subtitle, title, description, image }) => {
  function createHTML(props) {
    return { __html: props }
  }
  return (
    <section className="project">
      <div className="siteContainer">
        <header className="project__header">
          <div className="project__headerInner">
            <div className="project__titles">
              <p
                className="project__meta"
                subtitle={subtitle}
                dangerouslySetInnerHTML={createHTML(subtitle)}
              />
              <h2
                className="project__title"
                title={title}
                dangerouslySetInnerHTML={createHTML(title)}
              />
            </div>
            <div className="project__content">
              <p
                className="project__description"
                dangerouslySetInnerHTML={createHTML(description)}
              />
            </div>
          </div>
        </header>
        <div className="project__image">
          <StaticImage src={""} alt="" width={5000} className="shots__image" />
        </div>
      </div>
    </section>
  )
}

export default Project
