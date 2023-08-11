import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { styled } from "styled-components"

const HeaderLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
const HeaderLinkItem = styled.li`
  line-height: 1;
  
  a {
    text-decoration: none;
    color: var(--dark);
    font-size: clamp(1rem, 2vw, 1.25rem);
    letter-spacing: -.5px;
    transition: ease all .25s;
    position: relative;
    z-index: 1;
    border-bottom: 1px solid transparent;

    &:hover,
    &:active,
    &:focus {
      transition: ease all .25s;
      color: var(--dark);
      border-bottom: 1px solid var(--dark);
    }
  }

  a[aria-current="page"] {
    background: transparent;
    border-bottom: 1px solid var(--dark);

    &:hover,
    &:active,
    &:focus {
        color: var(--dark);
    }
  }
`

const Nav = () => {
  return (
    <HeaderLinks>
      <HeaderLinkItem>
        <AniLink
          cover
          direction="left"
          bg="var(--brand)"
          duration={1}
          to={`/`}
          key={`/`}
          title={`Go to Home Page`}
          activeClass="transparent"
        >
          Index
        </AniLink>
        {","}&nbsp;&nbsp;
      </HeaderLinkItem>
      <HeaderLinkItem>
        <AniLink
          cover
          direction="right"
          bg="var(--brand)"
          duration={1}
          to={`/about/`}
          key={`/about/`}
          title={`Know more about Bishal`}
        >
          About
        </AniLink>
        {","}&nbsp;&nbsp;
      </HeaderLinkItem>
      <HeaderLinkItem>
        <a
          title="Connect on Linkedin"
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/bishaller/"
        >
          Linkedin
        </a>
      </HeaderLinkItem>
    </HeaderLinks>
  )
}
export default Nav;