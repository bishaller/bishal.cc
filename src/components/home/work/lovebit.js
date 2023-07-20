import * as React from "react"
import HoverText from "./hoverbase"
import { motion } from "framer-motion"
import BottomRightImage from "../../../images/hover/lovebitBottomRight.webp"


const BottomRight = {
  position: "absolute",
  width: "auto",
  right: "0",
  top: "0",
  bottom: "0",
  height: "100%",
}

const WorkLovebit = () => {
  return (
    <HoverText
      title={`Lovebit`}
      description={`Ideation. Product Design.`}
      linkColor={`var(--brand)`}
      bgColor={`#8EDC97`}
      link={`/lovebit/`}
    >
      <motion.img
        key={BottomRightImage}
        src={BottomRightImage}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.25, delay: 0, ease: "easeOut" }}
        exit={{ x: 100, opacity: 0 }}
        style={BottomRight}
      />
    </HoverText>
  )
}

export default WorkLovebit
