import * as React from "react"
import HoverText from "./hoverbase"
import { motion } from "framer-motion"
import TopLeftImage from"../../../images/hover/traqitTopLeft.webp"
import BottomLeftImage from"../../../images/hover/traqitBottomLeft.webp"
import RightImage from"../../../images/hover/traqitRight.webp"

const TopLeft = {
  position: "absolute",
  width: "22%",
  left: "0",
  top: "0",
  height: "auto",
}

const BottomLeft = {
  position: "absolute",
  width: "24.5%",
  left: "0",
  bottom: "0",
  height: "auto",
}

const Right = {
  position: "absolute",
  width: "auto",
  right: "0",
  top: "0",
  bottom: "0",
  height: "100%",
}

const WorkTraqit = () => {
  return (
    <HoverText
      title={`Traqit`}
      description={`Strategy. UX Design.  FrontEnd.`}
      linkColor={`var(--brand)`}
      bgColor={`#EBEDF0`}
      link={`/dwt/`}
    >
      <motion.img
        key={TopLeftImage}
        src={TopLeftImage}
        initial={{ x: -20, y: -20, opacity: 0 }}
        animate={{ x: "0", y: "0", opacity: 1 }}
        transition={{ duration: 0.25, delay: 0, ease: "easeOut" }}
        exit={{x: -20, y: -20, opacity: 0 }}
        style={TopLeft}
      />
      <motion.img
        key={BottomLeftImage}
        src={BottomLeftImage}
        initial={{ x: -20, y: 20, opacity: 0 }}
        animate={{ x: "0", y: "0", opacity: 1 }}
        transition={{ duration: 0.25, delay: 0, ease: "easeOut" }}
        exit={{ x: -20, y: 20, opacity: 0 }}
        style={BottomLeft}
      />
      <motion.img
        key={RightImage}
        src={RightImage}
        initial={{ x: 100,  opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.25, delay: 0, ease: "easeOut" }}
        exit={{ x: 100,  opacity: 0 }}
        style={Right}
      />
    </HoverText>
  )
}
export default WorkTraqit