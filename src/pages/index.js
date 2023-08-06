import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Import Components
import Billboard from "../components/home/billboard"
import Intro from "../components/home/intro"
import WorkHover from "../components/home/work/workhover"
// import App from "../components/home/AnimatedTextWord"
const WorkPage = ({ children }) => {
  return (
    <main>
      {children}
      <Seo title="Bishal Mishra — Product Designer, UX Designer, bishaller" />
      {/* Add some random comment */}
      <Layout>
        <Billboard/>
        <Intro/>
        <WorkHover/>
      </Layout>
    </main>
  )
}

export default WorkPage