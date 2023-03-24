import * as React from "react"
import Dwt from "./dwt"
import Traqit from "./traqit"
import Trekkersparadise from "./trekkersparadise"
import LastDoor from "./lastdoor"
import Rubbermaid from "./rubbermaid"

const WorkPreview = () => {
  return (
    <section className="work" id="work">
      <div className="siteContainer siteContainer--medium">
        <h2 className="work__title">work</h2>
      </div>
      <Dwt/>
      <Rubbermaid/>
      <Traqit/>
      <LastDoor/>
      <Trekkersparadise/>
    </section>
  )
}

export default WorkPreview
