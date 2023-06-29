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

const WorkIdealaya = () => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
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
            <HoverArrow className={isHovering ? "hover" : ""} viewBox="0 0 121 48">
              <use xlinkHref="#workArrow"></use>
            </HoverArrow>
            <HoverTitleInner>
              <span className={isHovering ? "hover" : ""}>Idealaya</span>
              <HoverSubTitle className={isHovering ? "hover" : ""}>
                UX Design. Product Head. FrontEnd.
              </HoverSubTitle>
            </HoverTitleInner>
          </HoverTitle>
        </AniLink>
      </div>
      {isHovering && 
        <HoverContent className={isHovering ? "hover" : ""}>
        </HoverContent>
      }
    </Hover>
  )
}

export default WorkIdealaya
