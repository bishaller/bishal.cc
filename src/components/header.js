import * as React from "react"
import { styled } from "styled-components"
import Plane from "./parts/accentPlane"
// import { useState } from "react"
import { motion } from "framer-motion"

// import AniLink from "gatsby-plugin-transition-link/AniLink";

const HeaderButton = styled.a`
  .icon {
    width: clamp(5rem, 7.5vw, 7.5rem);
    height: clamp(4rem, 6.5vw, 6.56rem);
    display: block;
  }
`

const HeaderButtonText = styled.span`
  display: block;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  line-height: 1.2;
  transform: rotate(-12.5deg);
  margin-bottom: -13%;
  text-align: right;
  margin-right: 6%;
  color: var(--dark);
`

const text = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { type: "spring", stiffness: 300, damping: 24 }
}

const scale = {
  initial: { scale: 1 },
  animate: { scale: 1.05, x: 10, y: -4 },
  tap: { scale: 0.9 },
}

const Header = () => {
  return (
    <header className="siteHeader">
      <nav className="siteContainer">
        <ul>
          <li>
            <HeaderButton title="hello@bishal.cc" href="mailto:hello@bishal.cc">
              <motion.div
                variants={scale}
                initial="initial"
                whileHover="animate"
                whileTap="tap"
                transition={{ type: "spring", stiffness: 200, damping: 13 }}
              >
                <motion.span variants={text}>
                  <HeaderButtonText>hello@bishal.cc</HeaderButtonText>
                </motion.span>

                <span className="icon">
                  <Plane />
                </span>
              </motion.div>
            </HeaderButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
