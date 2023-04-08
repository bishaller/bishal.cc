import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
// import Casebanner from "../components/case/casebanner"

const Dwt = () => {
  return (
    <main>
      <Seo
        title="Discovery World Trekking UX Case Study | Bishal Mishra"
        description="UX Case Study for Discovery World Trekking, a travel agency based in Nepal. I designed a website for them to help them sell their trekking packages online."
      />
      <Layout>
        <article className="case">
          {/* <Casebanner
            title={`redefining 🌏 travel experience for three distinct 👩‍💻🕵️🧙‍♂️ users`}
            titleContent={`redefining <span>🌏</span> travel experience for three distinct <span>👩‍💻🕵️🧙‍♂️</span> users`}
          /> */}

          <div className="page">
            <div className="pageHeader">
              <div className="siteContainer siteContainer--small">
                <h1 className="pageHeader__title">
                  redefining travel experience for three distinct users
                </h1>
              </div>
            </div>

            <div className="pageBanner">
              <StaticImage
                src={"../images/dwt/dwt_banner.jpg"}
                alt=""
                width={5000}
                className=""
              />
            </div>

            <div className="pageSection">
              <div className="siteContainer siteContainer--small">
                <p>
                  <strong>Role</strong>
                  <br />
                  Project Lead, Research, UI Design, Prototyping, Usability
                  Testing, FrontEnd.
                </p>
                <p>
                  <strong>Company</strong>
                  <br />
                  Last Door Solutions
                </p>
                <p>
                  <strong>Type & Timeline</strong>
                  <br />
                  4months / Web App / 2019
                </p>
                <p>
                  <strong>Tools</strong>
                  <br />
                  Invision, Sketch, Miro, Google Meet, Zoom, Basecamp, Hotjar
                </p>
              </div>
            </div>

            <div className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">🏔️ About the Project</h2>
                <p>
                  While being at Last Door, I’ve worked with a ton of travel and
                  tour operators in Nepal. This is one of my favorite project as
                  it had a lot of missing links between users and the product,
                  and connecting them was challenging for me to find and meet
                  the needs for multiple user bases.
                </p>
                <p>
                  Discovery World Trekking(DWT) is a pioneering travel agency
                  based in Nepal. They had been serving travelers from Europe,
                  Australia, the US, and other western countries. Unfortunately,
                  the DWT website had an inferior information architecture, and
                  the team needed help to have a tiered payment from the client.
                  In addition, the crew wanted their travelers' information to
                  be handy and onboard them smoothly when they arrived in Nepal.
                </p>
              </div>
            </div>

            <div className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">🔍 Exploring the Problem</h2>
                <ul>
                  <li>
                    Current users couldn’t pay and book the trip from their
                    site.
                  </li>
                  <li>
                    Agent and group trips can only pay/book the trip manually.
                  </li>
                  <li>
                    Manual work load to plan the custom trips for extreme users.
                  </li>
                  <li>
                    Lack of a systemized traveler onboarding to the website and
                    destination, both created issues in handling business.
                  </li>
                </ul>
              </div>
            </div>

            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">🏹 Project Approach</h2>
              </div>

              <div className="siteContainer siteContainer--medium">
                <StaticImage
                  src={"../images/dwt/dwt_process.png"}
                  alt=""
                  width={5000}
                  className="pageImage pageImage--large"
                />
              </div>
            </section>

            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">🔬 Secondary Research</h2>
                <p>
                  Tourism is a sizable industry in Nepal. According to the data
                  from Ministry of Tourism–Nepal, around 70% of tourists are
                  from India, US, china, UK and Europe. Upon analyzing the
                  current site, we see that US, China and Europe are our
                  audience. Plus, major activities that tourists perform
                  includes trekking, mountain climbing, bird watching, kayaking,
                  canyoning, etc. Major local competitors utilize their
                  web-presence and the metadata to acquire customers and build
                  trust.
                </p>
              </div>
            </section>

            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">
                  🎙️ Stakeholder & User Interviews to understand business goals,
                  user pain points and define technical requirements
                </h2>
              </div>
              <div className="siteContainer siteContainer--small">
                <p>
                  Next, I conducted multiple, semi-structured stakeholder
                  interviews and user interviews. I took interviews of tour
                  guides, business owner, past trekkers (who booked their trip
                  through the site), B2B tour agents, Webmaster (who was taking
                  care of the past site for 3 years). Talking with different
                  associates of the product helped me understand the
                  perspectives and pain points of each user and business.
                </p>
                <p>
                  <strong>Business goals</strong>
                </p>
                <ul>
                  <li>
                    Enable agents/users to invite more travelers to the site.
                  </li>
                  <li>Generate cash flow through online bookings.</li>
                  <li>
                    Enable multiple pricing tiers, discounts based on group
                    size, etc.
                  </li>
                  <li>
                    Hook recurring travelers to the website and collect reviews.
                  </li>
                  <li>
                    Eliminate the manual work for bespoke trips and reduce the
                    time to confirm bookings.
                  </li>
                  <li>
                    Allow users to print every trip information available online
                    to increase brand’s reach.
                  </li>
                </ul>
                <p>
                  <strong>User needs & Pain points</strong>
                </p>
                <ul>
                  <li>
                    Access to clear and detail oriented day-to-day information.
                  </li>
                  <li>Hassle-free online booking.</li>
                  <li>
                    Frustrating booking experience due to confusing payment
                    channel, misunderstandings due to lack of post-booking
                    communication.
                  </li>
                </ul>
                <p>
                  <strong>Technical requirements</strong>
                </p>
                <ul>
                  <li>
                    Live search to browse through more than 200 trips, that are
                    similarly named.
                  </li>
                  <li>
                    Progressive web app, for service worker offline caching and
                    to render the website and be able to use in the phone for
                    agents.
                  </li>
                  <li>Highly scalable</li>
                  <li>Custom dynamic meta-data tools for SEO.</li>
                  <li>CDN and server-side caching for media and content.</li>
                  <li>User registration & Sign in, Wishlist, etc.</li>
                  <li>
                    Adventure club for rewards and discount with tiers for
                    retaining the extreme travelers and agents.
                  </li>
                </ul>
              </div>
            </section>

            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">💁‍♀️ The Target Audience</h2>
              </div>
              <div className="siteContainer siteContainer--small">
                <p>
                  According to secondary research, WFH employees, office
                  workers, and students are the people who are most affected by
                  incorrect sitting posture.
                </p>
                <ul>
                  <li>
                    Travelers interested in trekking, hiking and adventurous
                    activities.
                  </li>
                  <li>B2B travel agencies and tour operators.</li>
                  <li>Family and premium trekkers</li>
                </ul>
              </div>
            </section>

            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">💭 Questions</h2>
                <ul>
                  <li>
                    How might we enable travelers to book an online travel
                    experience with their companions?
                  </li>
                  <li>
                    How might we make it easier for the travelers to choose best
                    bespoke tours?
                  </li>
                  <li>
                    How might we enable travelers to access their trip
                    information easily?
                  </li>
                  <li>
                    How might we connect travel agents with business to recruit
                    B2B travelers?
                  </li>
                </ul>
              </div>
            </section>

            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">💬 Solution(s)</h2>
                <ul>
                  <li>
                    A travel club where the users can enroll, create their
                    travel account, invite their travel companions, pay through
                    different mediums, become a travel agent, get discounts,
                    save their trips, etc.
                  </li>
                  <li>
                    A dynamic live search that allows informed users to browse
                    through their interested trips quickly and access the trip
                    information.
                  </li>
                  <li>
                    The bespoke travel experience form facilitates the users to
                    select with thorough information and narrow down their needs
                    to create a unique experience.
                  </li>
                  <li>
                    I refined the information architecture to browse hundreds of
                    trips with filters for categories, location, type of tour,
                    and trip relations.
                  </li>
                  <li>
                    Incorporated dynamic reviews from multiple streams to build
                    trust among users, including Google, Facebook, TripAdvisor,
                    and custom video reviews.
                  </li>
                </ul>
              </div>
            </section>

            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">User Persona(s)</h2>
                <p>
                  Following the research and interviews, I defined the user and
                  identified their needs, goals, and frustrations.
                </p>
              </div>
              <div className="pageBanner">
                <StaticImage
                  src={"../images/dwt/dwt_persona.jpg"}
                  alt=""
                  width={5000}
                  className=""
                />
              </div>
            </section>
            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">Feature List</h2>
                <ul>
                  <li>
                    Live search accommodate huge directory of trips and trip
                    information.
                  </li>
                  <li>User login / management. </li>
                  <li>
                    Multiple payment systems with partial / full paymentoptions.
                  </li>
                  <li>Automated emails, downloadable PDFs.</li>
                  <li>Mailchimp Integration</li>
                  <li>
                    Trustpilot, Google Reviews, Facebook Reviews, Tripadvisor,
                    etc. API integration.
                  </li>
                </ul>
              </div>
            </section>
            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">Visual Design</h2>
                <p>
                  View the live site:&nbsp;
                  <a
                    href="https://discoveryworldtrekking.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>https://discoveryworldtrekking.com/</span>
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </Layout>
    </main>
  )
}
export default Dwt
