import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkPage = () => {
  return (
    <main className="case">
      <Seo title="Work - Bishal Mishra" description="" />
      <Layout headerStyle="color-change">
        <div className="billboard">
        <div className="siteContainer siteContainer--small">
          <h1>I'm glad that you reached this page.</h1>
          <p>Work is in progress, will update the details soon.</p>
        </div>
        </div>
      </Layout>
    </main>
  )
}
export default WorkPage
