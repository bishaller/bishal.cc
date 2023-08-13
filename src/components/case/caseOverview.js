import * as React from "react"
import styled from "styled-components"

const Overview = styled.section`
  margin-bottom: clamp(4rem, 7vw, 5rem);
`

const OverviewTitle = styled.h2`
  margin-bottom: clamp(2rem, 5vw, 5rem);
  text-align: center;
  position: relative;
  z-index: 1;
  font-size: clamp(2.4rem, 3vw, 3.75rem);
  font-family: var(--serifLight);
  font-weight: 300;
  line-height: 1;
`

const OverviewTitleInner = styled.span`
  position: relative;
  display: inline-block;
  background-color: var(--white);
  padding: 0 30px;

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    background-color: var(--brand);
    height: 2px;
    width: calc(100% + 80px);
    transform: translate(-50%, -50%);
    z-index: -2;
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

const CaseOverview = ({ title, contentLarge, content }) => {
  function createHTML(props) {
    return { __html: props }
  }

  return (
    <Overview>
      <div className="siteContainer siteContainer--small">
        <OverviewTitle>
          <OverviewTitleInner
            title={title}
            dangerouslySetInnerHTML={createHTML(title)}
          />
        </OverviewTitle>
        <OverviewLarge dangerouslySetInnerHTML={createHTML(contentLarge)} />
        <OverviewNormal dangerouslySetInnerHTML={createHTML(content)} />
      </div>
    </Overview>
  )
}

export default CaseOverview
