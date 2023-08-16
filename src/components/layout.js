import * as React from "react"

import Header from "./Header/Header" // import header
import Footer from "./Footer/footer" // import footer
// import { motion, LayoutGroup, AnimatePresence } from "framer-motion"
// import { useEffect, useState } from "react";
// import Loader from "../components/Loader";

const Layout = ({ children, headerStyle }) => {
  //   const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   loading
  //     ? document.querySelector("body").classList.add("loading")
  //     : document.querySelector("body").classList.remove("loading");
  // }, [loading]);

  return (
    <div className="page-wrapper">
      {/* <LayoutGroup type='crossfade'>
        <AnimatePresence>
          {loading ? (
            <motion.div key='loader'>
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <> */}
      <div className="scroll">
        <Header headerStyle={headerStyle} />
        {children}
        <Footer />
      </div>
      {/* {!loading && (
                  <motion.div></motion.div>
              )}
      </>
          )}
        </AnimatePresence>
      </LayoutGroup> */}
    </div>
  )
}
export default Layout
