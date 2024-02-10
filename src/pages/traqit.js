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
import overviewImage from "../images/traqit/traqitOverview.webp"
import problemImage from "../images/traqit/traqitProblem.webp"
import transitionImage from "../images/traqit/traqitTransition.webp"
import dwtProcess from "../images/traqit/traqitBanner.webp"

const Traqit = () => {
  return (
    <main>
      <Seo
        title="Traqit Software UX Case Study | Bishal Mishra"
        description="UX Case Study for Discovery World Trekking, a travel agency based in Nepal. I designed a website for them to help them sell their trekking packages online."
      />
      <Layout >
        <article className="case">
          <CaseBanner
            title={`Event Management Simplified`}
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
                content: `Lead Designer`,
              },
              {
                content: `Project Co-ordinator`,
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
                content: `UX`,
              },
              {
                content: `Visual Design`,
              },
              {
                content: `Prototyping`,
              },
              {
                content: `Coding`,
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
                content: `5 months; part-time work`,
              },
              {
                content: `2018`,
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
            Title={`About the project`}
            LargeContent={`<p>This UX case study is about the journey of evolving TRAQ-IT's event management software, a leading developer and provider of software solutions for tradeshow organizers, corporate event managers, and exhibitors.<br><br>I played a crucial role in this transformative process, enclosing the detailed evaluation of existing functionalities, addressing critical usability issues, and innovating upon a 20+ year legacy product.</p>`}
            // Content={`<p>I led the project strategically and segmented it into phases, with each stage thoughtfully designed to transition users seamlessly from the familiar to the futuristic. I have detailed my contributions in navigating the complexities of this transition, balancing modern design principles with user familiarity, managing stakeholder inputs, and overcoming challenges such as limited budgets and extended development cycles. The case study highlights the impact of these changes on user efficiency and satisfaction, emphasizing the value of user experience in software evolution.</p>`}
          />

          <CaseGeneric
            Image={problemImage}
            Title={`<span>The Problem:</span> Old, outdated, buggy and a frustrating software`}
            LargeContent={`<p>TraQ-IT has significantly aged, with its outdated features and persistent bugs causing <strong>daily user frustration</strong>. The bugs and reliance on an older .NET framework made it difficult for the tool to meet modern design, usability, and cross-platform needs, leading to disrupted workflows and decreased efficiency. </p>`}
            Content={`<p>Built initially on .NET frameworks, TraQ-IT's technology base is now a significant obstacle to its progress and user satisfaction. The forms, actions, and processes—once the backbone of its project management capabilities—have become outdated. Designed in a different technological era, they fail to align with current user expectations for intuitive interfaces and seamless experiences across various devices. This misalignment isn't just a minor issue; it's a significant problem that frustrates users and hampers their productivity, highlighting the tool's struggle to adapt to the evolving digital landscape.</p>`}
            customMargin="0"
          />

          <CaseGeneric
            Title={`<span>Approach:</span> Prioritizing user transition over outright software redesign`}
            LargeContent={`<p>This UX case study is about the journey of evolving TRAQ-IT's event management software, a staple tool for tradeshow organizers and corporate event managers since 1998. My role in this transformative process was pivotal, enclosing the detailed evaluation of existing functionalities, addressing critical usability issues, and innovating upon a 20+ year legacy product.</p>`}
            Content={`<p>I led the project strategically and segmented it into phases, with each stage thoughtfully designed to transition users seamlessly from the familiar to the futuristic. I have detailed my contributions in navigating the complexities of this transition, balancing modern design principles with user familiarity, managing stakeholder inputs, and overcoming challenges such as limited budgets and extended development cycles. The case study highlights the impact of these changes on user efficiency and satisfaction, emphasizing the value of user experience in software evolution.</p>`}
            Image={transitionImage}
          />

          <CaseImage
            LargeImage={problemImage}
          />

          <CaseGeneric
            Title={`<span>Blank</span>Blank`}
            LargeContent={`<p>Blank</p>`}
            Content={`<p>Blank</p>`}
            Image={dwtProcess}
          />

          <CaseGeneric
            Title={`Blnk`}
            Content={`<p>Blank</p>`}
            Image={bannerImage}
          />

          <CaseGeneric
            Title={`Blank`}
            Content={`
              <p>Blank</p>
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

export default Traqit