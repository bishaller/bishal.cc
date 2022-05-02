import * as React from "react"

const Intro = ({ title, subtitle, description }) => {
  function createHTML(props) {
    return { __html: props }
  }
  return (
    <section className="intro">
      <div className="siteContainer siteContainer--medium">
        <div className="intro__inner">
          <header className="intro__header">
            <h2
              className="intro__title"
              title={title}
              dangerouslySetInnerHTML={createHTML(title)}
            />
          </header>
          <div className="intro__content">
            <h3
              className="intro__subTitle"
              subtitle={subtitle}
              dangerouslySetInnerHTML={createHTML(subtitle)}
            />
            <p
              dangerouslySetInnerHTML={createHTML(description)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
