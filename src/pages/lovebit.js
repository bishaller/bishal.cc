// Defaults
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Modules
import CaseBanner from "../components/Case/caseBanner"
import CaseOverview from "../components/Case/caseOverview"
import CaseGeneric from "../components/Case/caseGeneric"
import CaseImage from "../components/Case/caseImage"
// import CaseVideo from "../components/case/caseVideo"

// Images
import bannerImage from "../images/traqit/traqitBanner.webp"
import overviewImage from "../images/dwt/dwtOverview.webp"
import largeImage1 from "../images/dwt/dwtLargeOne.webp"
import dwtProcess from "../images/dwt/dwtProcess.webp"

const Lovebit = () => {
  return (
    <main>
      <Seo
        title="Traqit Software UX Case Study | Bishal Mishra"
        description="UX Case Study for Discovery World Trekking, a travel agency based in Nepal. I designed a website for them to help them sell their trekking packages online."
      />
      <Layout >
        <article className="case">
          <CaseBanner
            title={`Simplified & Events`}
            titleContent={`Simplified Events`}
            intro={`Transitioning users from the old overwhelming software to a task-focused minimal interface in multiple phases.`}
            image={bannerImage}
          >
          </CaseBanner>
          <CaseOverview
            Title={`Overview`}
            Image={overviewImage}
            contentLarge={`Re-do the discovery world trekking’s website into a web app where the users could book their desired trip based on their various interests, agents could bring in their entire group of travelers, and the crew could access their travelers' information pre-trip for a smooth onboarding in their journey.`}
            content={`Discovery World Trekking(DWT) is a pioneering travel agency based in Nepal. They had been serving travelers from Europe, Australia, the US, and other Western countries. Unfortunately, the DWT website had an inferior information architecture with a vast lineup of trips and packages. All the payments would carry out a manual bank-to-bank transfer and not be handled by the website. They felt their brand was not reflecting "who they are" in the website and how they operate. On the business side, they wanted all their travelers' information to be handy and onboard them smoothly when they arrived in Nepal.`}
            Role={[
              {
                content: `Role`,
              },
              {
                content: `Project Lead`,
              },
              {
                content: `Lead Designer / Strategist`,
              },
              {
                content: `QA & FrontEnd development`,
              },
            ]}
            Scope={[
              {
                content: `Scope`,
              },
              {
                content: `Research`,
              },
              {
                content: `UX`,
              },
              {
                content: `Visual Design`,
              },
              {
                content: `Prototyping`,
              },
              {
                content: `Testing`,
              },
              {
                content: `Coding`,
              },
            ]}
            Timeline={[
              {
                content: `Timeline`,
              },
              {
                content: `6 months & continued work`,
              },
              {
                content: `2019-2020`,
              },
            ]}
            Company={[
              {
                content: `Company`,
              },
              {
                content: `Last Door Solutions`,
              },
            ]}
          />

          <CaseGeneric
            LargeTitle={`Redefining travel experience for three distinct users`}
            LargeContent={`<p>Re-do the discovery world trekking’s website into a web app where the users could book their desired trip based on their interests, agents could bring in their entire group of travelers, and the crew could access their travelers' information pre-trip for a smooth onboarding in their journey.</p>`}
            Content={`<p>Discovery World Trekking(DWT) is a pioneering travel agency based in Nepal. They had been serving travelers from Europe, Australia, the US, and other Western countries. Unfortunately, the DWT website had an inferior information architecture with a vast lineup of trips and packages. All the payments would carry out a manual bank-to-bank transfer and not be handled by the website. They felt their brand was not reflecting "who they are" in the website and how they operate. On the business side, they wanted all their travelers' information to be handy and onboard them smoothly when they arrived in Nepal.</p>`}
          />

          <CaseImage
            LargeImage={largeImage1}
          />

          <CaseGeneric
            Title={`<span>Three phases of design: </span>Rebuild from ground up, </br>– Introduce agents & user accounts – Test, re-test & elevate the product.`}
            LargeContent={`<p>I worked on redefining the information architecture, and content placement, improving the trip content strategies, and built 4 main features: a multiple-user management system, a custom trip planner, tiered payments with group discount tiers, and a live search for easy content access.</p>`}
            Content={`<p>Kicked off the project with initial research, planned the project in phases, launched them one by one, and kept working on design tests, reviews, iteration, adding features, publishing the updates on design by rectifying the mistakes till 2022.</p>`}
            Image={dwtProcess}
          />

          <CaseGeneric
            Title={`A custom trip builder.`}
            Content={`<p>This dynamic form lets the user customize the trips based on their own need and specific preference. Especially, this eliminates the back-and-forth manual communication that the crew would do with the user over email.</p>`}
            Image={bannerImage}
          />

          <CaseGeneric
            Title={`User management for agents & groups of users.`}
            Content={`
              <p>Most of the trips run by the discovery world trekking are in groups. Even most solo travelers prefer joining a group. This exists because of the remote trekking routes and fostering of the group trek culture. They follow most trips' traditional group trekking practice as a base package.</p>
              <p>To help users smoothen their journey with their companions, I designed this user management system where one user could book the trip for their group and invite all of their friends to the portal. And that goes the same for the travel agents. The travel agents can book a trip and onboard all their travelers.</p>
              <p>Why do we need to onboard the users on the system?</p>
            `}
            Image={bannerImage}
          />

          {/* <CaseVideo
            videoID={`833883367`}
            videoImage={tripBuilder}
            videoAlt="somethting"
          />  */}
        </article>
      </Layout>
    </main>
  )
}

export default Lovebit