import * as React from "react"
import HoverText from "./hoverbase"
import { motion } from "framer-motion"
import RightImage from "../../../images/hover/twinsRight.webp"
import BottomLeftImage from "../../../images/hover/twinsBottomLeft.webp"

const Right = {
  position: "absolute",
  width: "32%",
  right: "0",
  top: "50%",
  bottom: "auto",
  height: "auto",
  boxShadow: "0 30px 70px 0 rgba(0,0,0,.3)",
}

const BottomLeft = {
  position: "absolute",
  width: "24%",
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
      link={`/twinsuk/`}
    >
      <motion.img
        key={BottomLeftImage}
        src={BottomLeftImage}
        initial={{ x: -100, y: 100, opacity: 0 }}
        animate={{ x: "0", y: "0", opacity: 1 }}
        // transition={{ duration: 0.25, delay: 0, ease: "easeOut" }}
        transition={{
          type: "spring",
          damping: 8,
          stiffness: 70,
          restDelta: 0.005,
        }}
        exit={{ x: -20, y: 20, opacity: 0 }}
        style={BottomLeft}
      />
      <motion.img
        key={RightImage}
        src={RightImage}
        initial={{ x: 100, y: "-50%", opacity: 0 }}
        animate={{ x: "0", y: "-50%", opacity: 1 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.005,
        }}
        exit={{ x: 100, opacity: 0 }}
        style={Right}
      />
    </HoverText>
  )
}
export default WorkTwinsuk
