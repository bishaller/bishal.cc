import * as React from "react"
import HoverText from "./hoverbase"
import { motion } from "framer-motion"
import BottomRightImage from "../../../images/hover/idealayaBottomRight.webp"
import BackgroundImage from "../../../images/hover/idealayaBackground.webp"

const BottomRight = {
  position: "absolute",
  width: "44.5%",
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
        key={BackgroundImage}
        src={BackgroundImage}
        initial={{ x: 0, y: 200, opacity: 0}}
        animate={{ x: "0", y: "0", opacity: 0.05 }}
        transition={{
          type: "spring",
          damping: 18,
          stiffness: 70,
          restDelta: 0.005,
        }}
        exit={{ x: -20, y: 20, opacity: 0 }}
        style={Background}
      />
      <motion.img
        key={BottomRightImage}
        src={BottomRightImage}
        initial={{ x: 100, y: 100, opacity: 0, scale: 1.5 }}
        animate={{ x: "0", y: "0", opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.005,
        }}
        exit={{ x: -20, y: 20, opacity: 0 }}
        style={BottomRight}
      />
    </HoverText>
  )
}
export default WorkIdealaya
