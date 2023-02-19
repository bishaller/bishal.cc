import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import rubbermaidVideo from "../images/rubbermaid/rubbermaid_video.mp4"

const Rubbermaid = () => {
  return (
    <main>
      <Seo title="Rubbermaid Case Study | Bishal Mishra" description="UX case study for rubbermaid app by Bishal Mishra." />
      <Layout>
        <article>
          <div className="page">
            <div className="pageHeader">
              <div className="siteContainer siteContainer--small">
                <h1 className="pageHeader__title">
                  Elevating Rubbermaid's Purchasing Experience
                </h1>
                <p className="pageHeader__alert">
                  <strong>⚠️ Disclaimer:</strong>
                  This is a project done as learning activity in my Master’s UX
                  & Interaction Design Program at Jefferson University. I am not
                  associated with the brand and this project is done for
                  learning purpose.
                </p>
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
            <section className="pageSection">
              <div className="siteContainer siteContainer--small">
                <h2 className="pageSection__title">🏠 About Rubbermaid</h2>
                <p>
                  Rubbermaid is an American manufacturer and distributor of
                  household items. They're a big household market player and are
                  best known for producing food storage containers and trash
                  cans. Additionally, they make sheds, step stools, closets and
                  shelving, laundry baskets, bins, air fresheners, and other
                  household items.
                </p>
                <StaticImage
                  src={"../images/rubbermaid/rubbermaid_about.jpg"}
                  alt=""
                  width={5000}
                  className=""
                />
              </div>
            </section>

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
                </div>
                <div className="pageImage">
                <StaticImage
                  src={"../images/rubbermaid/rubbermaid_researchPlan.jpg"}
                  alt=""
                  width={8000}
                  className=""
                />
                </div>
                <div className="siteContainer siteContainer--small">
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
              <div className="pageVideo">
                <video loop autoPlay muted>
                  <source src={rubbermaidVideo} type="video/mp4" />
                </video>
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
export default Rubbermaid
