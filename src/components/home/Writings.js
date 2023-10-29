import * as React from "react"
import styled from "styled-components"
import pen from "../../images/pen.webp"
import { motion } from "framer-motion"
import AnimatedSection, { childVariants } from "../AnimatedSection"

const StyledWritings = styled.div`
   
`

const WritingsTitle = styled.h2`
   font-family: var(--serif);
   font-size: clamp(2.75rem, 5vw, 5rem);
   text-align: center;
   font-weight: 400;
   background: url(${pen}) no-repeat center center;
   line-height: 1.8;
   background-size: auto 100%;
   letter-spacing: -.1px;
`

const WritingsWrap = styled.div`
   display: block;
   text-align: center;
`

const Article = styled.article`

   &:first-of-type {
      border-top: 1px solid rgba(11,11,11,.25);
   }
`

const LastArticle = {
   borderBottom: "1px solid rgba(11,11,11,.25)"
}

const ArticleLink = styled.a`
   display: inline-block;
   position: relative;
   z-index: 1;  
   padding: 1rem 0;

   p {
      display: none;
   }

   &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: calc(100% + 40px);
      height: 0;
      left: -20px;
      background: var(--brand);
      opacity: 0;
      transition: all .25s ease;
      filter: blur(15px);
      -webkit-filter: blur(15px);
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -webkit-transform: translate3d(0, -50%, 0);
      -moz-transform: translate3d(0, -50%, 0);
      z-index: -1;
   }

   &:hover, &:focus {
      &:before {
         opacity: 1;
         height: calc(100% + 10px);
         transition: all .25s ease;
      }
   }
`

const ArticleTitle = styled.h3`
   font-family: var(--serifLight);
   letter-spacing: -0.5px;
   margin: 0;
   font-weight: 300;
   font-size: clamp(1.125rem, 2vw, 1.875rem);
`

const Writings = () => {
   return (
      <AnimatedSection>

         <StyledWritings>
            <div className="siteContainer siteContainer--heading">
               <motion.span variants={childVariants}>
                  <WritingsTitle>Writings</WritingsTitle>
               </motion.span>
               <WritingsWrap>
                  <motion.span variants={childVariants}>
                     <Article>
                        <ArticleLink href="#" title="Maximalism is taking over the web">
                           <ArticleTitle>Maximalism is taking over the web</ArticleTitle>
                           <p>Maximalism is taking over the web</p>
                        </ArticleLink>
                     </Article>
                  </motion.span>

                  <motion.span variants={childVariants}>
                     <Article>
                        <ArticleLink href="#" title="CSS Animation/Interaction How?">
                           <ArticleTitle>CSS Animation/Interaction How?</ArticleTitle>
                           <p>CSS Animation/Interaction How?</p>
                        </ArticleLink>
                     </Article>
                  </motion.span>

                  <motion.span variants={childVariants}>
                     <Article style={LastArticle}>
                        <ArticleLink href="#" title="Why do you fail as a Frontend Developer?">
                           <ArticleTitle>Why do you fail as a Frontend Developer?</ArticleTitle>
                           <p>This is the first article</p>
                        </ArticleLink>
                     </Article>
                  </motion.span>
               </WritingsWrap>
            </div>
         </StyledWritings>
      </AnimatedSection>
   )
}

export default Writings;