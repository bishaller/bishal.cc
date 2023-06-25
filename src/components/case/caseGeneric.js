import * as React from "react"
import styled from "styled-components"

const Generic = styled.div`
  margin-bottom: clamp(4rem, 7vw, 5rem);
`
const GenericTitle = styled.h2`
  font-size: clamp(2rem, 3.5vw, 3.75rem);
  font-weight: 400;
  letter-spacing: -3px;

  @media screen and (max-width: 1040px) {
    letter-spacing: -2px;
  }

  @media screen and (max-width: 640px) {
    letter-spacing: -1.5px;
    margin-bottom: 10px;
  }
`

const GenericContent = styled.div`
  font-size: clamp(1.125rem, 2.5vw, 1.32rem);
`

const GenericLargeContent = styled.div`
  font-size: clamp(1.5rem, 3vw, 2.375rem);
  line-height: 1.47;
  letter-spacing: -1px;
  font-family: var(--ff-defaultLight);
  margin-bottom: 30px;

  @media screen and (max-width: 640px) {
    letter-spacing: -0.5px;
  }
`

const CaseGeneric = ({ title, content, largeContent, image, video }) => {
  function createHTML(props) {
    return { __html: props }
  }

  return (
    <Generic className="caseGeneric">
      <div className="siteContainer siteContainer--small">
        <GenericTitle
          title={title}
          dangerouslySetInnerHTML={createHTML(title)}
        />
        <GenericContent dangerouslySetInnerHTML={createHTML(content)} />
        <GenericLargeContent dangerouslySetInnerHTML={createHTML(largeContent)}
        />
      </div>
      
    </Generic>
  )
}

export default CaseGeneric
