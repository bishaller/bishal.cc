import styled from "styled-components"

export const StyledHeader = styled.header`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;
  background-color: ${({ theme }) => theme.color.secondary.red};
`
