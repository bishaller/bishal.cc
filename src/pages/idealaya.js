// Defaults
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Modules
import CaseBanner from "../components/Case/caseBanner"
import CaseOverview from "../components/Case/caseOverview"
import CaseGeneric from "../components/Case/caseGeneric"
import CaseImage from "../components/Case/caseImage"
import CaseTitle from "../components/Case/caseTitle"
import { motion } from "framer-motion"
import { childVariants } from "../components/AnimatedSection"

// import AnimatedSection, { childVariants} from "../components/AnimatedSection"
// import CaseVideo from "../components/case/caseVideo"

// Images
import ImgBanner from "../images/dwt/dwtBanner.webp"
import ImgOverview from "../images/dwt/dwtOverview.webp"
import largeImage1 from "../images/dwt/dwtLargeOne.webp"
import ImgProcess from "../images/dwt/dwtProcess.webp"
import ImgCompAnalysis from "../images/dwt/dwtCompetitiveAnalysis.webp"
import ImgPrimaryResearch from "../images/dwt/dwtPrimaryResearch.webp"
import ImgProblems from "../images/dwt/dwtProblems.webp"
import ImgSolutions from "../images/dwt/dwtStrategy.webp"

const GenericImage = {
  width: "100%",
}

const Dwt = () => {
  return (
    <main>
      <Seo
        title="Discovery World Trekking UX Case Study | Bishal Mishra"
        description="UX Case Study for Discovery World Trekking, a travel agency based in Nepal. I designed a website for them to help them sell their trekking packages online."
      />
      <Layout >
        <article className="case">
          <CaseBanner
            title={`Discovery World`}
            titleContent={`Discovery World`}
            intro={`Defining the travel experience from the ground up for three distinct users: travelers, agents and sherpas.`}
            image={ImgBanner}
          >
          </CaseBanner>
          <CaseOverview
            Title={`Overview`}
            Image={ImgOverview}
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
            Content={`<p>Kicked off the project with initial research, planned the project in phases, launched them one by one, and kept working on design tests, reviews, iteration, adding features, and publishing the updates on design by rectifying the mistakes till 2022.</p>`}
            Image={ImgProcess}
          />

          <CaseGeneric
            Title={`<span>Research:</span><br/> Unfolding what’s known and what’s not`}
            Content={`
              <h3>Secondary Research</h3>
              <p>I got my hands dirty in research papers and multiple case studies on large-scale travel applications such as Airbnb, Booking.com, Tourradar, Lonely Planet, etc. This helped me identify the possible features that we can use in our product, failures that can be avoided, what should be prioritized, functions, technologies, and APIs that are available, and so on.</p>
              <p>Additionally, I dived deep into the current site, analyzing the layout, structure, information architecture, analytics, ad campaigns, etc. This helped me determine the audience distribution, sales distribution, popular activities, competitors, web presence, etc.</p>
              <p>Moving on, I performed a thorough Competitive Analysis with a few similar brands working on the same domain and providing similar services to their clients. I did this to identify commonalities among competitors and gather valuable insights for building our product. This later on also helped me develop strategies to distinguish our brand from them.</p>
            `}
            Image={ImgCompAnalysis}
          />

          <CaseGeneric
            Content={`
              <h3>Primary Research</h3>
              <p>During this phase, I actively engaged in a series of semi-structured interviews, a strategic approach that provided deep insights into the project's dimensions. Stakeholder involvement was vital, encompassing diverse perspectives, including tour guides, business owners, past trekkers who used the booking system, B2B tour agents, and seasoned webmasters responsible for the platform's upkeep.</p>
              <p>Conversations with tour guides illuminated the practical intricacies of trekking, highlighting potential areas for improvement. Insights from business owners aligned technical decisions with overarching objectives. Valuable pain points were unveiled through dialogues with past trekkers, guiding user experience enhancements. Input from B2B tour agents enriched my understanding of industry relationships, refining platform features accordingly. Lastly, webmasters' technical viewpoints were instrumental in rounding out the comprehensive background.</p>
            `}
            Image={ImgPrimaryResearch}
          />

          <CaseGeneric
            Title={`<span>Problems:</span><br/>
            Narrowing down to increase focus `}
            Content={`
              <p>Because the site is too huge, I could see too many opportunities that I can take care of. However, it would only be ideal for addressing a limited set of problems as I could only solve a finite set of issues because of multiple constraints within the limited budget, tech, and time-space.</p>
            `}
            Image={ImgProblems}
          />

          <CaseGeneric
            Title={`Questions, Possible Solutions, & Design Strategy`}
            Content={`
              <p>Because the site is too huge, I could see too many opportunities that I can take care of. However, it would only be ideal for addressing a limited set of problems as I could only solve a finite set of issues because of multiple constraints within the limited budget, tech, and time-space.</p>
            `}
            Image={ImgSolutions}
          />

          <CaseTitle
            Title={`Solutions:`}
          />

          <CaseGeneric
            Title={`Simplifying search over 300+ extensive trips, step-by-step.`}
            Content={`
              <p>We serve different users with their unique needs. Users know what they need, those who know half the information, those who are looking for information, and those who are just window shopping. To cater to all these users, I implemented a live search that could filter through the keywords, content, or any word and find a relevant article, page, trip, or any page or section on the site.</p>
              <p>Why do we need this? – Upon analyzing the analytics, user interviews, and client feedback, we found that most of the users who make a trip with DWT go through extensive research independently. That's because the trekking trips offered by local & international competitors have very competitive services and different routes and serve a different experience. So, our significant user base would use the search to find information rather than scanning the navigation.</p>
            `}
            Image={ImgSolutions}

          >
            <div className="siteContainer siteContainer--hr">
              <motion.img
                src={ImgSolutions}
                key={ImgSolutions}
                style={GenericImage}
                variants={childVariants}
              >
              </motion.img>
            </div>
          </CaseGeneric>

        </article>
      </Layout>
    </main>
  )
}

export default Dwt
