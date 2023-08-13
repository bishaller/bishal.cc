import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

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

const OverviewLarge = styled.p`
  font-size: clamp(1.5rem, 3vw, 2.375rem);
  line-height: 1.47;
  letter-spacing: -1px;
  font-family: var(--sansLight);
  margin-bottom: 30px;
`

const OverviewNormal = styled.p`
  font-size: clamp(1.125rem, 2.5vw, 1.32rem);
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

const CaseOverview = ({ Title, contentLarge, content, Role, Scope, Timeline, Company, Image}) => {
  function createHTML(props) {
    return { __html: props }
  }

  return (
    <Overview>
      <div className="siteContainer siteContainer--billboard">
        <OverviewTitle
          title={Title}
          dangerouslySetInnerHTML={createHTML(Title)}
        />
        <Snippet>
          <SnippetList>
            {Role.map(dataItem => {
              return <li key={dataItem.content}>{dataItem.content}</li>
            })}
          </SnippetList>
          <SnippetList>
            {Scope.map(dataItem => {
              return <li key={dataItem.content}>{dataItem.content}</li>
            })}
          </SnippetList>
          <SnippetList>
            {Timeline.map(dataItem => {
              return <li key={dataItem.content}>{dataItem.content}</li>
            })}
          </SnippetList>
          <SnippetList>
            {Company.map(dataItem => {
              return <li key={dataItem.content}>{dataItem.content}</li>
            })}
          </SnippetList>
        </Snippet>
        {/* <OverviewLarge dangerouslySetInnerHTML={createHTML(contentLarge)} />
        <OverviewNormal dangerouslySetInnerHTML={createHTML(content)} /> */}
      </div>
      <div className="siteContainer siteContainer--hr">
            <motion.img
              src={Image}
              key={Image}
              style={OverviewImage}
              initial={{ height: "0" }}
              animate={{ height: "auto" }}
              exit={{ height: "0" }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                restDelta: 0.005,
                delay: 2,
              }}
            >

            </motion.img>
      </div>
    </Overview>
  )
}

export default CaseOverview
