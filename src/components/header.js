import * as React from "react"
import { styled } from "styled-components"
import Plane from "./parts/accentPlane"
// import AniLink from "gatsby-plugin-transition-link/AniLink";

const HeaderButton = styled.a`
  .icon {
    width: 50px;
    height: 50px;
    margin: 0.5em;
  }
`

const Header = () => {
  return (
    <header className="siteHeader">
      <nav className="siteContainer">
        <ul>
          <li>
            <HeaderButton>
              <span className="icon">
                <Plane />
              </span>
            </HeaderButton>

            <a
              className={`headerButton`}
              title="hello@bishal.cc"
              href="mailto:hello@bishal.cc"
            >
              <span className="contact">hello@bishal.cc</span>
              <span className="paperPlane"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
