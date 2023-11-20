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
import ImgDwtOldSite from "../images/dwt/dwtOldSite.webp"
import ImgDWTNavProcess from "../images/dwt/dwtNavProcess.webp"
import ImgDwtNavEvolvement from "../images/dwt/dwtNavEvolvement.webp"
import ImgDwtSearch01 from "../images/dwt/dwtSearch01.webp"
import ImgDwtSearch02 from "../images/dwt/dwtSearch02.webp"
import ImgDwtSearch03 from "../images/dwt/dwtSearch03.webp"
import ImgDwtDashboard01 from "../images/dwt/dwtDashboard01.webp"
import ImgDwtDashboard02 from "../images/dwt/dwtDashboard02.webp"
import ImgDwtDashboard03 from "../images/dwt/dwtDashboard03.webp"
import ImgDwtDashboard04 from "../images/dwt/dwtDashboard04.webp"
import ImgDwtTripModules from "../images/dwt/dwtTripModules.webp"
import ImgDwtTripPlanner01 from "../images/dwt/dwtTripPlanner01.webp"
import ImgDwtTripPlanner02 from "../images/dwt/dwtTripPlanner02.webp"


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
            Narrowing down to increase focus`}
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
            Title={`Detailed Work:`}
          />

          <CaseGeneric
            Title={`Accessing complex information with simplified navigation`}
            Content={`<p>By the time we hopped into this project, I had already worked on more than 50+ travel websites, and all the combined research and tests done on those projects gave us a confident sense that we needed to simplify our content navigation system to make sure our users find the intended information with their intuition.</p>
                      <p>A crucial point for us to start was we should not be oversimplifying the menu or designing a distinctive menu from their competitors. So we took a mixed route–sorting, speculative design, testing, and revising methods to perfect our navigation.</p>`}
            Image={ImgDwtOldSite}
            customMargin="60px"
          />

          <CaseGeneric
            Content={`<p>I started with "trying to make sense" of the pages, categories, trips, and informational pages by grouping them. Then, I turned the sorted cards into possible flows to explore how users could navigate the website. The goal is to accommodate the window shopper, experienced, and newborn users.</p>`}
            customMargin="30px"
          />

          <CaseImage
            LargeImage={ImgDWTNavProcess}
            customMargin="30px"
          />

          <CaseGeneric
            Content={`<p>Over time, I did multiple in-person usability and tree tests. On top of that, I used tools like Hotjar and Heap for long-run tests and then kept revising the navigation and the journey to find the information on the website.</p>`}
            customMargin="60px"
          />

          <CaseImage
            LargeImage={ImgDwtNavEvolvement}
            customMargin="60px"
          />

          <CaseGeneric
            Content={`
                      <p>Talking about the trip page, which is the primary source of information for the user, a single trip page has an overview, snapshot content, numeric section, subsections, and nested information. Recognizing the challenge posed by the diverse and extensive content, I introduced different breaks in the design pattern to ensure a seamless user journey. A secondary navigation bar was incorporated, replacing the main header, facilitating improved access to the in-page content and enhancing the overall navigational experience.</p>
                      <p>Navigating the intricacies of the body content, especially when dealing with dynamic factors such as weather, rules and regulations, road conditions, changing permits, and seasonal variations, presented a unique set of challenges. To address this, I implemented a minute snapshot content strategy. This approach empowers users with a quick and informative overview, streamlining their experience and alleviating the need to delve into lengthy paragraphs. By weaving together these design elements, the trip page emerges as a repository of information and a user-friendly platform that balances depth and brevity.</p>
                    `}
            customMargin="60px"
          />


          <CaseImage
            LargeImage={ImgDwtTripModules}
          />

          <CaseGeneric
            Title={`Simplifying search over 300+ extensive trips, step-by-step.`}
            Content={`
                <p>We serve different users with their unique needs. Users know what they need, those who know half the information, those who are looking for information, and those who are just window shopping. To cater to all these users, I implemented a live search that could filter through the keywords, content, or any word and find a relevant article, page, trip, or any page or section on the site.</p>
                <p>Why do we need this? – Upon analyzing the analytics, user interviews, and client feedback, we found that most of the users who make a trip with DWT go through extensive research independently. That's because the trekking trips offered by local & international competitors have very competitive services and different routes and serve a different experience. So, our significant user base would use the search to find information rather than scanning the navigation.</p>
                <p>Initially, I opted for a filter-based search system because the developers were dealing with technical limitations, causing headaches. The trip data I was working with was dynamic, and keeping things updated in real time was tough. Building a filter-based search allowed me to work within these constraints, enabling users to effectively narrow their search results by applying filters like location and activity. While this approach was a reasonable compromise, it needed more responsiveness and user-friendliness, which I ultimately aimed for.</p>
              `}
            Image={ImgDwtSearch01}
            customMargin="60px"
          />

          <CaseGeneric
            Content={`
              <p>As my project evolved and developers accelerated, I seized the opportunity to implement a live suggested search feature. This shift aimed to provide users with a more dynamic and engaging search experience, allowing them to view relevant search terms as they typed. This enhanced content discoverability and streamlined the search process, as confirmed by HotJar data. Observing user data input and search patterns, I recognized a broader scope of user interests, spanning topics related to location, travel, booking, and company information. Consequently, I developed a robust live search functionality, clearing technical hurdles and enabling users to fully immerse themselves in the search experience.</p>
            `}
            customMargin="60px"
          />

          <CaseImage
            LargeImage={ImgDwtSearch02}
            customMargin="60px"
          />

          <CaseGeneric
            Content={`
              <p>So, I took the plunge and went all-in on a full-fledged live search system. This was a game-changer. It meant that users could get real-time updates on their searches, which was essential given the constantly changing data. It was a journey from filter-based to live suggested search and finally to a full-blown live search, all driven by my determination to deliver the best user experience possible and overcome those initial technical hurdles.</p>
            `}
            customMargin="60px"
          />
          <CaseImage
            LargeImage={ImgDwtSearch03}
          />

          <CaseGeneric
            Title={`Bespoke trips: One size doesn’t fit for all!`}
            Content={`
              <p>When 90% of the users were asking for changes in itineraries or some sort of modification, I recognized the essence of the trip customization feature as the primary entry point for users embarking on their journey with our team. Acknowledging that each traveler possesses unique preferences and may need to be better-versed in the plethora of customizable options available, I sought to create an innovative solution that not only streamlines the booking process but also serves as a valuable avenue for understanding user needs and effectively upselling our services.</p>
            `}
            Image={ImgDwtTripPlanner01}
            customMargin="50px"
          />

          <CaseGeneric
            Content={`
              <p>To address these objectives, I conceptualized and meticulously designed a dynamic and interactive form, the cornerstone of our custom trip builder. This form is a user-friendly gateway, empowering individuals to tailor their trips based on their needs and preferences. By embedding a versatile range of options within the form, users can effortlessly navigate choices that align with their travel aspirations.</p>
            `}
            Image={ImgDwtTripPlanner02}
            customMargin="60px"
          />

          <CaseGeneric
            Content={`
              <p>Implementing the custom trip builder has revolutionized both the user and client experience, significantly streamlining the trip customization process and reducing potential delays and miscommunications. Back-and-forth emailing has been reduced by 67%. This tool efficiently captures user preferences and provides valuable insights into our clientele's diverse needs, allowing for a more personalized trip-planning approach. The integration of intelligent upselling has enhanced the overall user experience and contributed to increased revenue generation. We have effectively capitalized on opportunities to showcase additional services and offerings by presenting relevant and enticing options based on user inputs. According to our stakeholder Paul, they have been able to revise and update the trip itineraries based on the customization users prefer. This adds value to the user experience and is a strategic business driver.</p>
            `}
          />

          <CaseGeneric
            Title={`User management for agents & groups of users.`}
            customMargin="60px"
            Content={`
              <p>Most of the trips run by the Discovery World trekking are in groups. Even most solo travelers prefer joining a group. This exists because of the remote trekking routes and the fostering of the group trek culture. They follow most trips' traditional group trekking practice as a base package.</p>
              <p>To help users smoothen their journey with their companions, I designed this user management system where one user could book the trip for their group and invite all of their friends to the portal. And that goes the same for the travel agents. The travel agents can book a trip and onboard all their travelers.</p>
              <p><strong>Why do we need to onboard the users on the system? Why can’t we just do a guest checkout?</strong></p>
              <ol>
                <li>For group joining trips, we could let each traveler know about their travel companions, and they could connect with each other before joining the trip.</li>
                <li>While we onboard the users on the system, it eliminates all the manual work the DWT crew would do on the backend. Once the users are in, the system asks users to upload relevant travel documents and emergency contacts so the crew can get permits in national parks or do other official chores.</li>
                <li>We could also maintain a missing database of users on the previous site. This would then eliminate the manual communication of reviews and post-trip experience, and the company could also offer discount tiers for returning users (or agents).</li>
              </ol>
              `}
          />

          <CaseImage
            LargeImage={ImgDwtDashboard01}
            customMargin="30px"
          />
          <CaseImage
            LargeImage={ImgDwtDashboard02}
            customMargin="30px"
          />
          <CaseImage
            LargeImage={ImgDwtDashboard03}
            customMargin="30px"
          />
          <CaseGeneric
            Content={`
              <p>Most of the trips run by the Discovery World trekking are in groups. Even most solo travelers prefer joining a group. This exists because of the remote trekking routes and the fostering of the group trek culture. They follow most trips' traditional group trekking practice as a base package.  To help users smoothen their journey with their companions, I designed this user management system where one user could book the trip for their group and invite all of their friends to the portal. And that goes the same for the travel agents. The travel agents can book a trip and onboard all their travelers.</p>
            `}
            customMargin="30px"
          />
          <CaseImage
            LargeImage={ImgDwtDashboard04}
          />
        </article>
      </Layout>
    </main>
  )
}

export default Dwt
