import * as React from "react"
// import Chipleti from "../chipleti"
import styled from "styled-components"
import WorkDWT from "./dwt"
import WorkTraqit from "./traqit"
import WorkIdealaya from "./idealaya"
import WorkTwinsuk from "./twinsuk"
import WorkRubbermaid from "./rubbermaid"
import WorkTrekkersParadise from "./trekkersparadise"
import WorkLovebit from "./lovebit"
import TestWork from "./testwork"

const Work = styled.section`
  position: relative;
  z-index: 9;
`

const WorkInner = styled.div`
  // position: relative;
`

const WorkBG = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  z-index: 1;
  background-image: url("data:image/svg+xml,%0A%3Csvg height='34' viewBox='0 0 34 34' width='34' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff0200' fill-rule='evenodd'%3E%3Cpath d='m0 0h34v34h-34z' opacity='0'/%3E%3Ccircle cx='1.5' cy='1.5' r='1.5'/%3E%3C/g%3E%3C/svg%3E");
`

const WorkHover = () => {
  return (
    <Work className="work">
      <WorkBG />
      <WorkInner>
        <div className="siteContainer siteContainer--medium">
          <h2 id="work" className="work__title">
            work
          </h2>
          <TestWork />
          <WorkDWT />
          <WorkTraqit />
          <WorkIdealaya />
          <WorkTwinsuk />
          <WorkTrekkersParadise />
          <WorkRubbermaid />
          <WorkLovebit />
        </div>
        {/* <Chipleti /> */}
      </WorkInner>
    </Work>
  )
}

export default WorkHover
