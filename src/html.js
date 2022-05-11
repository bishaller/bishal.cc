import * as React from "react"
import PropTypes from "prop-types"

const HTML = props => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="robots"
          content="index, all, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot-news" content="all" />
        <meta name="googlebot" content="all" />
        <meta name="designer" content="Bishal Mishra" />
        <meta name="keywords" content="UX Designer and a Product Designer" />
        <meta name="theme-color" content="#fff" />
        <meta
          name="web_author"
          content="Bishal Mishra, bishaller, hello@bishal.cc"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script src={`../gsap.min.js`} />
        <script>document.getElementById('#video').play();</script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key="loader" id="loader">
          <div className="wrap">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
          </div>
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script src="../custom.js"></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
export default HTML
