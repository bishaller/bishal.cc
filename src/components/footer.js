import * as React from "react"
import SvgSprite from "../components/parts/svg-sprite"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="siteContainer siteContainer--medium">
        <div className="footer__main">
          <h2 className="footer__title">I am open to work</h2>
          <a
            className="button button--footer"
            title="hello@bishal.cc"
            href="mailto:hello@bishal.cc"
          >
            hello@bishal.cc
            <svg viewBox="0 0 51 45">
              <use xlinkHref="#icon-mail"></use>
            </svg>
          </a>
          <div className="footer__social">
            <a
              className="socialIcons socialIcons--linkedin"
              title="Connect with Bishal on Linkedin"
              href="https://linkedin.com/in/bishaller"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <span className="screen-reader-text">
                Connect with Bishal on Linkedin
              </span>
            </a>
            <a
              className="socialIcons socialIcons--twitter"
              title="Connect with Bishal on Twitter"
              href="https://twitter.com/twitter"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <span className="screen-reader-text">
                Connect with Bishal on Twitter
              </span>
            </a>
            <a
              className="socialIcons socialIcons--instagram"
              title="Connect with Bishal on Instagram"
              href="https://instagram.com/bishaller"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <span className="screen-reader-text">
                Connect with Bishal on D
              </span>
            </a>
            <a
              className="socialIcons socialIcons--dribbble"
              title="Connect with Bishal on Dribbble"
              href="https://dribbble.com/bishaller"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <span className="screen-reader-text">
                Connect with Bishal on Dribbble
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__footer">
        <div className="footer__media">
          <StaticImage
            src={"../images/footer_gradient.png"}
            alt=""
            width={10000}
            className="footer__image"
          />
          <div className="footer__copyright">
            <p>
              &copy; {new Date().getFullYear()} Bishal Mishra. All rights
              reserved.
            </p>
            <p>Work is in Progress</p>
          </div>
        </div>
      </div>
      <SvgSprite className="footer__svg" title="Svg Sprite" />
    </footer>
  )
}
export default Footer
