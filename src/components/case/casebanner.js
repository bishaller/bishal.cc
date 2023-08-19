import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const Banner = styled.div`
  padding-top: clamp(12rem, 17vw, 15rem);
  margin-bottom: clamp(5rem, 12vw, 10rem);
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
  margin-top: -2%;
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



const CaseBanner = ({ title, titleContent, intro, children, image }) => {
  function createHTML(props) {
    return { __html: props }
  }


  return (
    <Banner>
      <div className="siteContainer siteContainer--medium">
        <BannerTitle
          title={title}
          dangerouslySetInnerHTML={createHTML(titleContent)}
        />
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
            delay: 1,
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
            delay: 1.2,
          }}
        >
        </motion.img>

      </ImageContainer>

      {/* <ImageContainer >
        <motion.img
          className="reveal-image"
          src={image}
          key={image}
          style={BannerImage}
          alt="Reveal Image"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
        />
      </ImageContainer> */}


      {/* <motion.img
        src={image}
        key={image}
        style={BannerImage}
        initial={{ width: "0" }}
        animate={{ width: "80vw" }}
        exit={{ height: "auto" }}
        transition={{
          // type: "spring",
          // damping: 20,
          // stiffness: 100,
          // restDelta: 0.005,
          // delay: .5,
          type: "easeOut",
          duration: 0.5,
          delay: 0.5,
        }}
      >
      </motion.img> */}
      {children}
      <BannerIntroWrap>
        <BannerIntro
          dangerouslySetInnerHTML={createHTML(intro)}
        />
      </BannerIntroWrap>
    </Banner>
  )
}

export default CaseBanner