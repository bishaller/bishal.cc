import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Generic = styled.div`
  margin-bottom: clamp(4rem, 7vw, 5rem);
`
const GenericTitle = styled.h2`
  font-size: clamp(2.5rem, 4.5vw, 4.375rem);
  font-weight: 400;
  font-family: var(--serifLight);
  letter-spacing: -1.4px;
  line-height: 1;
  max-width: 620px;
`

const GenericLargeContent = styled.div`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  line-height: 1.32;
  letter-spacing: -.2px;
  font-family: var(--sansLight);
  margin-bottom: 30px;

  @media screen and (max-width: 640px) {
    letter-spacing: -0.5px;
  }
`

const GenericContent = styled.div`
  font-size: clamp(1.25rem, 2vw, 1.5rem);
`

const GenericImage = {
  width: "100%",
}

const CaseGeneric = ({ Title, Content, LargeContent, Image, Children }) => {
  function createHTML(props) {
    return { __html: props }
  }

  return (
    <Generic className="caseGeneric">
      <div className="siteContainer siteContainer--small">
        <GenericTitle
          Title={Title}
          dangerouslySetInnerHTML={createHTML(Title)}
        />
        <GenericLargeContent dangerouslySetInnerHTML={createHTML(LargeContent)} />
        <GenericContent dangerouslySetInnerHTML={createHTML(Content)} />
      </div>
      <div className="siteContainer siteContainer--hr">
        <motion.img
          src={Image}
          key={Image}
          style={GenericImage}
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
      </div>
      {Children}
    </Generic>
  )
}

export default CaseGeneric
