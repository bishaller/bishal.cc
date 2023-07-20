import * as React from "react"
import HoverText from "./hoverbase"
import { motion } from "framer-motion"
import RightImage from "../../../images/hover/traqitRight.webp"
import BottomLeftImage from "../../../images/hover/traqitBottomLeft.webp"

const Right = {
  position: "absolute",
  width: "auto",
  right: "0",
  top: "0",
  bottom: "0",
  height: "100%",
}

const BottomLeft = {
  position: "absolute",
  width: "24.5%",
  left: "0",
  bottom: "0",
  height: "auto",
}

const WorkTwinsuk = () => {
  return (
    <HoverText
      title={`TwinsUK`}
      description={`Information Architecture. UX & Web Design`}
      linkColor={`var(--brand)`}
      bgColor={`#663C6C`}
      link={`/travel-max/`}
    >
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
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.25, delay: 0, ease: "easeOut" }}
        exit={{ x: 100, opacity: 0 }}
        style={Right}
      />
    </HoverText>
  )
}
export default WorkTwinsuk
