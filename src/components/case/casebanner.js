import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import sampleImage from "../../images/dwt/dwtBanner.webp"

const Banner = styled.div`
  padding: clamp(8rem, 14vw, 15rem) 0 clamp(6rem, 14vw, 13rem);
  margin-bottom: clamp(5rem, 12vw, 7.5rem);
`

const BannerTitle = styled.h1`
color: var(--dark);
--wt: 400;
--fsz: clamp(3rem, 7vw, 7.5rem);
--lh: 0.84;
--font: var(--wt) var(--fsz) / var(--lh) var(--serifLight);
font: var(--font);
text-align: left;
letter-spacing: -.1vw;
margin-bottom: 0;

  @media #{$phone} {
    letter-spacing: -3px;
  }
`

const BannerImage = {
  width: "80vw",
  height: "0",
  marginTop: "-2%",
  zIndex: "-1",
  position: "relative",
}

const BannerIntroWrap = styled.div`
  width: 80vw;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`

const BannerIntro = styled.p`
  max-width: 300px;
  width: 100%;
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.35;
`

const CaseBanner = ({ title, titleContent, intro }) => {
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
      <motion.img
        src={sampleImage}
        key={sampleImage}
        style={BannerImage}
        initial={{ height: "0" }}
        animate={{ height: "auto" }}
        exit={{ height: "0" }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.005,
          delay: 2,
        }}
      >
      </motion.img>
      <BannerIntroWrap>
        <BannerIntro
          dangerouslySetInnerHTML={createHTML(intro)}
        />
      </BannerIntroWrap>
    </Banner>
  )
}

export default CaseBanner