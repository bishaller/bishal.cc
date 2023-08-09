import * as React from "react"
import SvgSprite from "../components/parts/svg-sprite"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

import {
  StyledFooter,
  FooterMain,
  FooterSocial,
  FooterTitle,
  FooterButton,
  SocialIcons
} from "./footer.style"

const SocialIconsImage = {
  maxWidth: "80px",
  marginBottom: "10px",
  filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))",
  transition: "ease all 0.25s",

  '@media(maxWidth: 768px)': {
    maxWidth: "60px",
  },
};

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <FooterMain>
        <div className="siteContainer siteContainer--medium">
          <FooterTitle>Saying yes to good work.</FooterTitle>
          <motion.span
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ display: "inline-block" }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <FooterButton
              title="hello@bishal.cc"
              href="mailto:hello@bishal.cc"
            >
              hello@bishal.cc
              <svg viewBox="0 0 51 45">
                <use xlinkHref="#icon-mail"></use>
              </svg>
            </FooterButton>
          </motion.span>
        </div>
      </FooterMain>
      <div className="siteContainer siteContainer--medium">
        <FooterSocial>

          <SocialIcons
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
              style={SocialIconsImage}
            />
            <strong>Dribbble</strong>
            posting interfaces
          </SocialIcons>
          <SocialIcons
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
              style={SocialIconsImage}
            />
            <strong>Github</strong>
            coding sometimes
          </SocialIcons>
          <SocialIcons
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
              style={SocialIconsImage}
            />
            <strong>Instagram</strong>
            let's be friends
          </SocialIcons>
          <SocialIcons
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
              style={SocialIconsImage}
            />
            <strong>Linkedin</strong>
            connect for work
          </SocialIcons>
        </FooterSocial>
      </div>

      <div className="footer__footer">
        <div className="footer__media">
          <div className="footer__copyright">
            <p>&copy; {new Date().getFullYear()} Bishal Mishra.</p>
            <p>I hand-coded this website.</p>
          </div>
        </div>
      </div>
      <SvgSprite className="footer__svg" title="Svg Sprite" />
    </StyledFooter>
  )
}
export default Footer
