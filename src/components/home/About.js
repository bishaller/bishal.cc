import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import AnimatedSection, { childVariants } from "../AnimatedSection"

// Import Images
import HomeImage from "../../images/bishalMishraHomeOffice.webp"
import BishalImage from "../../images/bishalMishraWorking.webp"
import OfficeImage from "../../images/bishalMishraOffice.webp"

const StyledAboutIntro = styled.div`
   padding-top: clamp(6rem, 12vw, 12rem);
   padding-bottom: clamp(2rem, 5vw, 5rem);
`

const AboutContent = styled.div`
   max-width: 60%;
   margin-bottom: clamp(2rem, 3.5vw, 3.5rem);

   @media screen and (max-width: 800px) {
      max-width: 100%;
   }

   span {
      display: block;
     }
`

const AboutLarge = styled.span`
  font-family: var(--serifLight);
  font-weight: 300;
  font-size: clamp(2rem, 4vw, 3.375rem);
  line-height: 1.2;
  letter-spacing: -2px;
  margin-bottom: clamp(1.25rem, 2vw, 1.875rem);

  @media screen and (max-width: 1200px) {
   letter-spacing: -1.5px;
  }

  @media screen and (max-width: 800px) {
   letter-spacing: -1px;
  }

  strong {
    opacity: 0.6;
    font-weight: 300;
  }
`

const AboutNormal = styled.span`
  font-family: var(--sansLight);
  font-size: clamp(1.25rem, 3vw, 1.625rem);
  line-height: 1.3;
  letter-spacing: 0.2px;
  max-width: 400px;
  margin-top: -12px;
  display: block;
`

const ImageGrid = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

const ImageGridItem = {
   width: "30%",
}

const AboutIntro = () => {
   return (
      <AnimatedSection>
         <StyledAboutIntro>
            <div className="siteContainer siteContainer--intro">
               <AboutContent>
                  <p>
                     <motion.span variants={childVariants}>
                        <AboutLarge>
                           <strong>Working since 2015,</strong>
                           <br />
                           as a Designer, Developer &
                           <br />a Product Guy,
                        </AboutLarge>
                     </motion.span>
                     <br />
                     <motion.span variants={childVariants}>
                        <AboutNormal>
                           from the office & remotely,
                           <br />as a freelancer in various markets,
                           <br />in-house & in creative agencies.
                        </AboutNormal>
                     </motion.span>
                  </p>
               </AboutContent>
            </div>

            <div className="siteContainer siteContainer--hr">
               <ImageGrid>
                  <motion.img
                     key={HomeImage}
                     src={HomeImage}
                     variants={childVariants}
                     alt="Home office work setup."
                     style={ImageGridItem}
                  />
                  <motion.img
                     key={BishalImage}
                     src={BishalImage}
                     variants={childVariants}
                     alt="Work mode portrait of Bishal Mishra"
                     style={ImageGridItem}
                  />
                  <motion.img
                     key={OfficeImage}
                     src={OfficeImage}
                     variants={childVariants}
                     alt="Working at office."
                     style={ImageGridItem}
                  />
               </ImageGrid>
            </div>
         </StyledAboutIntro>
      </AnimatedSection>
   )
}

export default AboutIntro;