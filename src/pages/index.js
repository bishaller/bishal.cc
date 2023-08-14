import * as React from "react"
import { useEffect, useState } from "react";
import Layout from "../components/layout"
import Seo from "../components/seo"
import { motion, LayoutGroup, AnimatePresence } from "framer-motion"

// Import Components
import Loader from "../components/loader";
import Billboard from "../components/home/Billboard"
import Intro from "../components/home/intro"
import WorkHover from "../components/home/work/workhover"
import AboutIntro from "../components/home/About"
import Skills from "../components/home/skills"
import Reviews from "../components/home/review"
import Chipleti from "../components/home/chipleti"
import Writings from "../components/home/writings"

function WorkPage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <main>
      <Seo title="Bishal Mishra — Product Designer, UX Designer, bishaller" />
      <LayoutGroup type='crossfade'>
        <AnimatePresence>
          {loading ? (
            <motion.div key='loader'>
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Layout>
                <Billboard />
                <Intro />
                <WorkHover />
                <AboutIntro />
                <Skills />
                <Reviews />
                <Chipleti />
                <Writings />
              </Layout>
              {!loading && (
                  <motion.div>
                    
                  </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </main>
  )
}

export default WorkPage