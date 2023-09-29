import * as React from "react"
import HoverText from "./hoverbase"

const WorkCashCrate = () => {
  return (
    <HoverText
      title={`Cash Crate`}
      description={`UX Design.`}
      linkColor={`var(--brand)`}
      bgColor={`#eab308`}
      link={`/dwt/`}
    >
      <span>Something</span>
    </HoverText>
  )
}

export default WorkCashCrate