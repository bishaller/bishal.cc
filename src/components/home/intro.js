import * as React from "react"

const Intro = ({ title, subtitle }) => {
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
            <p title={title} dangerouslySetInnerHTML={createHTML(title)} />
            <a
              className="buttonSpecial"
              title="hello@bishal.cc"
              href="mailto:hello@bishal.cc"
            >
              Hire: hello@bishal.cc
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
