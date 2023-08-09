import * as React from "react"
import styled from "styled-components"

const StyledSkills = styled.div`
`
const SkillsGrid = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-bottom: clamp(0rem, 6vw, 6rem);
`

const SkillsGridItem = styled.div`
   margin-right: 11%;
   width: 26%;

   &:last-child {
      margin-right: 0;
   }

   @media screen and (max-width: 600px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 1.5rem;
   }
`

const SkillsTitle = styled.h2`
   font-family: var(--serif);
   font-weight: 400;
   font-size: clamp(1.5rem, 3vw, 2.25rem);

   @media screen and (max-width: 600px) {
      margin-bottom: 10px;
   }
`

const SkillsList = styled.ul`
   list-style-type: none;
   margin: 0;
`

const SkillsListItem = styled.li`
   font-size: clamp(0.875rem, 1vw, 1.125rem);
   letter-spacing: 0.2px;
`

const Divider = styled.hr`
   background-color: rgba(11,11,11,.25);
   margin-bottom: clamp(3.5rem, 8vw, 8rem);
`

const Skills = () => {
   return (
      <StyledSkills>
         <div className="siteContainer siteContainer--intro">
            <SkillsGrid>
               <SkillsGridItem>
                  <SkillsTitle>Design Consulting</SkillsTitle>
                     <SkillsList>
                        <SkillsListItem>Strategy</SkillsListItem>
                        <SkillsListItem>Design Audit</SkillsListItem>
                        <SkillsListItem>Team Lead</SkillsListItem>
                        <SkillsListItem>Mentorship</SkillsListItem>
                     </SkillsList>
               </SkillsGridItem>
               <SkillsGridItem>
                  <SkillsTitle>Product Design</SkillsTitle>
                     <SkillsList>
                        <SkillsListItem>Market Research</SkillsListItem>
                        <SkillsListItem>User Research</SkillsListItem>
                        <SkillsListItem>User Experience</SkillsListItem>
                        <SkillsListItem>Visual Design</SkillsListItem>
                        <SkillsListItem>RoadMaping</SkillsListItem>
                        <SkillsListItem>Prototyping/Pretotyping</SkillsListItem>
                        <SkillsListItem>Testing</SkillsListItem>
                     </SkillsList>
               </SkillsGridItem>
               <SkillsGridItem>
                  <SkillsTitle>Development</SkillsTitle>
                     <SkillsList>
                        <SkillsListItem>HTML</SkillsListItem>
                        <SkillsListItem>CSS</SkillsListItem>
                        <SkillsListItem>Javascript</SkillsListItem>
                        <SkillsListItem>WordPress</SkillsListItem>
                        <SkillsListItem>React JS / Next JS</SkillsListItem>
                        <SkillsListItem>Python </SkillsListItem>
                     </SkillsList>
               </SkillsGridItem>

            </SkillsGrid>
         </div>
         <div className="siteContainer siteContainer--hr">
            <Divider />
         </div>
      </StyledSkills>
   )

}

export default Skills;