// Defaults
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { motion } from "framer-motion"

// Modules
import CaseBanner from "../components/case/caseBanner"
import CaseOverview from "../components/case/caseOverview"
import CaseGeneric from "../components/case/caseGeneric"
import CaseImage from "../components/case/CaseImage"
// import CaseVideo from "../components/case/caseVideo"

// Images
import bannerImage from "../images/dwt/dwtBanner.webp"
import overviewImage from "../images/dwt/dwtOverview.webp"
import largeImage1 from "../images/dwt/dwtLargeOne.webp"

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
            titleContent={`Discovery <br> World`}
            intro={`Defining the travel experience from the ground up for three distinct users: travelers, agents and sherpas.`}
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
            Title={`Redefining travel experience for three distinct users`}
            LargeContent={`<p>Re-do the discovery world trekking’s website into a web app where the users could book their desired trip based on their interests, agents could bring in their entire group of travelers, and the crew could access their travelers' information pre-trip for a smooth onboarding in their journey.</p>`}
            Content={`<p>Discovery World Trekking(DWT) is a pioneering travel agency based in Nepal. They had been serving travelers from Europe, Australia, the US, and other Western countries. Unfortunately, the DWT website had an inferior information architecture with a vast lineup of trips and packages. All the payments would carry out a manual bank-to-bank transfer and not be handled by the website. They felt their brand was not reflecting "who they are" in the website and how they operate. On the business side, they wanted all their travelers' information to be handy and onboard them smoothly when they arrived in Nepal.</p>`}
          />

          <CaseImage
            LargeImage={largeImage1}
          />


          {/*  <figure
            className="caseImage caseImage--medium"
            style={{ marginTop: "-30px" }}
          >
            <motion.img
              src={tripBuilder}
              key={tripBuilder}
              placeholder="blurred"
              initial={{ x: -100, y: -100, opacity: 0 }}
              animate={{ x: "0", y: "0", opacity: 1 }}
              exit={{ x: -100, y: -100, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                restDelta: 0.005
              }}
            >

            </motion.img>
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
            <motion.img
              src={tripBuilder}
              key={tripBuilder}
              placeholder="blurred"
              initial={{ x: -100, y: -100, opacity: 0 }}
              animate={{ x: "0", y: "0", opacity: 1 }}
              exit={{ x: -100, y: -100, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                restDelta: 0.005
              }}
            >

            </motion.img>
            </figure>

          <CaseVideo
            videoID={`833883367`}
            videoImage={tripBuilder}
            videoAlt="somethting"
          /> */}
        </article>
      </Layout>
    </main>
  )
}

export default Dwt
