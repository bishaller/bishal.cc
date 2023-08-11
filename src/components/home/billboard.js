import * as React from "react"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import gsap from "gsap"
import { useEffect } from "react"
import headerGradient from "../../images/oval.svg"
import { motion } from "framer-motion"
import styled from "styled-components"
import FlyingPlane from "../Header/Plane"

// import { AnchorLink } from "gatsby-plugin-anchor-links"

const StyledBillboard = styled.section`
  padding: 17vw 0 12vw;
  --wt: 400;
  --fsz: clamp(3rem, 20.8vw, 20rem);
  --lh: 0.8;
  --font: var(--wt) var(--fsz) / var(--lh) var(--sans);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media screen and (max-width: 1280px) {
    padding: 24vw 0 18vw;
  }

  @media screen and (max-width: 640px) {
    padding: 50vw 0 40vw;
  }
`

const BillboardGradient = styled.span`
  user-select: none;
  pointer-events: none;
  position: absolute;
  display: block;
  left: -65%;
  width: 100vw;
  top: -165%;
  height: auto;
  filter: blur(100px) saturate(1.2);
  animation: rotate 6s linear infinite;
  transition: transform ease;
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  transition: linear all 0.3s;
  image-rendering: -webkit-optimize-contrast;
  z-index: 0;

  @media screen and (max-width: 1280px) {
    left: -60%;
    width: 105vw;
    top: -115%;
  }
  @media screen and (max-width: 768px) {
    left: -70%;
    width: 110vw;
    top: -100%;
  }

  @media screen and (max-width: 640px) {
    width: 120vw;
    top: -60%;
  }
`

const BillboardMouse = styled.div`
  width: 28px;
  height: 28px;
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid var(--dark);
  border-radius: 50%;
  pointer-events: none;
  transition: ease;
  opacity: 0.75;
  z-index: -1;

  @media screen and (max-width:640px) {
    display: none;
  }
`

const Billboard = () => {
  useEffect(() => {
    gsap.set(".billBoard__mouse", { xPercent: -50, yPercent: -50 })
    let ball = document.querySelector(".billBoard__mouse")
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const mouse = { x: pos.x, y: pos.y }
    const speed = 0.1

    const xSet = gsap.quickSetter(ball, "x", "px")
    const ySet = gsap.quickSetter(ball, "y", "px")

    window.addEventListener("mousemove", e => {
      mouse.x = e.x
      mouse.y = e.y
    })

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio())

      pos.x += (mouse.x - pos.x) * dt
      pos.y += (mouse.y - pos.y) * dt
      xSet(pos.x)
      ySet(pos.y)
    })
  }, [])

  return (
    <StyledBillboard>
      <FlyingPlane />
      <div className="siteContainer siteContainer--billboard">
        <div className="billboard__inner">
          <h1 className="billboard__title">
            I design
            <motion.div
              className="billboard__circle"
              initial={{}}
              animate={{rotate: 360}}
              transition={{
                duration: 6,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0
              }}
            >
              <strong>
                {" "}
                <svg viewBox="0 0 139.85 139.85">
                  <use xlinkHref="#circularText"></use>
                </svg>
                <span className="screen-reader-text">Experiences</span>
              </strong>
            </motion.div>
          </h1>
        </div>
        <div className="billboard__intro">
          <div className="billboard__bio">
            <div className="billboard__description">
              <p>
                A Product Designer who turns complex problem sets into simple
                solutions.
              </p>
            </div>
            {/* <AnchorLink duration="600" to="/#work" title="my work" className="buttonSpecial buttonSpecial--down">
              View my Work
              <span>
                <svg className="icon icon-arrow">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
              </span>
              <span className="buttonSpecial__underline">
                <svg className="button-stroke" viewBox="0 0 186 13">
                  <use xlinkHref="#button-line"></use>
                </svg>
                <svg className="button-stroke" viewBox="0 0 196 13">
                  <use xlinkHref="#button-line"></use>
                </svg>
              </span>
            </AnchorLink> */}
            {/* <AniLink
              cover
              direction="left"
              bg="var(--c-brandHome)"
              duration={1.25}
              to={`/about/`}
              key={`/about/`}
              title={`go to about page`}
              className="buttonSpecial"
            >
              About Me
              <span>
                <svg className="icon icon-arrow">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
              </span>
              <span className="buttonSpecial__underline">
                <svg className="button-stroke" viewBox="0 0 186 13">
                  <use xlinkHref="#button-line"></use>
                </svg>
                <svg className="button-stroke" viewBox="0 0 196 13">
                  <use xlinkHref="#button-line"></use>
                </svg>
              </span>
            </AniLink> */}
          </div>
        </div>
      </div>
      <BillboardGradient>
        <img src={headerGradient} alt="Moving background gradient" />
      </BillboardGradient>
      <BillboardMouse className="billBoard__mouse"></BillboardMouse>
    </StyledBillboard>
  )
}

export default Billboard;
