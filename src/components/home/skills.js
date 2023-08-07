import * as React from "react"
import styled from "styled-components"

const StyledSkills = styled.div`
   margin-bottom: clamp(6rem, 12vw, 12rem);
`
const SkillsGrid = styled.div`
   display: flex;
   flex-wrap: wrap;
`

const SkillsGridItem = styled.div`
   margin-right: 100px;

   &:last-child {
      margin-right: 0;
   }
`

const SkillsTitle = styled.h2`
   font-family: var(--serif);
   font-weight: 400;
`

const SkillsList = styled.ul`
   list-style-type: none;
`

const SkillsListItem = styled.li`
   font-size: clamp(0.875rem, 1vw, 1.125rem);
   letter-spacing: 0.2px;
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
      </StyledSkills>
   )

}

export default Skills;