import * as React from "react"
import { useState, useEffect } from "react"
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../styles/var.css"

const Header = ({ headerStyle }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  let buttonClass

  switch (headerStyle) {
    case "color-change":
      buttonClass =
        scrollY > 650
          ? "button button--header"
          : "button button--header button--headerWhite"
      break
    case "custom-color":
      buttonClass = "header-custom"
      break
    default:
      buttonClass = "button button--header"
  }

  return (
    <header className="siteHeader">
      <nav className="siteContainer">
        <ul>
          <li>
            <a
              className={`${buttonClass}`}
              title="hello@bishal.cc"
              href="mailto:hello@bishal.cc"
            >
              Contact!
              <span className="paperPlane"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
