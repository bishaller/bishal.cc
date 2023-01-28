import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const Rubbermaid = () => {
  return (
    <main>
      <Seo title="Rubbermaid Case Study | Bishal Mishra" description="" />
      <Layout>
        <article>
          <div className="page">
            <div className="pageHeader">
              <div className="siteContainer siteContainer--small">
                <h1 className="pageHeader__title">
                  Elevating Rubbermaid's Purchasing Experience
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

            <div className="siteContainer siteContainer--small">
              <section className="pageSection">
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
              </section>
            </div>

            <div className="siteContainer siteContainer--small">
              <div className="pageSection">
                <h2 className="pageSection__title">🏹 Process</h2>
              </div>
            </div>
            <div className="siteContainer siteContainer--medium">
              <StaticImage
                src={"../images/rubbermaid/rubbermaid_process.jpg"}
                alt=""
                width={5000}
                className=""
              />
            </div>

            <div className="siteContainer siteContainer--small">
              <section className="pageSection">
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
              </section>
              <section className="pageSection">
                <h2 className="pageSection__title">
                  Understanding the Problem
                </h2>
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
              </section>
              <section className="pageSection">
                <h2 className="pageSection__title">💡 The Idea</h2>
                <p>
                  I am solving a specific use case where I am taking up a user
                  trying to set up their apartment or any household category
                  from scratch. However, this solution would still be able to
                  cater to all those users who have yet to decide what to buy to
                  organize their homes.
                </p>
                <p>
                  "Let the users swipe right or left to find the right fit of
                  household items."
                </p>
                <p>
                  I designed an app for Rubbermaid to let users find the perfect
                  match of home organizational products they need. The users
                  would sign up, select categories, and swipe through cards.
                  Each card would show the items in specific categories;
                  ideally, each would have 30-45 cards. So the users would swipe
                  right for the things they have or will have in their home and
                  swipe left if not, while users would also have options to
                  custom-add the items not shown in the card. When the user is
                  done swiping, the app suggests a list of products that the
                  user needs to organize all the items in their home or a
                  specific category.
                </p>
              </section>
            </div>

            <div className="siteContainer.siteContainer--small"></div>
          </div>
        </article>
      </Layout>
    </main>
  )
}
export default Rubbermaid
