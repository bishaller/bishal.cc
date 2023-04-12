import * as React from "react"
import Casebanner from "../../components/case/casebanner"


const DWTCase = () => {
  return (
    <div>
      <Casebanner />
      <section className="case__banner">
        <div className="siteContainer">
          <h1 className="case__title">
            redefining <span>🌏</span> travel experience for three distinct{" "}
            <span>👩‍💻🕵️🧙‍♂️</span> users
          </h1>
        </div>
      </section>
      <section className="case__titleBar">
        <div className="siteContainer">
          </div>
      </section>
    </div>
  )
}

export default DWTCase
