import * as React from "react";
import Header from "./header"; // import header
import Footer from "./footer"; // import footer


const Layout = ({ children }) => {
  
  return (
    <div className="page-wrapper" id="scroller">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};
export default Layout;
