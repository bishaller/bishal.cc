import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// import Chipleti from "../chipleti"
import styled from "styled-components"
import {
  WorkDWT,
  WorkTraqit,
  WorkIdealaya,
  WorkTwinsuk,
  WorkRubbermaid,
  WorkTrekkersParadise,
  WorkLovebit,
} from "./workhoverindex"

const Work = styled.section`
  position: relative;
  z-index: 9;
`

const WorkTitle = styled.h2`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  margin-bottom: clamp(30px, 4vw, 45px);
`

const workIcon = {
  maxWidth: "55px",
}

const WorkInner = styled.div`
padding-top: clamp(3rem, 11vw, 11rem);
padding-bottom: clamp(3rem, 11vw, 11rem);
`

const WorkBG = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: 1;
  background-image: url("data:image/svg+xml,%0A%3Csvg height='34' viewBox='0 0 34 34' width='34' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff0200' fill-rule='evenodd'%3E%3Cpath d='m0 0h34v34h-34z' opacity='0'/%3E%3Ccircle cx='1.5' cy='1.5' r='1.5'/%3E%3C/g%3E%3C/svg%3E");
`

const WorkHover = () => {
  return (
    <Work className="work">
      <WorkBG />
      <WorkInner>
        <div className="siteContainer siteContainer--medium">
          <div className="siteContainer siteContainer--small">
            <WorkTitle >
              work
              <StaticImage
                src="../../../images/love.webp"
                alt="workImage"
                width={400}
                height={400}
                style={workIcon}
              />
            </WorkTitle>
          </div>
          <WorkDWT />
          <WorkTraqit />
          <WorkTwinsuk />
          <WorkIdealaya />
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
