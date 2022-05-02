import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Import Components
import Billboard from "../components/home/billboard"
import Intro from "../components/home/intro"

// markup

const WorkPage = () => {
  return (
    <main>
      <Seo title="Bishal Mishra, UX &amp; Product Designer" />
      <Layout>
        <Billboard
          title={`I design.<br><strong>Experiences</strong>`}
          description={`<p>
          I am a Product Designer who turns complex problem sets to simple solutions, focused to build experiences that expands one’s capacity for impact 🚀.
          </p>`}
          linkUrl={`/about/`}
          linkTitle={`go to about page`}
          linkData={[
            {
              linkUrl: `/about/`,
              linkTitle: `About Me`,
            },
          ]}
        />
        <Intro
          title={`Heckler for Unrestrained Design and Prototyping 🤘`}
          subtitle={`March 2022`}
          description={`<p>Over the few following months this collection will fill up with all the characters represented in the film. Each of them will go up as a limited collection of NFTs available on OpenSea.</p>`}
        />
      </Layout>
    </main>
  )
}

export default WorkPage
