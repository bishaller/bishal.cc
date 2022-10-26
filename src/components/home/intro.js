import * as React from "react"

const Intro = ({ title, subtitle, description }) => {
  function createHTML(props) {
    return { __html: props }
  }
  return (
    <section className="intro">
      <div className="siteContainer siteContainer--medium">
        <div className="intro__inner">
          <div className="intro__content">
          <p
          className="intro__subTitle"
          subtitle={subtitle}
          dangerouslySetInnerHTML={createHTML(subtitle)}
            />
            <p
              title={title}
              dangerouslySetInnerHTML={createHTML(title)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
