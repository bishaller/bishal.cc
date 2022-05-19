
import * as React from "react";

const Billboard = ({title, description, linkData}) => {
    function createHTML(props) {
        return {__html: props};
    }

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
                        <a
                            className="buttonSpecial buttonSpecial--alt"
                            title="hello@bishal.cc"
                            href="mailto:hello@bishal.cc"
                        >
                            Contact me via Mail.
                        </a>

                        {/* {linkData.map((linkdata) => {
              return (
                <AniLink
                  cover
                  bg="#D4DAE1"
                  duration={1}
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
            })} */}
                    </div>
                </div>
            </div>
            <div className="billBoard__mouse"></div>
        </section>
    );
};

export default Billboard;
