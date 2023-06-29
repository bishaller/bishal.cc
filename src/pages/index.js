import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Import Components
import Billboard from "../components/home/billboard"
import Intro from "../components/home/intro"
import HoverSlide from "../components/home/work/hoverslide"

const WorkPage = ({ children }) => {
  return (
    <main>
      {children}
      <Seo title="Bishal Mishra — Product Designer, UX Designer, bishaller" />
      <Layout>
        <Billboard/>
        <Intro/>
        <HoverSlide/>
      </Layout>
    </main>
  )
}

export default WorkPage