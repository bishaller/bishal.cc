import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Import Components
import Billboard from "../components/home/billboard"
import Intro from "../components/home/intro"
import Chipleti from "../components/home/Chipleti"

const WorkPage = ({ children }) => {
  return (
    <main>
      {children}
      <Seo title="Bishal Mishra — Product Designer, UX Designer, bishaller" />
      <Layout>
        <Billboard/>
        <Intro/>
        <Chipleti/> 
       
      </Layout>
    </main>
  )
}

export default WorkPage