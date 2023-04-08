import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Casebanner from "../components/case/casebanner"

const WorkPage = () => {
  return (
    <main>
      <Seo title="Case study - Web App - Bishal Mishra" />
      <Casebanner
        title={`redefining 🌏 travel experience for three distinct 👩‍💻🕵️🧙‍♂️ users`}
        titleContent={`redefining <span>🌏</span> travel experience for three distinct <span>👩‍💻🕵️🧙‍♂️</span> users`}
      />
      <Layout></Layout>
    </main>
  )
}
export default WorkPage
