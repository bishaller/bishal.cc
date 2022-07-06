
import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import gsap from "gsap";
import { useEffect } from 'react'

const Billboard = ({ title, description, linkData }) => {
  function createHTML(props) {
    return { __html: props };
  }

  useEffect(() => {
    gsap.set(".billBoard__mouse", { xPercent: -50, yPercent: -50 });
    let ball = document.querySelector(".billBoard__mouse");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.1;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });


    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    gsap.to(".billBoard__mouse", {
      rotation: "+=360",
      repeat: -1,
      paused: false,
      duration: 5,
      ease: "Linear.easeNone",
    });

  }, [])

  return (
    <section className="billboard">
      <div className="siteContainer siteContainer--billboard">
        <div className="billboard__inner">
          <h1
            className="billboard__title"
            title={title}
            dangerouslySetInnerHTML={createHTML(title)}
          />
        </div>
        <div className="billboard__intro">
          <div className="billboard__bio">
            <div
              className="billboard__description"
              dangerouslySetInnerHTML={createHTML(description)}
            />
            {linkData.map((linkdata) => {
              return (
                <AniLink
                cover 
                direction="left"
                  bg="#FF4959"
                  duration={1.25}
                  to={linkdata.linkUrl}
                  key={linkdata.linkUrl}
                  title={linkdata.linkTitle}
                  className="buttonSpecial"
                >
                  {linkdata.linkTitle}
                  <span>
                    <svg className="icon icon-arrow">
                      <use xlinkHref="#icon-arrow"></use>
                    </svg>
                  </span>
                  <span className="buttonSpecial__underline">
                    <svg className="button-stroke" viewBox="0 0 186 13">
                      <use xlinkHref="#button-line"></use>
                    </svg>
                    <svg className="button-stroke" viewBox="0 0 196 13">
                      <use xlinkHref="#button-line"></use>
                    </svg>
                  </span>
                </AniLink>
              );
            })}
          </div>
        </div>
      </div>
      <div className="billBoard__mouse"></div>
    </section>
  );
};

export default Billboard;
