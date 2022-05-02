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
          subtitle={`April 2022`}
          description={`I am learning to code and be consistent with it, which also sums up the in-progress version of my(this) personal site. If found, please do kindly bear with the bugs. Find updates on <a href="https://github.com/bishaller/2022.bishal.cc/" rel="noopener noreferrer nofollow" target="_blank">github</a>.`}
        />
      </Layout>
    </main>
  )
}

export default WorkPage
