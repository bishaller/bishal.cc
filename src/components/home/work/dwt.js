import * as React from "react"
import { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import {
  Hover,
  HoverTitle,
  HoverTitleInner,
  HoverSubTitle,
  HoverContent,
  HoverArrow,
} from "./hover.style"

const WorkDWT = () => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  const SVGStyle = {
    width: isHovering ? "121px" : "0",
    height: isHovering ? "48px" : "48px",
  }

  const TextStyle = {
    opacity: isHovering ? "1" : "0",
  }

  // const BGStyle = {
  //   opacity: isHovering ? "1" : "0",
  //   visibility: isHovering ? "visibile" : "hidden",
  //   height: isHovering ? "100vh" : "0",
  //   transition: isHovering ? "ease all 2s" : "ease all 4s",
  // }

  const colorStyle = {
    color: isHovering ? "var(--brand)" : "var(--dark)",
  }

  return (
    <Hover>
      <div className="siteContainer siteContainer--small">
        <AniLink
          cover
          direction="left"
          bg="var(--brand)"
          duration={1.25}
          className="workLInk"
          to={`/dwt/`}
          key={`/dwt/`}
          title={`go to DWT Page`}
        >
          <HoverTitle onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <HoverArrow style={SVGStyle} className="" viewBox="0 0 121 48">
              <use xlinkHref="#workArrow"></use>
            </HoverArrow>
            <HoverTitleInner>
              <span style={colorStyle}>Discovery World</span>
              <HoverSubTitle style={TextStyle}>
                UX Design. Product Head. FrontEnd.
              </HoverSubTitle>
            </HoverTitleInner>
          </HoverTitle>
        </AniLink>
      </div>
      {isHovering && 
        <HoverContent className={isHovering ? "hover" : ""}>
          <h2>Only visible when hovering div</h2>
        </HoverContent>
      }
    </Hover>
  )
}

export default WorkDWT
