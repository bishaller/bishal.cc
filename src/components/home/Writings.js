import * as React from "react"
import styled from "styled-components"

const StyledWritings = styled.section`
   padding-top: clamp(3rem, 11vw, 11rem);
   padding-bottom: clamp(3rem, 11vw, 11rem);
`

const WritingsTitle = styled.h2`
   font-family: var(--serif);
   font-family: clamp(1.125rem, 2vw, 1.5rem);
`

const WritingsWrap = styled.div`
   display: block;
`

const Article = styled.article`
   border-bottom: 1px solid rgba(var(--dark), .1);
   &:first-of-type {
      border-top: 1px solid rgba(var(--dark), .1);
   }

   p {
      display: none;
   }
`

const ArticleLink = styled.a`
   display: block;
`

const ArticleTitle = styled.h3`
   font-family: var(--sans);
`

const Writings = () => {
   return (
      <StyledWritings>
         <div className="siteContainer siteContainer--medium">
            <WritingsTitle>Writings</WritingsTitle>
            <WritingsWrap>
               <Article>
                  <ArticleLink href="#" title="Article 1">
                     <ArticleTitle>Article 1</ArticleTitle>
                     <p style={{ display: "none" }}>This is the first article</p>
                  </ArticleLink>
               </Article>
               <Article>
                  <ArticleLink href="#" title="Article 1">
                     <ArticleTitle>Article 1</ArticleTitle>
                     <p style={{ display: "none" }}>This is the first article</p>
                  </ArticleLink>
               </Article>
               <Article>
                  <ArticleLink href="#" title="Article 1">
                     <ArticleTitle>Article 1</ArticleTitle>
                     <p style={{ display: "none" }}>This is the first article</p>
                  </ArticleLink>
               </Article>
            </WritingsWrap>
         </div>
      </StyledWritings>
   )
}

export default Writings;