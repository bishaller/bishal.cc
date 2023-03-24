import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Import Components
import Billboard from "../components/home/billboard"
import Intro from "../components/home/intro"
// import Brief from "../components/home/brief"
import CustomCursor from "../components/cursor"
import WorkPreview from "../components/home/work/workPreview"

const WorkPage = ({ children }) => {
  return (
    <main>
      <CustomCursor/>
      {children}
      <Seo title="Bishal Mishra — Product Designer, UX Designer, bishaller" />
      <Layout>
        <Billboard/>
        <Intro/>
        <WorkPreview/>
      </Layout>
    </main>
  )
}

export default WorkPage