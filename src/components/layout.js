import * as React from "react"

import Header from "./Header/Header" // import header
import Footer from "./Footer/footer" // import footer

const Layout = ({ children, headerStyle }) => {
  return (
    <div className="page-wrapper">
      <div className="scroll">
        <Header headerStyle={headerStyle} />
        {children}
        <Footer />
      </div>
    </div>
  )
}
export default Layout
