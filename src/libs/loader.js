import * as React from "react"
import styled from "styled-components"


const StyledLoader = styled.div`
   background-color: red;
`

export default function Loader() {
  return (
    <StyledLoader className={`loader`} key="loader" id="loader">
      <div className="wrap">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    </StyledLoader>
  )
}