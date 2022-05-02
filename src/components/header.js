import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
// import gsap from "gsap";

const Header = () => {
  return (
    <header className="siteHeader">
      <div className="siteContainer">
        <ul className="siteHeader__wrap">
          <li>
            <AniLink
              paintDrip
              hex="#D4DAE1"
              to="/about/"
              duration={1}
              className="siteHeader__link"
              activeClassName="siteHeader__link--active"
            >
              <svg className="icon icon-about">
                <use xlinkHref="#icon-about"></use>
              </svg>
              <span>About</span>
            </AniLink>
          </li>
          <li>
            <AniLink
              paintDrip
              to="/"
              duration={1}
              className="siteHeader__link"
              activeClassName="siteHeader__link--active"
            >
              <svg className="icon icon-work">
                <use xlinkHref="#icon-work"></use>
              </svg>
              <span>Work</span>
            </AniLink>
          </li>
          <li>
            <AniLink
              paintDrip
              to="/writings/"
              duration={1}
              className="siteHeader__link"
              activeClassName="siteHeader__link--active"
            >
              <svg className="icon icon-writings">
                <use xlinkHref="#icon-writings"></use>
              </svg>
              <span>Writings</span>
            </AniLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
