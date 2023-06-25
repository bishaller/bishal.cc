import styled from "styled-components"
import breakpoints from "../../styles/breakpoints"

export const StyledBillboard = styled.section`
  padding: 16vw 0 11vw;
  --wt: 400;
  --fsz: clamp(3rem, 20.8vw, 18.75rem);
  --lh: 0.8;
  --font: var(--wt) var(--fsz) / var(--lh) var(--ff-default);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  
  @media only screen and ${breakpoints.device.mobile} {
  }
`
