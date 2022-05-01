import * as React from "react"

const Billboard = ({ title, description, linkData }) => {
  function createHTML(props) {
    return { __html: props }
  }
  return (
    <section className="billboard">
      <div className="siteContainer siteContainer--billboard">
        <div className="billboard__inner">
          <h1
            className="billboard__title"
            title={title}
            dangerouslySetInnerHTML={createHTML(title)}
          />
        </div>
        <div className="billboard__intro">
          <div className="billboard__bio">
            <div
              className="billboard__description"
              dangerouslySetInnerHTML={createHTML(description)}
            />
            <a
              className="buttonSpecial buttonSpecial--alt"
              title="hello@bishal.cc"
              href="mailto:hello@bishal.cc"
            >
              hello@bishal.cc
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Billboard
