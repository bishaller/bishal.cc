import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import AnimatedSection, { childVariants } from "../AnimatedSection"

const Overview = styled.section`
  margin-bottom: clamp(4.5rem, 9vw, 9.375rem);
`

const OverviewTitle = styled.h2`
  margin-bottom: clamp(1.125rem, 3vw, 2.5rem);
  position: relative;
  z-index: 1;
  font-size: clamp(2.5rem, 5.5vw, 5rem);
  font-family: var(--serifLight);
  font-weight: 300;
  line-height: 1;

  &:after {
    content: "";
    position: absolute;
    display: block;
    left: -5.5vw;
    top: 50%;
    transform: translateY(-50%);
    width: 4vw;
    height: 4px;
    background-color: var(--brand);

    @media screen and (max-width:1000px) {
      height: 3px;
    }

    @media screen and (max-width:640px) {
      display: none;
    }
  }
`

const Snippet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
`

const SnippetList = styled.ul`
  list-style: none;
  margin-right: 40px;

  @media screen and (max-width: 640px) {
    width: calc(50% - 20px);
    margin-right: 20px;
  }

  li {
    line-height: 1.11;
    font-size: clamp(0.825rem, 2vw, 1rem);
    margin-bottom: 12px;
    &:first-child {
      font-family: var(--serif);
      font-weight: 400;
      font-size: clamp(1.125rem, 3vw, 1.875rem);
      margin-bottom: 25px;

      @media screen and (max-width: 640px) {
        margin-bottom: 15px;
      }
    }
  }
`

const OverviewImage = {
  width: "100%",
}

const CaseOverview = ({ Title, contentLarge, content, Role, Scope, Timeline, Company, Image }) => {
  function createHTML(props) {
    return { __html: props }
  }

  return (
    <AnimatedSection>
      <Overview>
        <div className="siteContainer siteContainer--billboard">
          <motion.span variants={childVariants}>
            <OverviewTitle
              title={Title}
              dangerouslySetInnerHTML={createHTML(Title)}
            />
          </motion.span>
          <Snippet>
            <motion.div variants={childVariants}>
              <SnippetList>
                {Role.map(dataItem => {
                  return <li key={dataItem.content}>{dataItem.content}</li>
                })}
              </SnippetList>
            </motion.div>
            <motion.div variants={childVariants}>
              <SnippetList>
                {Scope.map(dataItem => {
                  return <li key={dataItem.content}>{dataItem.content}</li>
                })}
              </SnippetList>
            </motion.div>
            <motion.div variants={childVariants}>
              <SnippetList>
                {Timeline.map(dataItem => {
                  return <li key={dataItem.content}>{dataItem.content}</li>
                })}
              </SnippetList>
            </motion.div>
            <motion.div variants={childVariants}>
              <SnippetList>
                {Company.map(dataItem => {
                  return <li key={dataItem.content}>{dataItem.content}</li>
                })}
              </SnippetList>
            </motion.div>
          </Snippet>
        </div>
        {Image && (
          <div className="siteContainer siteContainer--hr">
            <motion.img
              variants={childVariants}
              src={Image}
              key={Image}
              style={OverviewImage}
            >
            </motion.img>
          </div>
        )}
      </Overview>
    </AnimatedSection>
  )
}

export default CaseOverview
