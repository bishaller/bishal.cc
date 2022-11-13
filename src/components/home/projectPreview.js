import * as React from "react"
import ldsVideo from "../../images/lastdoor-work-by-bishal-mishra.mp4"
import ldsCaptions from "file-loader!../../images/lds.vtt"
import idealayaVideo from "../../images/idealaya-work-by-bishal-mishra.mp4"
import idealayaCaptions from "file-loader!../../images/idealaya.vtt"
import tpnVideo from "../../images/trekkers-paradise-nepal-work-by-bishal-mishra.mp4"
import tpnCaptions from "file-loader!../../images/tpn.vtt"
import Marquee from "react-fast-marquee";


// const prefersReducedMotion = usePrefersReducedMotion();
const ProjectPreview = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     items: projectPreviewJson {
  //       projects {
  //         category
  //         title
  //         description
  //         image {
  //           alt
  //           url {
  //             childImageSharp {
  //               fluid(quality: 100) {
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <section className="projectPreview">
      <div className="siteContainer siteContainer--medium">
        <h2 className="projectPreview__title">work</h2>
      </div>
      <Marquee
        speed={100}
        gradient={false}
      >
        UX Designer&nbsp;&nbsp;⍟&nbsp;&nbsp;UI Designer&nbsp;&nbsp;⍟&nbsp;&nbsp;Visual Design&nbsp;&nbsp;⍟&nbsp;&nbsp;UX Research&nbsp;&nbsp;⍟&nbsp;&nbsp;Product Design&nbsp;&nbsp;⍟&nbsp;&nbsp;Systems Design&nbsp;&nbsp;⍟&nbsp;&nbsp;FrontEnd&nbsp;&nbsp;⍟&nbsp;&nbsp;
      </Marquee>
    

      <div className="siteContainer siteContainer--medium">
        <div className="projectPreview__notice">
          <p>🚧 Case studies are work in progress and are coming soon.</p>
        </div>
      </div>
      
      {/* <div className="siteContainer siteContainer--medium">
        <section className="projectPreview__item" >
          <header className="projectPreview__header">
            <div className="projectPreview__titles">
              <p className="projectPreview__meta">Strategy, Copywriting, Design</p>
              <h2 className="projectPreview__title" title="idealaya: A thoughtful site for future crafters">
                "idealaya": <br /> A thoughtful site for future crafters
              </h2>
            </div>
            <div className="projectPreview__content">
              <p>2019: idealaya's site is a site redesigned to portray their unique nature of work. The strategic copy and crisp interface helps this top-notch site better communicate with their clients.</p>
            </div>
          </header>
          <figure className="projectPreview__image">
            <video id="video" autoPlay loop playsInline muted>
              <source src={idealayaVideo} type="video/mp4" />
              <track kind="captions" srcLang="en" src={idealayaCaptions} />
            </video>
          </figure>
        </section>
        <section className="projectPreview__item" >
          <header className="projectPreview__header">
            <div className="projectPreview__titles">
              <p className="projectPreview__meta">Strategy, Design, WordPress Dev</p>
              <h2 className="projectPreview__title" title="idealaya: A thoughtful site for future crafters">
                A heavenly portal for trekkers around the world.
              </h2>
            </div>
            <div className="projectPreview__content">
              <p>Reimagined a small travel agency's approach to help them grow their business through a unique experience served with profound information. From scratch, I designed and coded this site on WordPress.</p>
            </div>
          </header>
          <figure className="projectPreview__image">
            <video id="video" autoPlay loop playsInline muted>
              <source src={tpnVideo} type="video/mp4" />
              <track kind="captions" srcLang="en" src={tpnCaptions} />
            </video>
          </figure>
        </section>
        <section className="projectPreview__item" >
          <header className="projectPreview__header">
            <div className="projectPreview__titles">
              <p className="projectPreview__meta">Copy, Design, Code</p>
              <h2 className="projectPreview__title" title="idealaya: A thoughtful site for future crafters">
                Perfect Landing page designed for Last Door
              </h2>
            </div>
            <div className="projectPreview__content">
              <p>A short and sweet one-page site, to deliver the exact information on how Last Door functions. I did this quick turnaround with engaging animations, colorful gradients and a bit of coding.</p>
            </div>
          </header>
          <figure className="projectPreview__image">
            <video id="video" autoPlay loop playsInline muted>
              <source src={ldsVideo} type="video/mp4" />
              <track kind="captions" srcLang="en" src={ldsCaptions} />
            </video>
          </figure>
        </section>
      </div> */}
    </section>
  )
}

export default ProjectPreview
