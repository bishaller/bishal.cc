import * as React from "react"
import HoverText from "./hoverbase"

const TestWork = () => {


  return (
    <HoverText
      title={`Test Work`}
      description={`Test Work`}
      linkColor={`var(--brand)`}
      bgColor={`black`}
      link={`/dwt/`}
    >
      <h1>something</h1>
    </HoverText>
  )
}

export default TestWork
