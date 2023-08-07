import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutIntro from "../components/home/homeAbout"
import Skills from "../components/home/skills"

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
      <Layout>
        <Billboard/>
        <Intro/>
        <WorkHover/>
        <AboutIntro/>
        <Skills/>
      </Layout>
    </main>
  )
}

export default WorkPage