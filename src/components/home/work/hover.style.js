import styled from "styled-components"

export const Hover = styled.section``
export const HoverTitle = styled.h2`
  font-family: var(--serifLight);
  font-size: clamp(3rem, 8vw, 6rem);
  -webkit-text-stroke: 1px;
  font-weight: 400;
  letter-spacing: -3px;
  pointer-events: all;
  cursor: pointer;
  margin-bottom: 0;
  position: relative;
  z-index: 1;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
  }

  span.hover {
    color: var(--brand);
  }

  @media screen and (max-width: 768px) {
    letter-spacing: -1.1px;
  }
`
export const HoverTitleInner = styled.span`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
`
export const HoverSubTitle = styled.span`
  font-family: var(--sans);
  font-weight: 400;
  font-size: clamp(0.75rem, 3vw, 0.875rem);
  letter-spacing: 0;
  margin-right: -3px;
  -webkit-text-stroke: 0;
  opacity: 1;
  transition: ease all .45s;
  position: absolute;
  right: 0;
  bottom: -10px;
  opacity: 0;
  color: var(--black);

  &.hoverSub {
    right: 0;
    bottom: -5px;
    opacity: 1;
    color: var(--black);
    transition: ease all .45s;
  }
`

export const HoverContent = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 0;
  // transition: ease all .3s;
`
export const HoverArrow = styled.svg`
  color: var(--brand);
  width: 0;
  height: 48px;
  position: relative;
  transition: ease all .25s;  
  display: inline-block;
  margin-right: 8px;

  &.hover {
    width: 121px;
    margin-left: -60px;
  }
`