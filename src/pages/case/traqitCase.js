import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Traqit = () => {
  return (
    <main>
      <Seo
        title="Traqit"
        description="UX case study for TraqIT software by Bishal Mishra."
      />
      <Layout>
        <article>
          <div className="page">
            <div className="pageHeader">
              <div className="siteContainer siteContainer--small">
                <h1 className="pageHeader__title">
                  Revamping a twenty-year-old software.
                </h1>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </main>
  )
}

export default Traqit
