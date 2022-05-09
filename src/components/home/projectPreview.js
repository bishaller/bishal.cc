import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "./Carousel"

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
    <div className="projectPreview">
      <div className="siteContainer siteContainer--medium">
        {data.items.projects.map((data, index) => {
          return (
            <section className="projectPreview__item" key={index}>
              <header className="projectPreview__header">
                <div className="projectPreview__titles">
                  <p className="projectPreview__meta">{data.category}</p>
                  <h2 className="projectPreview__title" title={data.title}>
                    {data.title}
                  </h2>
                </div>
                <div className="projectPreview__content">
                  <p>{data.description}</p>
                </div>
              </header>
              <div className="projectPreview__image">
                <Img
                  fluid={data.image.url.childImageSharp.fluid}
                  alt={data.image.alt}
                  style={{ maxWidth: data.image.width }}
                />
                <Slider relativePath={'slider-2'}
                />
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectPreview
