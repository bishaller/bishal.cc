import * as React from "react"
import styled from "styled-components"

const StyledWritings = styled.section`
   padding-top: clamp(3rem, 11vw, 11rem);
   padding-bottom: clamp(3rem, 11vw, 11rem);
`

const WritingsTitle = styled.h2`
   font-family: var(--serif);
   font-size: clamp(3rem, 5vw, 5rem);
   text-align: center;
   font-weight: 400;
`

const WritingsWrap = styled.div`
   display: block;
   text-align: center;
`

const Article = styled.article`
   border-bottom: 1px solid rgba(11,11,11,.1);

   &:first-of-type {
      border-top: 1px solid rgba(11,11,11,.1);
   }
`

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
      top: -5px;
      width: calc(100% + 40px);
      height: 0;
      left: -20px;
      background: var(--brand);
      opacity: 0;
      transition: all .25s ease;
      filter: blur(15px);
      z-index: -1;
   }

   &:hover, &:focus {
      &:before {
         opacity: .8;
         height: calc(100% + 10px);
         transition: all .25s ease;
      }
   }
`

const ArticleTitle = styled.h3`
   font-family: var(--serif);
   margin: 0;
   font-weight: 300;
`

const Writings = () => {
   return (
      <StyledWritings>
         <div className="siteContainer siteContainer--heading">
            <WritingsTitle>Writings</WritingsTitle>
            <WritingsWrap>
               <Article>
                  <ArticleLink href="#" title="Maximalism is taking over the web">
                     <ArticleTitle>Maximalism is taking over the web</ArticleTitle>
                     <p>Maximalism is taking over the web</p>
                  </ArticleLink>
               </Article>
               <Article>
                  <ArticleLink href="#" title="CSS Animation/Interaction How?">
                     <ArticleTitle>CSS Animation/Interaction How?</ArticleTitle>
                     <p>CSS Animation/Interaction How?</p>
                  </ArticleLink>
               </Article>
               <Article>
                  <ArticleLink href="#" title="Why do you fail as a Frontend Developer?">
                     <ArticleTitle>Why do you fail as a Frontend Developer?</ArticleTitle>
                     <p>This is the first article</p>
                  </ArticleLink>
               </Article>
            </WritingsWrap>
         </div>
      </StyledWritings>
   )
}

export default Writings;