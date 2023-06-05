import * as React from "react"
import styled from "styled-components"

const Snippet = styled.div`
  margin-bottom: clamp(4rem, 7vw, 5rem);
`

const SnippetInner = styled.div`
  border-top: 1px solid var(--c-brandHome);
  border-bottom: 1px solid var(--c-brandHome);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 0;
  background-color: rgba(29, 228, 213, 0.15);

  @media screen and (max-width: 740px) {
    justify-content: flex-start;
  }
`

const SnippetList = styled.ul`
  list-style: none;
  margin: 0 40px;
  font-size: clamp(0.825rem, 2vw, 1rem);

  @media screen and (max-width: 1040px) {
    margin: 0 20px;
  }

  @media screen and (max-width: 640px) {
    margin: 0 15px;
  }

  li {
    line-height: 1.41;
    &:first-child {
      font-family: var(--ff-defaultBold);
      margin-bottom: 15px;

      @media screen and (max-width: 840px) {
        margin-bottom: 5px;
      }

      @media screen and (max-width: 640px) {
        margin-bottom: 0;
      }
    }
  }
`

const CaseSnippet = ({ Role, Scope, Timeline, Company }) => {
  return (
    <Snippet>
      <div className="siteContainer siteContainer--snippet">
        <SnippetInner>
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
        </SnippetInner>
      </div>
    </Snippet>
  )
}

export default CaseSnippet
