import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import idealayaGIF from "../../images/idealaya-work-by-bishal-mishra.gif"

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
              <p>The goal with the iPhone app Fever Free was to make it as simple as possible to track your body temperature over time. With the pandemic of COVID-19 on the rise.</p>
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
              <p>The goal with the iPhone app Fever Free was to make it as simple as possible to track your body temperature over time. With the pandemic of COVID-19 on the rise.</p>
            </div>
          </header>
          <div className="projectPreview__image">
            <img src={idealayaGIF} alt="Idealaya Design screenshots" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProjectPreview
