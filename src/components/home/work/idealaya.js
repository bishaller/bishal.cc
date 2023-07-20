import * as React from "react"
import HoverText from "./hoverbase"
import { motion } from "framer-motion"
import BottomRightImage from "../../../images/hover/idealayaBottomRight.webp"
import BackgroundImage from "../../../images/hover/idealayaBackground.webp"

const BottomRight = {
  position: "absolute",
  width: "24.5%",
  right: "0",
  bottom: "0",
  height: "auto",
}

const Background = {
  position: "absolute",
  width: "100%",
  right: "0",
  left: "0",
  bottom: "0",
  height: "auto",
}


const WorkIdealaya = () => {
  return (
    <HoverText
      title={`Idealaya`}
      description={`Strategy. UX Design. Development.`}
      linkColor={`var(--brand)`}
      bgColor={`#FFC4C3`}
      link={`/idealaya/`}
    >
      <motion.img
        key={BottomRightImage}
        src={BottomRightImage}
        initial={{ x: -20, y: 20, opacity: 0 }}
        animate={{ x: "0", y: "0", opacity: 1 }}
        transition={{ duration: 0.25, delay: 0, ease: "easeOut" }}
        exit={{ x: -20, y: 20, opacity: 0 }}
        style={BottomRight}
      />
      <motion.img
      key={BackgroundImage}
      src={BackgroundImage}
      initial={{ x: -20, y: 20, opacity: 0 }}
      animate={{ x: "0", y: "0", opacity: 1 }}
      transition={{ duration: 0.25, delay: 0, ease: "easeOut" }}
      exit={{ x: -20, y: 20, opacity: 0 }}
      style={Background}
    />
    </HoverText>
  )
}
export default WorkIdealaya