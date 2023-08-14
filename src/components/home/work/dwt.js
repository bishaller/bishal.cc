import * as React from "react"
import HoverText from "./hoverbase"
// import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import RightBottomImage from "../../../images/hover/dwtRightBottom.webp"
import LeftTopImage from "../../../images/hover/dwtLeftTop.webp"

const LeftImage = {
  position: "absolute",
  width: "38%",
  left: "0",
  top: "0",
  height: "auto",
}

const RightImage = {
  position: "absolute",
  width: "auto",
  maxWidth: "100%",
  right: "5%",
  bottom: "0",
  height: "auto",
  maxHeight: "80%",
}

const WorkDWT = () => {
  return (
    <HoverText
      title={`Discovery World`}
      description={`UX Design. Product Head. FrontEnd.`}
      linkColor={`var(--brand)`}
      bgColor={`var(--white)`}
      link={`/dwt/`}
    >
      <motion.img
        key={LeftTopImage}
        src={LeftTopImage}
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={{ x: "0", y: "0", opacity: 1 }}
        exit={{ x: -100, y: -100, opacity: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.005
        }}
        style={LeftImage}
      >
      </motion.img>
      <motion.img
        key={RightBottomImage}
        src={RightBottomImage}
        initial={{ x: 200, y: 200, rotate: -10, opacity: 0 }}
        animate={{ x: "0", y: "0", rotate: 0, opacity: 1 }}
        exit={{ x: 200, y: 200, rotate: -10, opacity: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.005
        }}
        
        style={RightImage}
      />
    </HoverText>
  )
}
export default WorkDWT
