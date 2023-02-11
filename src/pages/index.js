import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Import Components
import Billboard from "../components/home/billboard"
import Intro from "../components/home/intro"
import ProjectPreview from "../components/home/projectPreview"

const WorkPage = ({ data }) => {
  return (
    <main>
      <Seo title="Bishal Mishra — Product Designer, UX Designer, bishaller" />
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
          title={`Looking for internships/job in UX/Product design while pursuing a Master’s Degree in User Experience & Interaction Design at Thomas Jefferson University.`}
          subtitle={`Updated Feb 2023`}
        />
        <ProjectPreview/>
      </Layout>
    </main>
  )
}

export default WorkPage

