import * as React from "react"
// import Chipleti from "../chipleti"
import styled from "styled-components"

const Hover = styled.section``

const HoverTitle = styled.h2`
  font-family: var(--serif);
  font-size: clamp(3rem, 11vw, 5rem);
  font-weight: 400;
  letter-spacing: -3px;
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
`

const HoverSubTitle = styled.span`
  font-family: var(--sans);
  font-weight: 400;
  font-size: clamp(0.75rem, 3vw, 0.875rem);
  letter-spacing: 0;
  margin-right: -3px;
  opacity: 0;
`

const WorkDWT = () => {
  return (
    <Hover>
      <div className="siteContainer siteContainer--small">
        <HoverTitle>
          <span>Discovery World</span>
          <HoverSubTitle>UX Design. Product Head. FrontEnd.</HoverSubTitle>
        </HoverTitle>
      </div>
      {/* <Chipleti /> */}
    </Hover>
  )
}

export default WorkDWT
