import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import PatternImage from "../../images/intro.webp"
import AnimatedSection, { childVariants } from "../AnimatedSection"

const IntroInner = styled.div`
  padding-top: clamp(3rem, 11vw, 11rem);
  padding-bottom: clamp(3rem, 11vw, 11rem);
`

const IntroWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    display: block;
  }
`

const IntroContent = styled.div`
  width: 62%;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`

const IntroImage = styled.div`
  width: 30%;
  @media screen and (max-width: 700px) {
    display: none;
  }
`

const IntroTitle = styled.h2`
  font-family: var(--sansReg);
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 400;
  letter-spacing: -0.5px;
  color: rgba(var(--dark),.6);
  margin-bottom: 30px;
  position: relative;

  span {
    opacity: 0.6;
  }

  &:after {
    position: absolute;
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    left: -50px;
    top: calc(50% - 3px);
    background-color: var(--brand);

    @media screen and (max-width: 1240px) {
      left: 0;
      width: 25px;
    }
  }

  @media screen and (max-width: 1240px) {
    padding-left: 45px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 10px;
  }
`

const IntroLarge = styled.p`
  font-family: var(--serifLight);
  font-weight: 300;
  font-size: clamp(1.625rem, 3vw, 2.5rem);
  line-height: 1.2;
  margin-bottom: clamp(1.25rem, 2vw, 1.875rem);

  strong {
    opacity: 0.6;
    font-weight: 300;
  }
`

const IntroNormal = styled.p`
  max-width: 610px;
  font-family: var(--sansLight);
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  line-height: 1.46;
  letter-spacing: 0.2px;
`
const Intro = () => {
  return (
    <AnimatedSection>
      <div className="siteContainer siteContainer--hr">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 50,
            restDelta: 0.005,
            delay: 2,
          }}
        >
          <hr />
        </motion.div>
      </div>
      <div className="siteContainer siteContainer--intro">
        <IntroInner>
          <motion.div variants={childVariants}>
            <IntroTitle className="intro__title"><span>What do I do...</span></IntroTitle>
          </motion.div>
          <IntroWrap className="intro__inner">
            <IntroContent className="intro__content">
              <motion.div variants={childVariants}>
                <IntroLarge>
                  Clutching knowledge from every aspect of{" "}
                  <strong>
                    design, product, marketing, engineering, & business,
                  </strong>{" "}
                  I am an end-to-end designer who believes in building experiences
                  that create an impact rather than "Just Functional."
                </IntroLarge>
              </motion.div>
              <motion.div variants={childVariants}>
                <IntroNormal>
                  I have worked on projects as small as changing a tertiary button
                  color to designing large-scale applications requiring an
                  extensive design system. I can fit in most teams, leading and
                  bridging teams or being an individual contributor.
                </IntroNormal>
              </motion.div>
            </IntroContent>
            <IntroImage className="intro__Image">
              <motion.img
                variants={childVariants}
                key={PatternImage}
                src={PatternImage}
              >
              </motion.img>
            </IntroImage>
          </IntroWrap>
        </IntroInner>
      </div>
    </AnimatedSection>
  )
}

export default Intro;
