import styled from "styled-components"

export const StyledFooter = styled.footer`
  padding-top: clamp(7rem, 10vw, 10rem);
  background-color: transparent;
  position: relative;

  .siteContainer {
    position: relative;
    z-index: 2;
  }
`

export const FooterMain = styled.section`
text-align: center;
position: relative;
z-index: 1;
padding: clamp(4rem, 10vw, 9rem) 0 clamp(6rem, 12vw, 9.4rem);
margin-bottom: clamp(4rem, 8vw, 8rem);
background: repeating-linear-gradient(
  to right,
  #BEBEBE,
  #BEBEBE 1px,
  transparent 1px,
  transparent 30px
), repeating-linear-gradient(
  to bottom,
  #BEBEBE,
  #BEBEBE 1px,
  transparent 1px,
  transparent 30px
);

&:before {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  background: var(--white);
  height: 2px;
  width: 100%;
  z-index: 1;
}

&::after {
  content: "";
  position: absolute;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--white);
  height: 2px;
  width: 100%;
  z-index: 1;
}
`

export const FooterTitle = styled.h2`
  --wt: 400;
  --fsz: clamp(3rem, 7.5vw, 7.5rem);
  --lh: 1.03;
  --font: var(--wt) var(--fsz) / var(--lh) var(--sans);
  font: var(--font);
  letter-spacing: -0.5vw;
  -webkit-text-stroke: 1px;
  margin-bottom: 33px;
`

export const FooterSocial = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 0 clamp(2rem, 6vw, 6rem);
  position: relative;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

export const FooterButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 100px;
  font-size: clamp(1.5rem, 4.8vw, 3.75rem);
  font-family: var(--sans);
  font-weight: 400;
  letter-spacing: -0.2vw;
  line-height: 1;
  text-shadow: 0 5px 15px rgba(0,0,0, 0.25);
  --pt: clamp(0.8rem, 1.7vw, 1.8rem);
  --pb: clamp(0.8rem, 1.7vw, 1.8rem);
  --ph: clamp(3rem, 5.5vw, 4.7rem);
  padding: var(--pt) var(--ph) var(--pb);
  background: var(--brand);
  color: var(--white);
  -webkit-text-stroke: 1px;
  transition: ease all .3s;
  svg {
    display: block;
    width: clamp(1.8rem, 3.8vw, 4rem);
    filter: drop-shadow(0 10px 15px rgba(0,0,0, 0.25));
    margin-left: clamp(0.5rem, 1.56vw, 1.56rem);
    margin-bottom: clamp(0.1rem, 1vw, 0.4rem);
  }

  &:hover, &:focus {
    background: var(--dark);
    color: var(--brand);
    box-shadow: 0 15px 15px -5px rgba(225,20,20, 0.25);
    transition: ease all .3s;
  }

  @media screen and (max-width: 768px) {
    letter-spacing: 0;
  }
`

export const SocialIcons = styled.a`
  display: block;
  width: 25%;
  position: relative;
  transition: ease all 0.15s;
  text-align: center;
  text-decoration: none;
  color: var(--dark); 
  line-height: 1;
  font-size: 20px;
  letter-spacing: -0.4px;

  @media screen and (max-width: 640px) {
    width: 50%;
    margin-bottom: 25px;
    font-size: 16px;
  }

  strong {
    display: block;
    margin-bottom: 0;
    font-size: clamp(1.25rem, 3vw, 2.4rem);
    letter-spacing: -0.1vw;
    margin-bottom: 6px;

    @media screen and (max-width: 640px) {
      letter-spacing: -0.6px;
    }
  }

  &:hover,
  &:focus {
    .gatsby-image-wrapper {
      transform: scale(1.1);
      transition: ease all 0.25s;
    }
  }
`

export const FooterCopyright = styled.div`
  text-align: center;
  width: 100%;
  color: var(--dark);
  padding-bottom: 20px;
  line-height: 1.4;
  position: relative;
  z-index: 1;
  
  p {
    margin: 0;
    font-size: 14px;

    @media #{$phone} {
      font-size: 12px;
    }

    @media #{$phone} {
      padding-bottom: 15px;
    }
  }
`
