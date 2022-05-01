import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Themed, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()},
    {` `}
    <Themed.a href="https://www.linkedin.com/in/bishaller">Bishal Mishra</Themed.a>
    {` `}&bull;{` `}
    <Themed.a as={Link} to="/notes">
      Notes
    </Themed.a>
    {` `}&bull;{` `}
    {socialLinks
      ? socialLinks.map((bishaller, i, arr) => (
        <Fragment key={bishaller.url}>
          <Themed.a
            href={bishaller.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {bishaller.name}
          </Themed.a>
          {arr.length - 1 !== i && (
            <Fragment>
              {` `}&bull;{` `}
            </Fragment>
          )}
        </Fragment>
      ))
      : null}
  </footer>
)
export default Footer