import * as React from "react"
import styled from "styled-components"

const Generic = styled.div`
  margin-bottom: clamp(4rem, 7vw, 5rem);
`
const GenericTitle = styled.h2``

const GenericContent = styled.p`
  font-size: clamp(1.125rem, 2.5vw, 1.32rem);
`

const GenericLargeContent = styled.p`
  font-size: clamp(1.5rem, 3vw, 2.375rem);
  line-height: 1.47;
  letter-spacing: -1px;
  font-family: var(--ff-defaultLight);
  margin-bottom: 30px;
`

const CaseGeneric = ({ title, content, largeContent, image, video }) => {
  function createHTML(props) {
    return { __html: props }
  }

  return (
    <Generic>
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
