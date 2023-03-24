import React from "react"
import cursorIcon from "../images/cursor.png" // replace with your own icon path

const CustomCursor = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 9999,
      pointerEvents: "none",
      cursor: `url(${cursorIcon}), auto`,
    }}
  />
)

export default CustomCursor
