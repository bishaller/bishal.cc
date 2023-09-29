import * as React from "react"
import HoverText from "./hoverbase"

const WorkTrekkersParadise = () => {
  return (
    <HoverText
      title={`Trekkers Paradise`}
      description={`Web Design. WordPress Dev.`}
      linkColor={`var(--brand)`}
      bgColor={`blue`}
      link={`/dwt/`}
    >
      <span>Something</span>
    </HoverText>
  )
}
export default WorkTrekkersParadise