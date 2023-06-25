import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CaseBanner from "../components/case/caseBanner"
import CaseOverview from "../components/case/caseOverview"
import CaseSnippet from "../components/case/caseSnippet"
import CaseGeneric from "../components/case/caseGeneric"
import tripBuilder from "../images/dwt/dwt_trip_builder.png"
import VideoPlayer from "react-video-js-player"
import CaseVideo from "../components/case/caseVideo"

const Dwt = () => {
    return (
      <main>
        <Seo
          title="Discovery World Trekking UX Case Study | Bishal Mishra"
          description="UX Case Study for Discovwery World Trekking, a travel agency based in Nepal. I designed a website for them to help them sell their trekking packages online."
        />
        <Layout headerStyle="color-change">
          <article className="case">
            <CaseBanner
              title={`redefining 🌏 travel experience for three distinct 👩‍💻🕵️🧙‍♂️ users`}
              titleContent={`redefining <span>🌏</span> travel experience for three distinct <span>👩‍💻🕵️🧙‍♂️</span> users`}
            />
            <CaseVideo
              videoID={`833883367`}
              videoImage="../images/dwt/dwt_trip_builder.png"
              videoAlt="somethting"
            />
            <CaseOverview
              title={`Overview`}
              contentLarge={`Re-do the discovery world trekking’s website into a web app where the users could book their desired trip based on their various interests, agents could bring in their entire group of travelers, and the crew could access their travelers' information pre-trip for a smooth onboarding in their journey.`}
              content={`Discovery World Trekking(DWT) is a pioneering travel agency based in Nepal. They had been serving travelers from Europe, Australia, the US, and other Western countries. Unfortunately, the DWT website had an inferior information architecture with a vast lineup of trips and packages. All the payments would carry out a manual bank-to-bank transfer and not be handled by the website. They felt their brand was not reflecting "who they are" in the website and how they operate. On the business side, they wanted all their travelers' information to be handy and onboard them smoothly when they arrived in Nepal.`}
            />
            <CaseSnippet
              Role={[
                {
                  content: `Role`,
                },
                {
                  content: `Project Lead`,
                },
                {
                  content: `Lead Designer`,
                },
                {
                  content: `QA & Front-end development`,
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
                  content: `React`,
                },
                {
                  content: `Testing`,
                },
              ]}
              Timeline={[
                {
                  content: `Timeline`,
                },
                {
                  content: `6 months`,
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
              largeContent={`<p>I worked on redefining the information architecture, and content placement, improving the trip content strategies, and built 4 main features: a multiple-user management system, a custom trip planner, tiered payments with group discount tiers, and a live search for easy content access.</p>`}
            />
            <CaseGeneric
              title={`A custom trip builder.`}
              content={`<p>This dynamic form lets the user customize the trips based on their own need and specific preference. Especially, this eliminates the back-and-forth manual communication that the crew would do with the user over email.</p>`}
            />
            <figure
              className="caseImage caseImage--medium"
              style={{ marginTop: "-30px" }}
            >
              <img src={tripBuilder} alt={`Bryan Dulaney Last Door`} />
            </figure>
            <CaseGeneric
              title={`User management for agents and groups of users.`}
              content={`
              <p>Most of the trips run by the discovery world trekking are in groups. Even most solo travelers prefer joining a group. This exists because of the remote trekking routes and fostering of the group trek culture. They follow most trips' traditional group trekking practice as a base package. </p>
              <p>To help users smoothen their journey with their companions, I designed this user management system where one user could book the trip for their group and invite all of their friends to the portal. And that goes the same for the travel agents. The travel agents can book a trip and onboard all their travelers.</p>
              <p>Why do we need to onboard the users on the system?</p>
            `}
            />
            <figure
              className="caseImage caseImage--medium"
              style={{ marginTop: "-30px" }}
            >
              <img src={tripBuilder} alt={`Bryan Dulaney Last Door`} />
            </figure>
            <CaseGeneric
              title={`Search`}
              content={`
              <p>We serve different users with their unique needs. Users who know what they need, those that know half the information, those that are looking for information, and those who are just window shopping. To cater to all these users, I implemented a live search that could filter through the keywords, content, or any word and find a relevant article, page, trip, or any page or section on the site.</p>
              <p>Why do we need this? – Upon analyzing the analytics, user interviews, and client feedback, we found that most of the users who make a trip with DWT go through extensive research independently. That's because the trekking trips offered by local & international competitors have very competitive services and different routes and serve a different experience. So, our significant user base would use the search to find information rather than scanning the navigation. This is proved by the heatmap that we generated later from Hotjar.</p>
            `}
            />
            <figure
              className="caseImage caseImage--medium"
              style={{ marginTop: "-30px" }}
            >
              <img src={tripBuilder} alt={`Bryan Dulaney Last Door`} />
            </figure>
          </article>
        </Layout>
      </main>
    )
  }

export default Dwt
