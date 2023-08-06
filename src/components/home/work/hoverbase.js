import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  Hover,
  HoverTitle,
  HoverTitleInner,
  HoverSubTitle,
  HoverContent,
  HoverArrow,
} from "./hover.style"

const workLink = {
  display: "inline-block",


  "&:hover, &:focus,  &:active": {
    backgroundColor: "transparent !important",

    "&::selection": {
      backgroundColor: "white !important",
    }
  },

  "h2, h2 span": {
    "&:hover, &:focus, &:active": {
      backgroundColor: "transparent",
    }
  }
}

const HoverText = ({
  title,
  description,
  bgColor,
  link,
  linkColor,
  children,
  direction,
}) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  function createHTML(props) {
    return { __html: props }
  }

  return (
    <Hover>
      <div className="siteContainer siteContainer--small">
        <AniLink
          cover
          direction={direction}
          bg={linkColor}
          duration={1}
          style={workLink}
          to={link}
          key={link}
          title={`see case study for ${title}`}
        >
          <HoverTitle onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <HoverArrow
              className={isHovering ? "hover" : ""}
              viewBox="0 0 121 48"
            >
              <use xlinkHref="#workArrow"></use>
            </HoverArrow>
            <HoverTitleInner>
              <span
                dangerouslySetInnerHTML={createHTML(title)}
                title={title}
                className={isHovering ? "hover" : ""}
              />
              <HoverSubTitle
                dangerouslySetInnerHTML={createHTML(description)}
                className={isHovering ? "hoverSub" : ""}
              ></HoverSubTitle>
            </HoverTitleInner>
          </HoverTitle>
        </AniLink>
      </div>
      {/* For Debugging */}
      {/* <HoverContent
        style={{ backgroundColor: `${bgColor}` }}
        className={isHovering ? "hover" : ""}
      >
        <AnimatePresence>{children}</AnimatePresence>
      </HoverContent> */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ duration: 0.3, opacity: 0 }}
            transition={{ duration: 0.35, delay: "0", ease: "easeOut" }}
          >
            <HoverContent
              style={{ backgroundColor: `${bgColor}` }}
              className={isHovering ? "hover" : ""}
            >
              <AnimatePresence>{children}</AnimatePresence>
            </HoverContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Hover>
  )
}
export default HoverText
