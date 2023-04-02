import * as React from "react"
import Dwt from "./dwt"
import Traqit from "./traqit"
import Trekkersparadise from "./trekkersparadise"
import Lovebit from "./lovebit"
import LastDoor from "./lastdoor"
import Rubbermaid from "./rubbermaid"
import Chipleti from "../chipleti"

const WorkPreview = () => {
  return (
    <section className="work">
      <div className="siteContainer siteContainer--medium">
        <h2 id="work" className="work__title">work</h2>
      </div>
      <Dwt/>
      <Traqit/>
      <Lovebit/>
      <Trekkersparadise/>
      <Rubbermaid/>
      <Chipleti/>
      <LastDoor/>
    </section>
  )
}

export default WorkPreview
