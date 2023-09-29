import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import AnimatedSection from "./../../AnimatedSection"

// import Chipleti from "../chipleti"
import styled from "styled-components"
import {
  WorkDWT,
  WorkTraqit,
  WorkIdealaya,
  WorkTwinsuk,
  WorkRubbermaid,
  WorkLovebit,
} from "./workhoverindex"

const childVariants = {
  hidden: {
    y: "100px",
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 30,
      restDelta: 0.005,
    }
  }
};

const Work = styled.section`
  position: relative;
  z-index: 9;

  &::before, &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 15%;
    left: 0;
    z-index: -1;
  }
  
  &::before {
    top: 0;
    background: linear-gradient(to bottom, rgba(255,255,255,.9) 0%, rgba(255,255,255,0) 100%);
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, rgba(255,255,255,.9) 0%, rgba(255,255,255,0) 100%);
  }
`

const WorkTitle = styled.h2`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px 10px 0px 30px;
  margin-bottom: clamp(30px, 4vw, 45px);
  margin-top: clamp(3rem, 11vw, 11rem);
  position: relative;
  z-index: 1;
  border-radius: 100px;
  background: var(--white);
  margin-left: -18px;
`

const workIcon = {
  maxWidth: "55px",
}

const WorkInner = styled.div`
  padding-bottom: clamp(3rem, 11vw, 11rem);
  position: relative;
`

const WorkBG = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  opacity: .8;
  z-index: -2;
  background-image: url("data:image/svg+xml,%0A%3Csvg height='34' viewBox='0 0 34 34' width='34' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E11414' fill-rule='evenodd'%3E%3Cpath d='m0 0h34v34h-34z' opacity='0'/%3E%3Ccircle cx='1.5' cy='1.5' r='1.5'/%3E%3C/g%3E%3C/svg%3E");
`

const WorkHover = () => {

  return (
    <AnimatedSection>
      <Work>
        <motion.span variants={childVariants}>
          <WorkBG />
        </motion.span>
        <WorkInner>
          <div className="siteContainer siteContainer--medium">
            <div className="siteContainer siteContainer--small">
              <motion.span variants={childVariants}>
                <WorkTitle>
                  work
                  <StaticImage
                    src="../../../images/love.webp"
                    alt="workImage"
                    width={400}
                    height={400}
                    style={workIcon}
                  />
                </WorkTitle>
              </motion.span>
            </div>
            <WorkTraqit />
            <WorkDWT />
            <WorkTwinsuk />
            <WorkLovebit />
            <WorkRubbermaid />
            <WorkIdealaya />
          </div>
        </WorkInner>
      </Work>
    </AnimatedSection>
  )
}

export default WorkHover