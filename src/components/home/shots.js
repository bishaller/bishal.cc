import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Shots = ({ title }) => {
  function createHTML(props) {
    return { __html: props };
  }

  return (
    <section className="shots">
      <div className ="banner">
        <div className="siteContainer siteContainer--heading">
          <h2
            className="shots__title"
            title={title}
            dangerouslySetInnerHTML={createHTML(title)}
          />
          </div>
          <div className="siteContainer siteContainer--billboard">
          <StaticImage
            src={"../../images/shots.png"}
            alt=""
            width={5000}
            className="shots__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Shots;