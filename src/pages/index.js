import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Import Components
import Billboard from "../components/home/billboard"
import Intro from "../components/home/intro"
import ProjectPreview from "../components/home/projectPreview"
import SectionTitle from "../components/home/sectionTitle"

const WorkPage = ({ data }) => {
  return (
    <main>
      <Seo title="Bishal Mishra — Product Designer, UX Designer, bishaller" />
      <Layout>
        <Billboard/>
        <Intro/>
        <SectionTitle/>
        <ProjectPreview/>
      </Layout>
    </main>
  )
}

export default WorkPage

