import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import AnimatedSection, { childVariants } from "../AnimatedSection"

const Generic = styled.div`
  margin-bottom: clamp(4.5rem, 9vw, 9.375rem);
`

const GenericLargeTitle = styled.h2`
  font-size: clamp(2.5rem, 4.5vw, 4.375rem);
  margin-bottom: clamp(1.25rem, 2vw, 2rem);
  font-weight: 400;
  font-family: var(--serifLight);
  letter-spacing: -1.4px;
  line-height: 1;
  max-width: 620px;
`

const GenericTitle = styled.h2`
  font-size: clamp(2rem, 3.5vw, 3.375rem);
  margin-bottom: clamp(1.25rem, 2vw, 2rem);
  font-weight: 400;
  font-family: var(--serifLight);
  letter-spacing: -1.4px;
  line-height: 1.11;
  max-width: 620px;

  span {
    opacity: 0.5;
  }
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

  p:last-child {
    margin-bottom: 0;
  }
`

const GenericContent = styled.div`
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  margin-bottom: 30px;
  
  p:last-child {
    margin-bottom: 0;
  }
`

const GenericImage = {
  width: "100%",
}

const CaseGeneric = ({ LargeTitle, Title, Content, LargeContent, Image, Children }) => {
  function createHTML(props) {
    return { __html: props }
  }

  return (
    <AnimatedSection>
      <Generic className="caseGeneric">
        <div className="siteContainer siteContainer--small">
          {LargeTitle && (
            <motion.div variants={childVariants}>
              <GenericLargeTitle
                Title={LargeTitle}
                dangerouslySetInnerHTML={createHTML(LargeTitle)}
              />
            </motion.div>
          )}
          {Title && (
            <motion.div variants={childVariants}>
              <GenericTitle
                Title={Title}
                dangerouslySetInnerHTML={createHTML(Title)}
              />
            </motion.div>
          )}

          {LargeContent && (
            <motion.div variants={childVariants}>
              <GenericLargeContent dangerouslySetInnerHTML={createHTML(LargeContent)} />
            </motion.div>
          )}

          {Content && (
            <motion.div variants={childVariants}>
              <GenericContent dangerouslySetInnerHTML={createHTML(Content)} />
            </motion.div>
          )}
        </div>
        {Image && (
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
        )}
        {Children}
      </Generic>
    </AnimatedSection>
  )
}

export default CaseGeneric