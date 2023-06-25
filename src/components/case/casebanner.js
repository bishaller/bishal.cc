import * as React from "react"
import styled from "styled-components"

const Banner = styled.div`
  background-color: var(--black);
  padding: clamp(8rem, 14vw, 15rem) 0 clamp(6rem, 14vw, 13rem);
  margin-bottom: clamp(5rem, 12vw, 7.5rem);

  .siteContainer {
    max-width: 960px;
  }
`

const BannerTitle = styled.h1`
color: var(--white);
--wt: 400;
--fsz: clamp(3rem, 7vw, 5rem);
--lh: 0.95;
--font: var(--wt) var(--fsz) / var(--lh) var(--ff-default);
font: var(--font);
text-align: center;
letter-spacing: -4.5px;
margin-bottom: 0;

@media #{$phone} {
  letter-spacing: -3px;
}

span {
  font-size: clamp(2.5rem, 6.5vw, 4.375rem);
}
`

const CaseBanner = ({ title, titleContent }) => {
  function createHTML(props) {
    return { __html: props }
  }

  return (
    <Banner>
      <div className="siteContainer">
        <BannerTitle
          title={title}
          className="caseBanner__title"
          dangerouslySetInnerHTML={createHTML(titleContent)}
        />
      </div>
    </Banner>
  )
}

export default CaseBanner
