import * as React from "react"
import HoverText from "./hoverbase"
import { motion } from "framer-motion"
import BottomRightImage from "../../../images/hover/lovebitBottomRight.webp"

const BottomRight = {
  position: "absolute",
  width: "39%",
  right: "0",
  bottom: "0",
  height: "auto",
}

const WorkLovebit = () => {
  return (
    <HoverText
      title={`Lovebit`}
      description={`Ideation. Product Design.`}
      linkColor={`var(--brand)`}
      bgColor={`#FFA648`}
      link={`/lovebit/`}
    >
      <motion.img
        key={BottomRightImage}
        src={BottomRightImage}
        initial={{ x: 150, y: 30, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        // transition={{ duration: 0.25, delay: 0, ease: "easeOut" }}
        transition={{
          type: "spring",
          damping: 18,
          stiffness: 70,
          restDelta: 0.005,
          duration: 0.4,
        }}
        exit={{ x: 100, opacity: 0 }}
        style={BottomRight}
      />
    </HoverText>
  )
}

export default WorkLovebit
