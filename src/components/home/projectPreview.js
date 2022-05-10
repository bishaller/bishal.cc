import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import idealayaGIF from "../../images/idealaya-work-by-bishal-mishra.gif"
import tpnGIF from "../../images/trekkers-paradise-nepal-work-by-bishal-mishra.gif"
import ldsGIF from "../../images/lastdoor-work-by-bishal-mishra.gif"

const ProjectPreview = () => {
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
    <div className="projectPreview">
      <div className="siteContainer siteContainer--medium">
        <section className="projectPreview__item" >
          <header className="projectPreview__header">
            <div className="projectPreview__titles">
              <p className="projectPreview__meta">Strategy, Copywriting, Design</p>
              <h2 className="projectPreview__title" title="idealaya: A thoughtful site for future crafters">
                "idealaya": <br/> A thoughtful site for future crafters
              </h2>
            </div>
            <div className="projectPreview__content">
              <p>2019: idealaya's site is a site redesigned to portray their unique nature of work. The strategic copy and crisp interface helps this top-notch site better communicate with their clients.</p>
            </div>
          </header>
          <div className="projectPreview__image">
            <img src={idealayaGIF} alt="Idealaya Design screenshots" />
          </div>
        </section>
        <section className="projectPreview__item" >
          <header className="projectPreview__header">
            <div className="projectPreview__titles">
              <p className="projectPreview__meta">Strategy, Design, WordPress Dev</p>
              <h2 className="projectPreview__title" title="idealaya: A thoughtful site for future crafters">
                A heavenly portal for trekkers around the world.
              </h2>
            </div>
            <div className="projectPreview__content">
              <p>Reimagined a small travel agency's approach to help them grow their business through a unique experience served with profound information. From scratch, I designed and coded this site on WordPress.</p>
            </div>
          </header>
          <div className="projectPreview__image">
            <img src={tpnGIF} alt="Trekkers Paradise Nepal UI Screenshots" />
          </div>
        </section>
        <section className="projectPreview__item" >
          <header className="projectPreview__header">
            <div className="projectPreview__titles">
              <p className="projectPreview__meta">Copy, Design, Code</p>
              <h2 className="projectPreview__title" title="idealaya: A thoughtful site for future crafters">
                Perfect Landing page designed for Last Door
              </h2>
            </div>
            <div className="projectPreview__content">
              <p>A short and sweet one-page site, to deliver the exact information on how Last Door functions. I did this quick turnaround with engaging animations, colorful gradients and a bit of coding.</p>
            </div>
          </header>
          <div className="projectPreview__image">
            <img src={ldsGIF} alt="Landing Page for Last Door" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProjectPreview
