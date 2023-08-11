import * as React from "react"
import { styled } from "styled-components"
import Nav from "./Nav"
import Plane from "./Plane"

const SiteHeader = styled.header`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;
  width: 100%;

  @media screen and(max-width: 640px) {
    position: absolute;
  }
`

const NavWrap = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 30px;
`
const Header = () => {
  return (
    <SiteHeader>
      <div className="siteContainer">
        <NavWrap>
          <Nav />
          <Plane />
        </NavWrap>
      </div>
    </SiteHeader>
  )
}
export default Header
