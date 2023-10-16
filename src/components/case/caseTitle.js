import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import AnimatedSection, { childVariants } from "../AnimatedSection"


const TitleStyle = styled.h2`
   margin-bottom: clamp(1.125rem, 3vw, 2.5rem);
   position: relative;
   z-index: 1;
   font-size: clamp(2.5rem, 5.5vw, 5rem);
   font-family: var(--serifLight);
   font-weight: 300;
   line-height: 1;
   letter-spacing: -2px;
`

const TitleWrapper = styled.div`
   width: 100%;
   border-bottom: var(--brand) 4px solid;
   margin-bottom: clamp(4.5rem, 9vw, 6.25rem);
`

const CaseTitle = ({ Title, Children }) => {
   return (
      <AnimatedSection>
         <TitleWrapper>
            <motion.div variants={childVariants}>
               <div className="siteContainer siteContainer--small">
                  <TitleStyle>{Title}</TitleStyle>
               </div>
            </motion.div>
         </TitleWrapper>
         {Children}
      </AnimatedSection>
   )
}

export default CaseTitle