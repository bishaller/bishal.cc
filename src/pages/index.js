import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Import Components
import Billboard from "../components/home/Billboard"
import Intro from "../components/home/intro"
import WorkHover from "../components/home/work/workhover"
import AboutIntro from "../components/home/About"
import Skills from "../components/home/skills"
import Reviews from "../components/home/review"

const WorkPage = ({ children }) => {
  return (
    <main>
      {children}
      <Seo title="Bishal Mishra — Product Designer, UX Designer, bishaller" />
      <Layout>
        <Billboard/>
        <Intro/>
        <WorkHover/>
        <AboutIntro/>
        <Skills/>
        <Reviews/>
      </Layout>
    </main>
  )
}

export default WorkPage