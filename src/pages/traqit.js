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
import phaseOne from "../images/traqit/traqitPhaseOne.webp"
import elements from "../images/traqit/traqitElements.webp"
import modernizedUI from "../images/traqit/traqitModernizedUI.webp"

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
            Title={`<span>The Problem:</span><br>Old, outdated, buggy and a frustrating software`}
            LargeContent={`<p>TraQ-IT has significantly aged, with its outdated features and persistent bugs causing <strong>daily user frustration</strong>. The bugs and reliance on an older .NET framework made it difficult for the tool to meet modern design, usability, and cross-platform needs, leading to disrupted workflows and decreased efficiency. </p>`}
            Content={`<p>Built initially on .NET frameworks, TraQ-IT's technology base is now a significant obstacle to its progress and user satisfaction. The forms, actions, and processes—once the backbone of its project management capabilities—have become outdated. Designed in a different technological era, they fail to align with current user expectations for intuitive interfaces and seamless experiences across various devices. This misalignment isn't just a minor issue; it's a significant problem that frustrates users and hampers their productivity, highlighting the tool's struggle to adapt to the evolving digital landscape.</p>`}
            customMargin="0"
          />

          <CaseGeneric
            Title={`<span>Approach:</span><br>Prioritizing user transition over outright software redesign`}
            LargeContent={`<p>This UX case study is about the journey of evolving TRAQ-IT's event management software, a staple tool for tradeshow organizers and corporate event managers since 1998. My role in this transformative process was pivotal, enclosing the detailed evaluation of existing functionalities, addressing critical usability issues, and innovating upon a 20+ year legacy product.</p>`}
            Content={`<p>I led the project strategically and segmented it into phases, with each stage thoughtfully designed to transition users seamlessly from the familiar to the futuristic. I have detailed my contributions in navigating the complexities of this transition, balancing modern design principles with user familiarity, managing stakeholder inputs, and overcoming challenges such as limited budgets and extended development cycles. The case study highlights the impact of these changes on user efficiency and satisfaction, emphasizing the value of user experience in software evolution.</p>`}
            Image={transitionImage}
          />

          <CaseGeneric
            Title={`<span>The immediate action</span>`}
            LargeContent={`<p>I took an essential first step toward enhancing the current state of the product. This stage involved a deep dive into the software, where my focus was sharply on identifying and addressing several key areas that demanded immediate attention for improvement.</p>`}
            Image={phaseOne}
            customMargin={"60px"}
          />

          <CaseGeneric
            Content={`
            <ol>
              <li><strong>Bug Identification & Fixing:</strong> I took the help of two software engineers, and I meticulously scanned the software to uncover any bugs alongside them. This search was broad and detailed, utilizing automated testing tools alongside manual checks to ensure no stone was left unturned. I aimed to identify glitches or errors that could disrupt the user experience.</li>
              <li><strong>Usability Issues:</strong> I also dedicated significant effort to analyzing the software's usability. This meant critically evaluating the interface design, the ease of navigation, and how users interact with the product. I aimed to pinpoint any elements that might cause frustration or confusion to streamline the user's journey. Then I divided all of them into different categories - quick fix, needs time to fix or revamp. This allowed me to segregate what to improve and when.</li>
              <li><strong>Essential Functions Review:</strong> A thorough examination of the core functionalities of the software was necessary. I assessed whether these foundational elements were operational and effectively meeting our users' needs and expectations. This review was pivotal in ensuring the product's backbone was solid and reliable.</li>
              <li><strong>UX Audit:</strong> Conducting a comprehensive UX (User Experience) audit was vital to this phase. This audit was about understanding the overall user experience, identifying the strong points, and pinpointing areas that needed enhancement. I needed to grasp how users interacted with the product and where I could improve to boost satisfaction and usability.</li>
            </ol>
            <p>Following these evaluations, I compiled a report outlining the critical findings. This report was a roadmap for the immediate fixes required to get the product back on its feet, prioritized by their impact on user experience and product stability.</p>
            <p>My approach in this phase was rectifying what was broken and establishing a solid foundation for future enhancements. The goal was swiftly addressing the most pressing issues plaguing our software, ensuring that our product met and exceeded user expectations. This phase was fundamental in providing our stakeholders a stable, efficient, and enjoyable experience, laying the groundwork for continuous improvement and innovation.</p>
            `}
          />

          <CaseGeneric
            Title={`The Transition App`}
            LargeContent={`<p>I needed to strategize the transition of the users from using the old crappy application to a simple, task-focused one. This is why I decided to modernize the application before giving them a totally new software.</p>`}
            Content={`<p>In my journey to modernize our application, I created a version with an updated UI, refined interaction changes, and minimal, improved alterations in the user and information flows. My intention was clear: to facilitate the seamless execution of daily tasks by our users, leveraging the sleekness of modern UIs and functionalities while stripping away the unnecessary clutter that had become synonymous with the older app.</p>`}
            Image={elements}
            customMargin={"60px"}
          />

          <CaseGeneric
            Content={`<p>Collaborating closely with the development team, we crafted an MVP featuring a revamped UI. This new interface was infused with modern components yet retained a semblance of the previous design. This strategic choice was driven by a deep consideration for our current user base, notably those of advanced age, to ensure they found the new interface reassuringly familiar, akin to the comfort of an old friend, yet refreshed with the vitality of the unknown.</p>`}
            Image={elements}
            customMargin={"60px"}
          />

          <CaseImage
            Image={elements}
            customMargin={"60px"}
          />

          <CaseGeneric
            Content={`<p>In modernizing our app, I prioritized a balance between usability and the familiarity valued by our users. The redesign subtly integrated modern aesthetics with the original interface's layout to avoid alienating long-standing users. Efforts focused on enhancing usability and efficiency, with minor interaction adjustments for an intuitive user experience. Through collaborative development and user feedback, we crafted an MVP that respects our app's legacy while meeting contemporary expectations. This approach honored user loyalty while elevating their interaction with the app, ensuring a seamless transition to the modernized version.</p>`}
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