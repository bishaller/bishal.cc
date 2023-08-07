import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

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
`

const AboutLarge = styled.span`
  font-family: var(--serifLight);
  font-weight: 300;
  font-size: clamp(2rem, 4vw, 3.375rem);
  line-height: 1.2;
  margin-bottom: clamp(1.25rem, 2vw, 1.875rem);

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
  margin-top: 12px;
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
      <StyledAboutIntro>
         <div className="siteContainer siteContainer--intro">
            <AboutContent>
               <p>
                  <AboutLarge>
                     <strong>Working since 2015,</strong>
                     <br />
                     as a Designer, Developer &
                     <br />a Product Guy,
                  </AboutLarge>
                  <br />
                  <AboutNormal>
                     from the office & remotely,
                     <br />as a freelancer in various markets,
                     <br />in-house & in creative agencies.
                  </AboutNormal>
               </p>
            </AboutContent>
         </div>

         <div className="siteContainer siteContainer--hr">
            <ImageGrid>
               <StaticImage
                  src={"../../images/bishalMishraHomeOffice.webp"}
                  alt="Home office work setup."
                  width={10000}
                  style={ImageGridItem}
               />
               <StaticImage
                  src={"../../images/bishalMishraWorking.webp"}
                  alt="Work mode portrait of Bishal Mishra"
                  width={10000}
                  style={ImageGridItem}
               />
               <StaticImage
                  src={"../../images/bishalMishraOffice.webp"}
                  alt="Working at office."
                  width={10000}
                  style={ImageGridItem}
               />
            </ImageGrid>
         </div>
      </StyledAboutIntro>
   )
}

export default AboutIntro;