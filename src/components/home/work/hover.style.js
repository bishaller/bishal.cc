import styled from "styled-components"

export const Hover = styled.section``
export const HoverTitle = styled.h2`
  font-family: var(--serif);
  font-size: clamp(3rem, 11vw, 5rem);
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
  transition: ease all 0.35s;
  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
  }

  span.hover {
    color: var(--brand);
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
  opacity: 1;
  transition: ease all 0.3s;
  position: absolute;
  right: 0;
  bottom: -5px;
  opacity: 0;

  &.hover {
    opacity: 1;
  }
`

export const HoverContent = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 0;
  background-color: #ebedf0;
  transition: ease all .3s;
`
export const HoverArrow = styled.svg`
  color: var(--brand);
  width: 0;
  height: 48px;
  display: inline-block;
  transition: ease all 0.3s;

  &:hover,
  &:focus {
    color: var(--brand);
  }

  &.hover {
    width: 121px;
  }
`
