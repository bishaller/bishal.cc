import * as React from "react";
import SvgSprite from "../components/parts/svg-sprite";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer>
      <SvgSprite className="footer__svg" title="Svg Sprite" />
      <div
        className="footer__image">
          <StaticImage
            src={"../images/under_construction.png"}
            alt=""
            width={10000}
            className=""
          />
      </div>
      
    </footer>
  );
};
export default Footer;
