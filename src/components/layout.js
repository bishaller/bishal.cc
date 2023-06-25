import * as React from "react"
import Header from "./header" // import header
import Footer from "./footer" // import footer
import GlobalStyles from "../styles/global"

const Layout = ({ children, headerStyle }) => {
  return (
    <div className="page-wrapper" id="scroller">
      <Header headerStyle={headerStyle} />
        <GlobalStyles />
        {children}
      <Footer />
    </div>
  )
}
export default Layout
