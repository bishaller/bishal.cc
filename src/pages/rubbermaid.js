import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Modules
import CaseBanner from "../components/Case/caseBanner"
import CaseOverview from "../components/Case/caseOverview"
import CaseGeneric from "../components/Case/caseGeneric"
import CaseImage from "../components/Case/caseImage"
import CaseVideo from "../components/case/caseVideo"
// Images
import ImgBanner from "../images/rubbermaid/rubbermaidBanner.webp"
import ImgOverview from "../images/rubbermaid/rubbermaidOverview.webp"
import About from "../images/rubbermaid/rubbermaidAbout.webp"
import Process from "../images/rubbermaid/rubbermaidProcess.webp"
import Research from "../images/rubbermaid/rubbermaidResearch.webp"
import Prototype from "../images/rubbermaid/rubbermaidPrototype.jpg"

const Rubbermaid = () => {
  return (
    <main>
      <Seo title="Rubbermaid Case Study | Bishal Mishra"
        description="UX case study for rubbermaid app by Bishal Mishra." />
      <Layout>
        <article className="case">
          <CaseBanner
            title={`Tinder for tupper ware`}
            titleContent={`Rubbermaid’s purchase experience`}
            intro={`A bespoke guide for those shaping their living space anew, catering to both discerning decorators and those yet to define their household essentials.`}
            image={ImgBanner}
          />

          <CaseOverview
            Title={`Overview`}
            Image={ImgOverview}
            Role={[
              {
                content: `Role`,
              },
              {
                content: `UX Designer `,
              },
              {
                content: `Researcher`,
              }
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
              }
            ]}
            Timeline={[
              {
                content: `Timeline`,
              },
              {
                content: `6 weeks`,
              },
              {
                content: `2022`,
              },
            ]}
            Company={[
              {
                content: `Association`,
              },
              {
                content: `University work`,
              },
              {
                content: `Not associated with Rubbermaid.`,
              },
            ]}
          />

          <CaseGeneric
            LargeTitle={`Swipe-to-match app to find the perfect home storage solutions`}
            Content={`<p>Rubbermaid is an American manufacturer and distributor of household items. They're a big household market player and are best known for producing food storage containers and trash cans. Additionally, they make sheds, step stools, closets and shelving, laundry baskets, bins, air fresheners, and other household items.</p>`}
            Image={About}
          />

          <CaseGeneric
            LargeTitle={`The Design Process`}
            Content={`<p>My initial raid into user research was more than just gathering data; it was about building empathy and connecting on a human level. This foundation of insights guided me in crafting an intuitive and engaging e-commerce experience designed with the user at heart. The process was iterative, fueled by continuous feedback that allowed me to refine and adapt my approach with agility and sensitivity to user input. Sharing progress and findings became an opportunity to tell the story of our users, integrating their experiences and feedback into the evolution of the project. Every adjustment was a thoughtful response to fundamental human needs, making each step feel like a collaborative journey with the community. Finalizing the product was a significant milestone, yet it represented just one chapter in an ongoing dialogue with my users. This case study highlights my commitment to staying attuned to my audience's changing needs and preferences, ensuring that my solutions remain relevant and resonant.</p>`}
            Image={Process}
          />

          <CaseGeneric
            LargeTitle={`Research and Findings`}
            Content={`
            <p>In my research for launching Rubbermaid's e-commerce shop, I discovered a significant gap in consumer awareness. Despite Rubbermaid's strong sales on major platforms like Amazon, Walmart, and Target, many users must know the brand's extensive range beyond kitchen products. My findings also highlighted a general indifference towards Rubbermaid's social media efforts, though there's a positive note: some customers are interested in exploring Rubbermaid's other offerings. In physical retail environments, Rubbermaid enjoys prominent placement, capturing consumer attention at eye level across stores, which has undeniably contributed to its solid performance. This research has clarified that our upcoming online store must showcase Rubbermaid's entire product catalog and engage with our customers more effectively, enhancing their awareness and interest in the broader Rubbermaid brand.</p>
              <ul>
                <li>🔍 Conducted user interviews and surveys to understand user needs & preferences.</li>
                <li>📊 Analyzed user data to identify gaps in consumer awareness and engagement.</li>
                <li>📈 Identified opportunities to enhance user engagement and brand visibility.</li>
              </ul>
              <p><strong>Findings:</strong></p>
              <ul>
                <li>Finding: Users are not aware of any non-kitchen products from Rubbermaid.</li>  
                <li>Some user doen't care about Rubbermaid's social media pages.</li>  
                <li>Some will buy other Rubbermaid products.</li>  
                <li>Physical Stores: Placed well (eye level) in all the physical stores and available online in major stores like Target, Amazon, Walmart, etc.</li>  
            `}
            customMargin={`30px`}
          />

          <CaseImage
            LargeImage={Research}
          />

          <CaseGeneric
            Title={`Understanding the Problem`}
            LargeContent={`How might we enable users to find the right fit of household items products they need?`}
            Content={`
            <p>
              Rubbermaid has been selling its products traditionally and
              needs an online e-commerce shop. They have excellent
              performance in giants like Amazon, Walmart, Target, etc., but
              have yet to have an online store of their own.
            </p>
            <p>
              The brand currently relies on one specific category, i.e.,
              food containers. However, when we interviewed the users, we
              learned that they were more than happy to buy other products
              from Rubbermaid but had yet to know what Rubbermaid sold
              outside of food containers.
            </p>
            <p>
              The products Rubbermaid sells revolve around more of what they
              want to sell rather than what the users need.
            </p>`}
          />

          <CaseGeneric 
            Title={`The Solution`}
            LargeContent={`"Let the users swipe right or left to find the right fit of household items."`}
            Content={`
            <p>
              I am solving a specific use case where I am taking up a user trying to set up their apartment or any household category from scratch. However, this solution would still cater to users who have not decided what household items they need to organize their homes.
            </p>
            <p>
              I designed an app for Rubbermaid to let users find the perfect match of home organizational products they need. The users would sign up, select categories, and swipe through cards. Each card would show the items in specific categories; ideally, each would have 30-45 cards. So the users would swipe right for the things they have or will have in their home and swipe left if not, while users would also have options to custom-add the items not shown in the card. When the user is done swiping, the app suggests a list of products they need to organize all the items in their home or a specific category.
            </p>
            `}
          />

          <CaseGeneric
            Title={`Iterations & Testing`}
            Content={`
            <p>
              For the first round, I ran down the hall test with a couple of
              friends with my sketches. I realized that all items won't go
              in the same card swipes and had to introduce "categories" so
              that the users could minimize the swiping experience and
              choose to narrow their product search.
            </p>
            <p>
              After a few more paper tests with the Rubbermaid users (that
              match the persona), I moved ahead with the UI and tested that
              with 7 more users. Some were the same, and I chose some new
              users to test the UI. I found out that the "Where am I?" state
              in the card swipes was confusing for the users, and I opted to
              choose the Instagram story style indicator for more relevancy.
            </p>
            `}
          />

           <CaseVideo
            videoID={`916466215`}
            videoImage={Prototype}
            videoAlt="somethting"
          /> 
        </article>
      </Layout>
    </main>
  )
}
export default Rubbermaid
