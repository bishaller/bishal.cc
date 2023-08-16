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
import Chipleti from "../components/home/chipleti"
import Writings from "../components/home/writings"

function WorkPage() {

  return (
    <main>
      <Seo title="Bishal Mishra — Product Designer, UX Designer, bishaller"
      description="Bishal is a product designer solving problems and driving growth through his experience in cross-skils." />
      <Layout>
        <Billboard />
        <Intro />
        <WorkHover />
        <AboutIntro />
        <Skills />
        <Reviews />
        <Chipleti />
        <Writings />
      </Layout>
    </main>
  )
}

export default WorkPage