import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FadeIn from "./fadeIn"
import {
  Hover,
  HoverTitle,
  HoverTitleInner,
  HoverSubTitle,
  HoverContent,
  HoverArrow,
} from "./hover.style"

const HoverText = ({ title, description, bgColor, link, linkColor, children, direction}) => {
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
          className="workLInk"
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
                className={isHovering ? "hover" : ""}
              ></HoverSubTitle>
            </HoverTitleInner>
          </HoverTitle>
        </AniLink>
      </div>
      {isHovering && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0, ease: "easeOut" }}
        >
          <FadeIn>
            <HoverContent style={{ backgroundColor: `${bgColor}` }} className={isHovering ? "hover" : ""}>
              {children}
            </HoverContent>
          </FadeIn>
        </motion.div>
      )}
    </Hover>
  )
}
export default HoverText
