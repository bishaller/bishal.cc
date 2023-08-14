import * as React from "react"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import gsap from "gsap"
import { useEffect } from "react"
import headerGradient from "../../images/oval.svg"
import { motion } from "framer-motion"
import styled from "styled-components"
import FlyingPlane from "../Header/Plane"

// import { AnchorLink } from "gatsby-plugin-anchor-links"

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.5,
    },
  },
};

const StyledBillboard = styled.section`
  padding: 15vw 0 11vw;
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

const BillboardGradient = styled.div`
  user-select: none;
  pointer-events: none;
  position: absolute;
  display: block;
  left: -65%;
  width: 100vw;
  top: -165%;
  height: auto;
  filter: blur(100px) saturate(1.2);
  // transition: linear all .3s;
  // animation: rotate 6s linear infinite;
  // transition: transform ease;
  // -webkit-backface-visibility: hidden;
  // -webkit-transform-style: preserve-3d;
  // transition: linear all 0.3s;
  // image-rendering: -webkit-optimize-contrast;
  z-index: -999;

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


const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter) => (
      <motion.span
        className='row-letter'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

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
            <motion.div variants={banner}>
              <BannerRowTop title={"I\u00A0design"} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y:100}}
              animate={{ opacity: 1, y:0}}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 75,
                restDelta: 0.005,
                delay: 2,
              }}>

              <strong>
                <motion.div
                  className="billboard__circle"
                  initial={{}}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 0
                  }}
                >
                  {" "}
                  <svg viewBox="0 0 139.85 139.85">
                    <use xlinkHref="#circularText"></use>
                  </svg>
                  <span className="screen-reader-text">Experiences</span>
                </motion.div>
              </strong>
            </motion.div>
          </h1>
        </div>
        <div className="billboard__intro">
          <div className="billboard__bio">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 1.4,
              }}>
              <div className="billboard__description">
                <p>
                  A Product Designer who turns complex problem sets into simple
                  solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1.2,
        }}>
        <BillboardGradient>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0
            }}
          >
            <img src={headerGradient} alt="Moving background gradient" />
          </motion.div>
        </BillboardGradient>
      </motion.div>
      <BillboardMouse className="billBoard__mouse"></BillboardMouse>
    </StyledBillboard>
  )
}


export default Billboard;