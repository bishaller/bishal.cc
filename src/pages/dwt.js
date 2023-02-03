import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Video from "../components/video"

const Dwt = () => {
  return (
    <main>
      <Seo
        title="Discovery World Trekking UX Case Study | Bishal Mishra"
        description="UX Case Study for Discovery World Trekking, a travel agency based in Nepal. I designed a website for them to help them sell their trekking packages online."
      />
      <Layout>
        <article>
          <div className="page">
            <div className="pageHeader">
              <div className="siteContainer siteContainer--small">
                <h1 className="pageHeader__title">
                  Redefining travel experience for three distinct users
                </h1>
              </div>
            </div>

            <div className="pageBanner">
              <StaticImage
                src={"../images/rubbermaid/rubbermaid_banner.jpg"}
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
                <h2 className="pageSection__title">🏹 Process</h2>
              </div>

              <div className="siteContainer siteContainer--medium">
                <StaticImage
                  src={"../images/rubbermaid/rubbermaid_process.jpg"}
                  alt=""
                  width={5000}
                  className="pageImage pageImage--large"
                />
              </div>
              <div className="siteContainer siteContainer--small">
                <p>
                  Rubbermaid is an American manufacturer and distributor of
                  household items. They're a big household market player and are
                  best known for producing food storage containers and trash
                  cans. Additionally, they make sheds, step stools, closets and
                  shelving, laundry baskets, bins, air fresheners, and other
                  household items.
                </p>
              </div>
            </section>

            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">🔬 Research & Findings</h2>
                <p>
                  Rubbermaid has been selling its products traditionally and
                  needs an online e-commerce shop. They have excellent
                  performance in giants like Amazon, Walmart, Target, etc., but
                  have yet to have an online store of their own.
                </p>
                <StaticImage
                  src={"../images/rubbermaid/rubbermaid_research.jpg"}
                  alt=""
                  width={5000}
                  className=""
                />
              </div>
            </section>

            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">
                  🤔 Understanding the Problem
                </h2>
              </div>
              <div className="siteContainer siteContainer--medium">
                <StaticImage
                  src={"../images/rubbermaid/rubbermaid_understanding.jpg"}
                  alt=""
                  width={5000}
                  className="pageImage pageImage--large"
                />
              </div>
              <div className="siteContainer siteContainer--small">
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
                </p>
              </div>
            </section>

            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">💡 The Solution</h2>
              </div>
              <div className="siteContainer siteContainer--small">
                <p>
                  I am solving a specific use case where I am taking up a user
                  trying to set up their apartment or any household category
                  from scratch. However, this solution would still cater to
                  users who have not decided what household items they need to
                  organize their homes.
                </p>
              </div>
              <div className="siteContainer siteContainer--medium">
                <StaticImage
                  src={"../images/rubbermaid/rubbermaid_solution.jpg"}
                  alt=""
                  width={5000}
                  className="pageImage pageImage--large"
                />
              </div>
              <div className="siteContainer siteContainer--small">
                <p>
                  I designed an app for Rubbermaid to let users find the perfect
                  match of home organizational products they need. The users
                  would sign up, select categories, and swipe through cards.
                  Each card would show the items in specific categories;
                  ideally, each would have 30-45 cards. So the users would swipe
                  right for the things they have or will have in their home and
                  swipe left if not, while users would also have options to
                  custom-add the items not shown in the card. When the user is
                  done swiping, the app suggests a list of products they need to
                  organize all the items in their home or a specific category.
                </p>
                <p>
                  <a
                    href="https://figmashort.link/kkDWeZ"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>View The Prototype</span>
                  </a>
                </p>
              </div>
            </section>

            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">🧪 Iterations & Testing</h2>
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
              </div>
              <div className="pageImage">
                <Video
                  videoSrcURL="https://youtu.be/c6Q62BHULIY"
                  videoTitle="Prototype Demo Rubbermaid"
                />
              </div>
            </section>

            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">
                  🚀 The Product Track Forward
                </h2>
                <p>
                  To make this product successful, card swiping should use
                  machine learning to understand users' demographics and
                  behavior. By doing so, we can predict users' household items
                  and show the cards accordingly.
                </p>
                <p>
                  <a
                    href="https://figmashort.link/kkDWeZ"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>View The Prototype</span>
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
