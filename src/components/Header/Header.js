import * as React from "react"
import { styled } from "styled-components"
import { motion } from "framer-motion";
// import Plane from "./Plane"
import HeaderNav from "./Nav"
import Plane from "../parts/accentPlane"

const SiteHeader = styled.header`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  width: 100%;

  @media screen and(max-width: 640px) {
    position: absolute;
  }
`

const SiteHeaderWrap = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 30px;
`


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
   initial: { opacity: 0},
   animate: { opacity: 1},
   transition: { type: "spring", stiffness: 300, damping: 24 },
  }

const scale = {
   initial: { scale: 1 },
   animate: { scale: 1.05, x: 10, y: -4 },
   tap: { scale: 0.9 },
}

const Header = () => {
  return (
    <SiteHeader>
      <div className="siteContainer">
        <SiteHeaderWrap>
          <HeaderNav />
          <HeaderButton title="hello@bishal.cc" href="mailto:hello@bishal.cc">
            <motion.div
              variants={scale}
              initial="initial"
              whileHover="animate"
              whileTap="tap"
              transition={{ type: "spring", stiffness: 200, damping: 13 }}
            >
              <motion.div variants={text}>
                <HeaderButtonText>hello@bishal.cc</HeaderButtonText>
              </motion.div>

              <span className="icon">
                <Plane />
              </span>
            </motion.div>
          </HeaderButton>
        </SiteHeaderWrap>
      </div>
    </SiteHeader>
  )
}
export default Header;
