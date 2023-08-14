import * as React from "react"

import Header from "./Header/Header" // import header
import Footer from "./footer" // import footer

const Layout = ({ children, headerStyle }) => {
  return (
    <div className="page-wrapper" id="scroller">
      <Header headerStyle={headerStyle}/>
      {children}
      <Footer/>
    </div>
  )
}
export default Layout
