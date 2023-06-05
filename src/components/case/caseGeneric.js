import * as React from "react"

const CaseGeneric = ({ title, titleContent }) => {
  function createHTML(props) {
    return { __html: props }
  }

  return (
    <section className="caseBanner">
      <div className="siteContainer">
        <h2
          title={title}
          className="caseBanner__title"
          dangerouslySetInnerHTML={createHTML(titleContent)}
        />
      </div>
    </section>
  )
}

export default CaseGeneric
