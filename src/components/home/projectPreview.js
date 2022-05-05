import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectPreview = () => {
  const data = useStaticQuery(graphql`
    {
      items: projectPreviewJson {
        projects {
          category
          title
          description
          image {
            alt
            url {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="projectPreview">
      {data.items.projects.map((data, index) => {
        return (
          <div className="siteContainer" key={index}>
            <header className="projectPreview__header">
              <div className="projectPreview__headerInner">
                <div className="projectPreview__titles">
                  <p className="projectPreview__meta">{data.category}</p>
                  <h2 className="projectPreview__title" title={data.title}>
                    {data.title}
                  </h2>
                </div>
                <div className="projectPreview__content">
                  <p className="projectPreview__description">
                    {data.description}
                  </p>
                </div>
              </div>
            </header>
            <div className="projectPreview__image">
              <Img
                fluid={data.image.url.childImageSharp.fluid}
                alt={data.image.alt}
              />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ProjectPreview
