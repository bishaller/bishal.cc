import * as React from "react"
import HoverText from "./hoverbase"
import { motion } from "framer-motion"
import BottomRightImage from "../../../images/hover/rubbermaidBottomRight.webp"
import BottomLeftImage from "../../../images/hover/rubbermaidBottomLeft.svg"
import styled from "styled-components"

const BottomRight = styled(motion.img)`
  position: absolute;
  width: 80vw;
  right: -25vw;
  bottom: -20vw;
  height: auto;
  filter: drop-shadow(0 -20px 60px rgba(0,0,0,0.2));

  @media screen and (max-width: 1200px) {
    width: 100vw;
    right: -30vw;
    bottom: -30vw;
  }
`

const BottomLeft = styled(motion.img)`
  position: absolute;
  width: 40vw;
  left: 0;
  top: -4vw;
  height: 26%;

  @media screen and (max-width: 1200px) {
    width: 80vw;
  }
`

// const BottomLeft = {
//   position: "absolute",
//   width: "50%",
//   left: "0",
//   top: "0",
//   height: "40%",
// }


const WorkRubbermaid = () => {

  return (
    <HoverText
      title={`Rubbermaid`}
      description={`Ideation. Product Design.`}
      linkColor={`var(--brand)`}
      bgColor={`#FF9FAD`}
      link={`/rubbermaid/`}
    >
      <BottomRight
        key={BottomRightImage}
        src={BottomRightImage}
        initial={{ x: 200, y: 200, rotate: -30, opacity: 0 }}
        animate={{ x: "0", y: "0", rotate: -30, opacity: 1 }}
        exit={{ x: 200, y: 200, rotate: 30, opacity: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.005
        }}
      />
      <BottomLeft
        key={BottomLeftImage}
        src={BottomLeftImage}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        exit={{ x: -200, y: -200, opacity: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.005
        }}
      />
    </HoverText>
  )
}

export default WorkRubbermaid
