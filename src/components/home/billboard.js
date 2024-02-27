import * as React from "react"
import headerGradient from "../../images/oval.svg"
import { motion } from "framer-motion"
import styled from "styled-components"
import FlyingPlane from "../Header/Plane"

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
  padding: 22vh 0 11vw;
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
    padding: 18vh 0 18vw;
  }

  @media screen and (max-width: 640px) {
    padding: 30vh 0 25vh;
  }
`

const BillboardGradient = styled.div`
  user-select: none;
  pointer-events: none;
  position: absolute;
  display: block;
  // left: -65%;
  left: 0;
  top: 0;
  width: 100vw;
  // top: -165%;
  transform: translate(-70%, -70%);
  height: auto;
  z-index: -999;

  div {
    filter: blur(100px) saturate(1.2);
    -webkit-filter: blur(100px) saturate(1.2);
  }

  // @media screen and (max-width: 1280px) {
  //   left: -60%;
  //   width: 105vw;
  //   top: -115%;
  // }
  // @media screen and (max-width: 768px) {
  //   left: -70%;
  //   width: 110vw;
  //   top: -100%;
  // }

  // @media screen and (max-width: 640px) {
  //   width: 120vw;
  //   top: -60%;
  // }
`

// const BillboardMouse = styled.div`
//   width: 28px;
//   height: 28px;
//   position: fixed;
//   top: 0;
//   left: 0;
//   border: 1px solid var(--dark);
//   border-radius: 50%;
//   pointer-events: none;
//   transition: ease;
//   opacity: 0.75;
//   z-index: -1;

//   @media screen and (max-width:640px) {
//     display: none;
//   }
// `


const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter, index) => (
      <motion.span
        key={index}
        className='row-letter'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className="banner-row">
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};


const Billboard = () => {

  return (
    <StyledBillboard>
      <FlyingPlane />
      <div className="siteContainer siteContainer--billboard">
        <div className="billboard__inner">
          <h1 className="billboard__title">
            <motion.span variants={banner}>
              <BannerRowTop title={"I\u00A0design"} />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 75,
                restDelta: 0.005,
                delay: 2.1,
              }}>

              <strong>
                <motion.span
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
                </motion.span>
              </strong>
            </motion.span>
          </h1>
        </div>
        <div className="billboard__intro">
          <div className="billboard__bio">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 8,
                stiffness: 30,
                restDelta: 0.005,
                delay: 1.8,
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
    </StyledBillboard>
  )
}


export default Billboard;