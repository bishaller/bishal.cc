import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import AnimatedSection, { childVariants } from "../AnimatedSection"

const StyledReviews = styled.div`
   margin-bottom: clamp(2.5rem, 8vw, 8rem);
`

const ReviewsTitle = styled.h2`
   display: none;
`
const ReviewsGrid = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`
const ReviewsGridItem = styled.blockquote`
   width: 40%;
   font-family: var(--serifLight);
   font-style: normal;
   font-weight: 300;
   font-size: clamp(1.2rem, 2vw, 1.875rem);
   line-height: 1.3;
   border: none;
   padding: 0;
   margin: 0;

   p {
      margin-bottom: clamp(1rem, 1.6vw, 1.57rem);
      letter-spacing: -.5px;
      font-weight: 300;

      @media screen and (max-width: 600px) {
         letter-spacing: -.1px;
      }
   }

   @media screen and (max-width: 600px) {
      width: 100%;
      margin-bottom: 50px;

      &:last-child {
         margin-bottom: 0;
      }
   }
`

const ReviewsCite = styled.cite`
   display: block;
   font-family: var(--sans);
   font-style: normal;
   font-weight: 400;
   font-size: clamp(0.875rem, 1vw, 1rem);
   letter-spacing: 0;

   span {
      opacity: 0.5;
   }
`

const ReviewsStar = styled.svg`
   width: 14px;
   height: 16px;
   display: block;
   margin-bottom: 20px;

   @media screen and (max-width: 600px) {
      margin-bottom: 10px;
   }
`

const Reviews = () => {
   return (
      <AnimatedSection>
         <StyledReviews>
            <div className="siteContainer siteContainer--intro">
               <motion.div variants={childVariants}>
                  <ReviewsTitle>Reviews</ReviewsTitle>
               </motion.div>

               <ReviewsGrid>
                  <ReviewsGridItem>
                     <motion.div variants={childVariants}>
                        <ReviewsStar viewBox="0 0 14 16">
                           <use xlinkHref="#star"></use>
                        </ReviewsStar>
                        <p>A “Rare Gem” is the phrase that comes to me when I think about Bishal. He has unyielding drive for excellence that few people can boast of today.</p>
                        <ReviewsCite>Pravash Karki, <span>CEO @ Last Door</span></ReviewsCite>
                     </motion.div>
                  </ReviewsGridItem>
                  <ReviewsGridItem>
                     <motion.div variants={childVariants}>
                        <ReviewsStar viewBox="0 0 14 16">
                           <use xlinkHref="#star"></use>
                        </ReviewsStar>
                        <p>The main thing that struck me about Bishal’s work is his commitment to go above and beyond to put forward the best possible version of the work.</p>
                        <ReviewsCite>Kshitij Lohani, <span>Sr. Software Engineer @ Apple</span></ReviewsCite>
                     </motion.div>
                  </ReviewsGridItem>
               </ReviewsGrid>
            </div>
         </StyledReviews>
      </AnimatedSection>
   )
}

export default Reviews;