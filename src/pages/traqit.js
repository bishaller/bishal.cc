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
// import CaseVideo from "../components/case/caseVideo"

// Images
import bannerImage from "../images/traqit/traqitBanner.webp"
import overviewImage from "../images/traqit/traqitOverview.webp"
import problemImage from "../images/traqit/traqitProblem.webp"
import transitionImage from "../images/traqit/traqitTransition.webp"
import phaseOne from "../images/traqit/traqitPhaseOne.webp"
import elements from "../images/traqit/traqitElements.webp"
import modernizedUI from "../images/traqit/traqitModernizedUI.webp"
import revamp from "../images/traqit/traqitRevamp.webp"
import flowOne from "../images/traqit/traqitFlowOne.webp"
import flowTwo from "../images/traqit/traqitFlowTwo.webp"
import flowThree from "../images/traqit/traqitFlowThree.webp"
import colors from "../images/traqit/traqitColors.webp"
import wireframe from "../images/traqit/traqitWireframes.webp"
import module from "../images/traqit/traqitModules.webp"
import iteration from "../images/traqit/traqitIterations.webp"
import UI from "../images/traqit/traqitUI.webp"

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
            customMargin={"60px"}
          />

          <CaseImage
            LargeImage={modernizedUI}
          />

          <CaseGeneric
            Content={`<p>In modernizing our app, I prioritized a balance between usability and the familiarity valued by our users. The redesign subtly integrated modern aesthetics with the original interface's layout to avoid alienating long-standing users. Efforts focused on enhancing usability and efficiency, with minor interaction adjustments for an intuitive user experience. Through collaborative development and user feedback, we crafted an MVP that respects our app's legacy while meeting contemporary expectations. This approach honored user loyalty while elevating their interaction with the app, ensuring a seamless transition to the modernized version.</p>`}
          />

          <CaseTitle
            Title={`The Redesign`}
          />

          <CaseGeneric
            Title={`Navigating the user & stakeholder dynamics with a unified design system`}
            Content={`<p>Following a comprehensive preparation phase that involved multiple semi-structured interviews with the users and the clients, an in-depth analysis of the software, and thorough ground research, I introduced the concept for a thoroughly revamped Traqit. In this stage, I dived deep into revising the user flows and wireframes and implemented ideas designed to breathe new life into Traqit.</p>`}
            customMargin={"60px"}
          />

          <CaseImage
            LargeImage={revamp}
            customMargin={"60px"}
          />

          <CaseGeneric
            Content={`<p>Revising the user flows was a high priority in revamping Traqit, as it directly impacted the application's usability and overall user experience. Users had to roam around the application to figure out essential tasks. The initial phase of understanding the current user flows revealed several inefficiencies and areas for improvement that, when addressed correctly, could significantly enhance the way users interacted with Traqit.</p>`}
          />

          <CaseImage
            LargeImage={flowOne}
            customMargin={"30px"}
          />
          <CaseImage
            LargeImage={flowTwo}
            customMargin={"30px"}
          />
          <CaseImage
            LargeImage={flowThree}
            customMargin={"60px"}
          />

          <CaseGeneric
            Content={`<p>Recognizing these flaws allowed me to identify opportunities to streamline processes, reduce user frustration, and improve task completion times. This involved reimagining the journey from the user's perspective, removing unnecessary steps, and simplifying complex processes to foster a more engaging and productive user experience.</p>`}
          />

          <CaseGeneric
            Title={`Sketching, Wireframing and Stakeholder Discussions`}
            Content={`
              <p>After identifying the initial inefficiencies and areas for improvement in Traqit's user flows, I moved on to the next crucial steps in enhancing the app's usability and user experience: wireframing, discussions, and testing.</p>
              <p><strong>Wireframes</strong><br>
              I started with wireframing, which is essential in visualizing the new user journeys. This process was about more than just sketching screens; it was about bringing the identified opportunities for improvement into a tangible form. Here's why wireframing was so important to me:</p>
              <ol>
                <li>Clarifying User Features: It helped me detail the layout of each screen and how users would interact with them. This clarity was crucial in understanding how the new flows would actually work.</li>
                <li>Prioritizing Content: I could prioritize information and features based on user needs through wireframing, ensuring that essential tasks were easily accessible.</li>
                <li>Iterative Design: This stage allowed for quick iterations. If I received initial feedback or gained new insights, making adjustments was straightforward, without the need to develop high-fidelity prototypes immediately.</li>
              </ol>
              <p><strong>Discussions</strong><br>
              Throughout the wireframing process, engaging in discussions was vital. I involved the early-stage development teams, users, and clients to get preliminary feedback on the wireframe.
              </p>
              <p><strong>Testing</strong><br>
              After refining the wireframes based on the feedback from these discussions, I moved on to usability testing. This step was critical for validating the new user flows and designs. My approach to testing involved:</p>
                
              <ol>
                <li>Prototype Creation: I transformed the refined wireframes into clickable prototypes to simulate the revised user journeys.</li>
                <li>User Testing Sessions: I conducted semi-structured testing sessions with a broader user base. These sessions were designed to collect both qualitative and quantitative data on the user experience with the prototypes.</li>
                <li>Feedback Analysis: After collecting feedback, I meticulously analyzed it to identify patterns, pinpoint usability issues, and understand where users found satisfaction or faced difficulties.</li>
                <li>Iterative Refinement: Based on this analysis, I made iterative design improvements. This often meant revisiting wireframing for specific flows that required significant changes based on user feedback.</li>
              </ol>
            `}
            customMargin={`60px`}
          />

          <CaseImage
            LargeImage={wireframe}
          />

          <CaseGeneric
            Title={`Defining the Interface for the Revamp`}
            Content={`<p>My journey with Traqit was a transformative experience, one that taught me the value of user experience in software evolution. I navigated the complexities of transitioning users from the familiar to the futuristic, balancing modern design principles with user familiarity, managing stakeholder inputs, and overcoming challenges such as limited budgets and extended development cycles. The case study highlights the impact of these changes on user efficiency and satisfaction, emphasizing the value of user experience in software evolution.</p>`}
            customMargin={"60px"}
          />

          <CaseImage
            LargeImage={colors}
          />


          <CaseGeneric
            LargeContent={`<p>The development and refinement of Traqit's interface were guided by several foundational principles, each playing a crucial role in crafting a user experience that was intuitive, engaging, and accessible to a broad audience. Here's a closer look at these guiding principles:</p>`}
          />

          <CaseGeneric
            Title={`Visual Language`}
            Content={`<p>My approach to Traqit's visual language was meticulous, aiming to balance aesthetic appeal and functional clarity. I chose a color scheme that resonated with the brand's identity and served practical purposes, such as guiding users through the app and indicating interactive elements. Typography was another area where I paid close attention, selecting fonts that were visually harmonious and readable across various devices and screen sizes. Iconography was crafted to be intuitive, ensuring that symbols were easily recognizable and facilitating a smoother user journey. These elements of visual language were harmoniously integrated to prepare an interface that was visually cohesive and inviting.</p>`}
          />
          <CaseGeneric
            Title={`Modular Design Approach`}
            Content={`<p>Adopting a modular design approach was a strategic decision aimed at enhancing the scalability and maintainability of Traqit's interface. By breaking the UI into smaller, reusable components, I achieved high consistency across the application while streamlining the development process. This modularity facilitated rapid prototyping and iteration and simplified updates and extensions to the app's functionality. Designing each module with a clear purpose, from navigation to user input forms, allows for easy integration and reuse, streamlines the workflow, and supports a cohesive application architecture.</p>`}
            customMargin={"30px"}
          />

          <CaseImage
            LargeImage={module}
          />

          <CaseGeneric
            Title={`Accessibility Considerations`}
            Content={`<p>From the outset, I embedded accessibility into the design process, underscoring my commitment to inclusivity. Following web accessibility standards and guidelines, such as WCAG, was crucial in making Traqit accessible to users with disabilities. This included implementing features like high-contrast color schemes for users with visual impairments and ensuring keyboard navigability for those who cannot use a mouse. Prioritizing accessibility meant striving to remove barriers to access, ensuring Traqit was usable and beneficial for the broadest possible audience.</p>`}
          />
          <CaseGeneric
            Title={`Interactive Elements`}
            Content={`The design of interactive elements was approached with the user's experience at the forefront. I focused on making buttons, sliders, toggles, and other visually distinct and user-friendly components. Feedback mechanisms, such as animations following user actions, reassured users that their inputs were recognized. My attention to the design and feedback of interactive elements was critical in making the software usable and engaging, encouraging users to interact confidently.`}
          />

          <CaseGeneric
            Title={`Iterations & Testing`}
            Content={`<p>With each iteration, I refined the interface based on feedback from users, discussions with stakeholders, and my own evolving understanding of the best user experience practices. This cycle of design, test, gather feedback, and refine was repeated multiple times, allowing me to progressively enhance the usability and aesthetic appeal of the app. Iteration was more than just a method; it was a mindset that embraced flexibility and continuous improvement. It enabled me to adapt to unexpected challenges and incorporate new insights, ensuring that the final product truly met the needs and expectations of its users. This iterative process was fundamental in transforming Traqit into an application that was not only functional but also a pleasure to use, reflecting a deep commitment to excellence in design and user experience.</p>`}
            customMargin={"60px"}
          />

          <CaseImage
            LargeImage={iteration}
            customMargin={"60px"}
          />

          <CaseImage
            LargeImage={UI}
          />

          <CaseTitle
            Title={`Conclusion`}
          />

          <CaseGeneric
            Title={`Successes and Learnings`}
            Content={`
            <ul>
              <li>The design process, client interactions, and teamwork have all contributed to my professional growth.</li>
              <li>We achieved a notable efficiency boost, with users spending 38% less time on task creation and event management.</li>
              <li>The landing page's conversion rate impressively hit 34% for new users, validating our design strategies.</li>
              <li>Feedback highlighted the redesigned KPIs' effectiveness, making data retrieval straightforward and reducing the need for extensive navigation.</li>
              <li>The positive user response to the software's features and its simplistic redesign affirmed the value of our user-centric approach.</li>
            </ul>
            `}
            customMargin={"60px"}
          />
          <CaseGeneric

            Title={`Challenges and Areas for Improvement`}
            Content={`
            <ul>
              <li>Budget constraints led to the omission of several planned steps, affecting the project's scope and potential.</li>
              <li>Increased stakeholder involvement in later design stages sometimes hindered creative freedom and decision-making.</li>
              <li>The extended project development cycle complicated the transition from phase 2 to phase 3, highlighting a need for greater agility and efficiency in our processes.</li>
              <li>In summary, the project was a blend of achievements and valuable lessons. The successes have been rewarding, while the challenges have provided clear directions for improvement. Moving forward, I aim to leverage these insights to enhance agility, creativity, and stakeholder collaboration in future projects.</li>
            </ul>
            `}
            customMargin={"60px"}
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