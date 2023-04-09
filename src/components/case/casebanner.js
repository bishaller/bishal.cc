import * as React from "react"

const Casebanner = ({ title, titleContent }) => {
  function createHTML(props) {
    return { __html: props }
  }

  return (
    <section className="caseBanner">
      <div className="siteContainer">
        <h1
          title={title}
          className="caseBanner__title"
          dangerouslySetInnerHTML={createHTML(titleContent)}
        />
      </div>
    </section>
  )
}

export default Casebanner
