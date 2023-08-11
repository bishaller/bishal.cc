import * as React from "react"
import Marquee from "react-fast-marquee"
import styled from "styled-components"

const StyledChipleti = styled.div`
   .marquee {
      margin-bottom: clamp(3.5rem, 8vw, 8rem);
      font-size: clamp(3rem, 9vw, 8.125rem);
      color: #D5DBE2;
      letter-spacing: -.45vw;
   }
`

const Chipleti = () => {
   return (
      <StyledChipleti>
         <Marquee speed={100} gradient={false}>
            think — solve — invent — ux — product design — interface — code — systems —
         </Marquee>
      </StyledChipleti>
   )
}

export default Chipleti;