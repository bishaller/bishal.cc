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
--font: var(--wt) var(--fsz) / var(--lh) var(--serif);
font: var(--font);
text-align: left;
letter-spacing: -.1vw;
margin-bottom: 0;

@media #{$phone} {
  letter-spacing: -3px;
}

span {
  font-size: clamp(2.5rem, 6.5vw, 4.375rem);
}
`

const CaseBanner = ({ title, titleContent }) => {
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
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={{ x: "0", y: "0", opacity: 1 }}
        exit={{ x: -100, y: -100, opacity: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.005
        }}
      >

      </motion.img>
    </Banner>
  )
}

export default CaseBanner
