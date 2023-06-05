import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CaseBanner from "../components/case/caseBanner"

const WorkPage = () => {
  return (
    <main className="case">
      <Seo
      title="Case study - Web App - Bishal Mishra"
      description=""
      />
      <Layout headerStyle="color-change">
        <CaseBanner
          title={`redefining 🌏 travel experience for three distinct 👩‍💻🕵️🧙‍♂️ users`}
          titleContent={`redefining <span>🌏</span> travel experience for three distinct <span>👩‍💻🕵️🧙‍♂️</span> users`}
        />
      </Layout>
    </main>
  )
}
export default WorkPage
