import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"

export const Slider = () => {
  const data = useStaticQuery(graphql`
    {
      allImages: allFile(filter: { relativeDirectory: { eq: "" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                srcWebp
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allImages.edges)
  return (
    <>
      <Carousel>
        {data.allImages.edges.map(({ node }) => (
          <Carousel.Item key={node.id}>
            <img 
            src={node.childImageSharp.fluid.srcWebp} alt={"random"} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

export default Slider
