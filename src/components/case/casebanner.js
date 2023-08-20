import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const Banner = styled.div`
  padding-top: clamp(12rem, 17vw, 15rem);
  margin-bottom: clamp(5rem, 14vw, 14rem);
`

const BannerTitle = styled.h1`
  color: var(--dark);
  --wt: 400;
  --fsz: clamp(3.5rem, 9vw, 8.5rem);
  --lh: 0.84;
  --font: var(--wt) var(--fsz) / var(--lh) var(--serifLight);
  font: var(--font);
  text-align: left;
  letter-spacing: -.1vw;
  margin-bottom: 0;
  display: block;
  max-width: 50%;
  width: 100%;

  @media screen and (max-width: 640px) {
    letter-spacing: -3px;
  }
`

const BannerImage = {
  width: "100%",
}

const BannerIntroWrap = styled.div`
  max-width: 80vw;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`

const BannerIntro = styled.p`
  max-width: 300px;
  width: 100%;
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  line-height: 1.35;
  letter-spacing: -.2px;

  @media screen and (max-width: 540px) {
    max-width: 240px;
    letter-spacing: 0px;
  }
`

const ImageContainer = styled.div`
  margin-top: -3%;
  overflow: hidden;
  max-width: 80vw;
  height: auto;
  z-index: -1;
  position: relative;
  display: block;
`

const RevealMask = {
  width: "0%",
  height: "100%",
  position: "absolute",
  top: "0",
  zIndex: "2",
  left: "0",
  bottom: "0",
  background: "var(--brand)",
  transformOrigin: "left"
}


const letterAni = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
      restDelta: 0.005,
      duration: .5
   }
  },
};

const banner = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};



const LetterAnimated = ({ title, disabled }) => (
  <motion.span
    className='row-title row-title2'
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
    <span className="banner-row">
      <span className='row-col2'>
        <LetterAnimated title={title} />
      </span>
    </span>
  );
};



const CaseBanner = ({ title, titleContent, intro, children, image }) => {
  function createHTML(props) {
    return { __html: props }
  }

  return (
    <Banner>
      <div className="siteContainer siteContainer--medium">
        <BannerTitle>
          <BannerRowTop title={title}
            dangerouslySetInnerHTML={createHTML(titleContent)}
          />
        </BannerTitle>
      </div>
      <ImageContainer>
        <motion.span
          style={RevealMask}
          animate={{
            width: ["0%", "100%", "0%"],
            left: ["0%", "0%", "100%"],
            right: ["100%", "0%", "0%"]
          }}
          transition={{
            type: "easeInOut",
            duration: 1,
            delay: 1.5,
          }}
        >

        </motion.span>
        <motion.img
          src={image}
          key={image}
          style={BannerImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "easeInOut",
            delay: 1.8,
            duration: 1,
          }}
        >
        </motion.img>
      </ImageContainer>
      {children}
      <motion.span
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 50,
          restDelta: 0.005,
          delay: 2,
        }}
      >
        <BannerIntroWrap>
          <BannerIntro
            dangerouslySetInnerHTML={createHTML(intro)}
          />
        </BannerIntroWrap>
      </motion.span>
    </Banner>
  )
}

export default CaseBanner