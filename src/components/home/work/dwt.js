import * as React from "react"
import HoverText from "./hoverbase"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import RandomImage from "../../../images/hover/dwt-right-bottom.webp"

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
      <motion.div
        initial={{ x: -50, y: -50, opacity: 0 }}
        animate={{ x: "0", y: "0", opacity: 1 }}
        transition={{ duration: 0.25, delay: 0, ease: "easeOut" }}
      >
        <StaticImage
          src={"../../../images/hover/dwt-left-top.webp"}
          alt="Mountain"
          width={10000}
          style={LeftImage}
        />
      </motion.div>
      <motion.img
        key={RandomImage}
        src={RandomImage}
        initial={{ y: 25, rotate: -10, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        tranistion={{
          duration: 0.6,
          delay: 0.2,
        }}
        exit={{ opacity: 0 }}
        style={RightImage}
      />
    </HoverText>
  )
}
export default WorkDWT
