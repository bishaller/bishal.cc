import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// import "bootstrap/dist/css/bootstrap.min.css"

// Import Components
import Billboard from "../components/home/billboard"
import Intro from "../components/home/intro"
import ProjectPreview from "../components/home/projectPreview"
// import Slider from "../components/home/Carousel"
// markup

const WorkPage = ({ data }) => {
  return (
    <main>
      <Seo title="Bishal Mishra — Product Designer, UX Designer, bishal.cc" />
      <Layout>
        <Billboard
          title={`I design<strong> Experiences</strong>`}
          description={`<p>
          I am a Product Designer who turns complex problem sets to simple solutions, focused in building experiences that expands one’s capacity for impact 🚀.
          </p>`}
          linkUrl={`/about/`}
          linkTitle={`go to about page`}
          linkData={[
            {
              linkUrl: `/about/`,
              linkTitle: `About Me`,
            },
          ]}
        />
        <Intro
          title={`Heckler for Unrestrained Design and Prototyping 🤘`}
          subtitle={`April 2022`}
          description={`I am learning to code and be consistent with it, which also sums up the in-progress version of my(this) personal site. If found, please do kindly bear with the bugs. Find updates on <a href="https://github.com/bishaller/2022.bishal.cc/" rel="noopener noreferrer nofollow" target="_blank">github</a>.`}
        />
        <ProjectPreview/>
        {/* <Carousel>
          {data.slideShow.edges.map(({ node }) => (
            <Carousel.Item key={node.id}>
              <GatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                alt={node.base.split('-').join(' ').split('.')[0]}
              />
            </Carousel.Item>
          ))}
        </Carousel> */}
      </Layout>
    </main>
  )
}

export default WorkPage

// export const pageQuery = graphql`
//   query {
//     slideShow: allFile(
//       filter: { relativeDirectory: { eq: "slider" } }
//       sort: { fields: base, order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           base
//           childImageSharp {
//             gatsbyImageData(
//               placeholder: BLURRED
//               quality: 100
//               blurredOptions: { width: 100 }
//               transformOptions: {cropFocus: CENTER, fit: COVER}
//             )
//           }
//         }
//       }
//     }
//   }
// `
