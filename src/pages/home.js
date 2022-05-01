import * as React from "react"
import Seo from "../gatsby-theme-blog/src/seo"

// Import Components
import Billboard from "./components/billboard"
import Intro from "./components/intro"
import Project from "./components/project"

// markup
const HomePage = () => {
  return (
    <main>
      <Seo title="Bishal Mishra, UX &amp; Product Designer" />
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
      <Project
        subtitle={`Strategy, Copywriting, Design & Dev.`}
        title={`perfect website page that explains everything.`}
        description={`The goal with the iPhone app Fever Free was to make it as simple as possible to track your body temperature over time. With the pandemic of COVID-19 on the rise, `}
      />
    </main>
  )
}

export default HomePage
