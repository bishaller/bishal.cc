import * as React from "react";


const Layout = ({ children }) => {
  
  return (
    <div className="page-wrapper" id="scroller">
      {children}
    </div>
  );
};
export default Layout;
