import * as React from "react"
import SvgSprite from "../components/parts/svg-sprite"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="siteContainer siteContainer--medium">
        <div className="footer__social">
          <a
            className="socialIcons"
            title="Connect with Bishal on Linkedin"
            href="https://linkedin.com/in/bishaller"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <StaticImage
              src={"../images/linkedin.webp"}
              alt="Linkedin Icon"
              width={10000}
              className="socialIcons__icon"
            />
            <strong>Linkedin</strong>
            connecting
          </a>
          <a
            className="socialIcons"
            title="Connect with Bishal on Instagram"
            href="https://dribbble.com/bishaller"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <StaticImage
              src={"../images/dribbble.webp"}
              alt="Dribbble Icon"
              width={10000}
              className="socialIcons__icon"
            />
            <strong>Dribbble</strong>
            posting interfaces
          </a>
          <a
            className="socialIcons"
            title="Connect with Bishal on Github"
            href="https://github.com/bishaller"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <StaticImage
              src={"../images/github.webp"}
              alt="Github Icon"
              width={10000}
              className="socialIcons__icon"
            />
            <strong>Github</strong>
            coding sometimes
          </a>
          <a
            className="socialIcons"
            title="Connect with Bishal on Instagram"
            href="https://instagram.com/bishaller"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <StaticImage
              src={"../images/instagram.webp"}
              alt="Github Icon"
              width={10000}
              className="socialIcons__icon"
            />
            <strong>Instagram</strong>
            let's be friends
          </a>
        </div>
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
        </div>
      </div>
      <div className="footer__footer">
        <div className="footer__media">
          <StaticImage
            src={"../images/oval.svg"}
            alt="A gradient circle, rotating constantly."
            width={10000}
            className="footer__image"
          />
          <div className="footer__copyright">
            <p>&copy; {new Date().getFullYear()} Bishal Mishra.</p>
            <p>❤️ &nbsp;A hand-coded website.</p>
          </div>
        </div>
      </div>
      <SvgSprite className="footer__svg" title="Svg Sprite" />
    </footer>
  )
}
export default Footer
