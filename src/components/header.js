import * as React from "react"
import { styled } from "styled-components"
import Plane from "./parts/accentPlane"
import { motion } from "framer-motion"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const SiteHeader = styled.header`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;
  width: 100%;

  @media screen and(max-width: 640px) {
    position: absolute;
  }
`

const NavWrap = styled.nav`
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

const HeaderLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
const HeaderLinkItem = styled.li`
  line-height: 1;
  
  a {
    text-decoration: none;
    color: var(--dark);
    font-size: clamp(1rem, 2vw, 1.25rem);
    letter-spacing: -.5px;
    transition: ease all .25s;
    position: relative;
    z-index: 1;
    border-bottom: 1px solid transparent;

    &:hover,
    &:active,
    &:focus {
      transition: ease all .25s;
      color: var(--dark);
      border-bottom: 1px solid var(--dark);
    }
  }

  a.transparent {
    border-bottom: 1px solid var(--dark);
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
    <SiteHeader>
      <div className="siteContainer">
        <NavWrap>
          <HeaderLinks>
            <HeaderLinkItem>
              <AniLink
                cover
                direction="left"
                bg="var(--brand)"
                duration={1}
                to={`/`}
                key={`/`}
                title={`Go to Home Page`}
                activeClass="transparent"
              >
                Index
              </AniLink>
              {","}&nbsp;&nbsp;
            </HeaderLinkItem>
            <HeaderLinkItem>
              <AniLink
                cover
                direction="right"
                bg="var(--brand)"
                duration={1}
                to={`/about/`}
                key={`/about/`}
                title={`Know more about Bishal`}
              >
                About
              </AniLink>
              {","}&nbsp;&nbsp;
            </HeaderLinkItem>

            <HeaderLinkItem>
              <a
                title="Connect on Linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/bishaller/"
              >
                Linkedin
              </a>
            </HeaderLinkItem>
          </HeaderLinks>
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
        </NavWrap>
      </div>
    </SiteHeader>
  )
}
export default Header
