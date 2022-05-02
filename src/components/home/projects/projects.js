import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";

const Projects = ({ title }) => {
  function createHTML(props) {
    return { __html: props };
  }

  return (
    <section className="projects">
      <header className="projects__header">
        {/* <div className="projects__headerBg">
          <StaticImage
            src={"../../../images/projects-oval.png"}
            alt=""
            height={550}
          />
        </div> */}

        <div className="siteContainer siteContainer--billboard">
          <h2
            className="projects__title"
            title={title}
            dangerouslySetInnerHTML={createHTML(title)}
          />
        </div>
      </header>
    </section>
  );
};

export default Projects;
