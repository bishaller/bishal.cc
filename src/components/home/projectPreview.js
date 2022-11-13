import * as React from "react"
import dwtBG from "../../images/dwt-bg.jpg"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-fast-marquee";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// const prefersReducedMotion = usePrefersReducedMotion();
const ProjectPreview = (linkData) => {
  // const data = useStaticQuery(graphql`
  //   {
  //     items: projectPreviewJson {
  //       projects {
  //         category
  //         title
  //         description
  //         image {
  //           alt
  //           url {
  //             childImageSharp {
  //               fluid(quality: 100) {
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <section className="projectPreview">
      <div className="siteContainer siteContainer--medium">
        <h2 className="projectPreview__title">work</h2>
      </div>
      <Marquee
        speed={100}
        gradient={false}
      >
        UX Designer&nbsp;&nbsp;⍟&nbsp;&nbsp;UI Designer&nbsp;&nbsp;⍟&nbsp;&nbsp;Visual Design&nbsp;&nbsp;⍟&nbsp;&nbsp;UX Research&nbsp;&nbsp;⍟&nbsp;&nbsp;Product Design&nbsp;&nbsp;⍟&nbsp;&nbsp;Systems Design&nbsp;&nbsp;⍟&nbsp;&nbsp;FrontEnd&nbsp;&nbsp;⍟&nbsp;&nbsp;
      </Marquee>

      <div className="projectPreview__notice">
        <div className="siteContainer siteContainer--medium">
          <p>🚧 Case studies are coming soon. A week or two maybe.</p>
        </div>
      </div>

      <div className="projectPreview__projects">
        <div className="siteContainer siteContainer--medium">
          <div className="projectPreview__wrap">
            <article className="projectCard projectCard--dwt" style={{ backgroundImage: `url(${dwtBG})` }}>
              <span className="projectCard__soon">Coming Soon</span>
              <h2>Discovering a<br />better travel experience</h2>
              <StaticImage
                src={"../../images/dwt-fg.png"}
                alt=""
                width={5000}
                className="projectCard__image"
              />
              <div className="projectCard__footer">
                <h3 className="projectCard__title">Reimagined a travel portal to approach to help them grow their business through a</h3>
                <div className="projectCard__icon">
                  <svg className="" viewBox="0 0 17 17">
                    <use xlinkHref="#icon-target-arrow"></use>
                  </svg>
                </div>
              </div>
              <AniLink
                to="https://discoveryworldtrekking.com/"
                className="projectCard__link"
                target="_blank"
              >
                <span className="screen-reader-text">Visit Website</span>
              </AniLink>
            </article>
            <div className="projectPreview__wrap projectPreview__wrap--two">
              <article className="projectCard">
              </article>
              <article className="projectCard">
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectPreview
