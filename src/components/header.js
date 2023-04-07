import * as React from "react";
// import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = () => {
  return (
    <header className="siteHeader">
      <nav className="siteContainer">
        <ul>
          <li>
            <a
              className="button button--header"
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
  );
};
export default Header;
