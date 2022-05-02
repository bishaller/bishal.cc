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

          </div>
        </div>
      </div>
      <div className="footer__image">
        <StaticImage
          src={"../images/footer_circle.svg"}
          alt=""
          width={10000}
          className=""
        />
      </div>
      <SvgSprite className="footer__svg" title="Svg Sprite" />
    </footer>
  )
}
export default Footer
