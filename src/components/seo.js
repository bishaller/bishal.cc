/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = title || site.siteMetadata?.title
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      meta={[
        {
          name: `geo:placename`,
          content: `Kathmandu`,
        },
        {
          name: `geo:position`,
          content: ``,
        },
        {
          name: `geo:region`,
          content: `NP`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://bishal.cc/bishal_mishra.jpg`,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `627`,
        },
        {
          property: `og:image:type`,
          content: `image/jpg`,
        },
        {
          property: `og:image:secure_url`,
          content: `https://bishal.cc/bishal_mishra.jpg`,
        },
        {
          property: `website:contact_data:website`,
          content: `https://bishal.cc/`,
        },
        {
          property: `website:contact_data:email`,
          content: `hello@bishal.cc`,
        },
        {
          property: `website:contact_data:phone_number`,
          content: `+9779851102931`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `https://www.bishal.cc/`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: `@bishaller`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: `https://bishal.cc/bishal_mishra.jpg`,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {`
     {"@context": "https://schema.org",
     "@graph": [
         {
             "@type": [
                 "Person", "Organization"
             ],
             "@id": "https://bishal.cc/#/schema/person/9eb9271947820f762a827ea24980084c",
             "name": "Bishal Mishra",
             "jobTitle": "UI/UX Designer, Product Designer",
             "url": "https://bishal.cc/",
             "email": "hello@bishal.cc",
             "logo":  "https://bishal.cc/#personlogo",
             "image": {
                 "@type": "ImageObject",
                 "@id": "https://bishal.cc/bishal_dp.jpeg",
                 "inLanguage": "en-US",
                 "url": "https://www.bishal.cc/bishal_dp.jpeg",
                 "width": 1500,
                 "height": 1500,
                 "caption": "Bishal Mishra's Display Picture"
             },
             
             "sameAs": [
                 "https://bishal.cc",
                 "https://dribbble.com/bishaller",
                 "https://github.com/bishaller",
                 "https://twitter.com/bishaller",
                 "https://instagram.com/bishaller",
                 "https://www.behance.net/bishaller",
                 "https://www.linkedin.com/in/bishaller",
                 "https://facebook.com/bishaller"
               ]
         }, {
             "@type": "WebSite",
             "@id": "https://bishal.cc/#website",
             "url": "https://bishal.cc/",
             "name": "Bishal Mishra",
             "description": "Product Designer",
             "publisher": {
                 "@id": "https://bishal.cc/#/schema/person/9eb9271947820f762a827ea24980084c"
             },
             "potentialAction": [
                 {
                     "@type": "SearchAction",
                     "target": "https://bishal.cc/?s={search_term_string}",
                     "query-input": "required name=search_term_string"
                 }
             ],
             "inLanguage": "en-US"
         }, {
             "@type": "WebPage",
             "@id": "https://bishal.cc/#webpage",
             "url": "https://bishal.cc/",
             "name": "Bishal Mishra \u2014 Product Designer, User Experiece Designer &amp; User Interface Designer",
             "isPartOf": {
                 "@id": "https://bishal.cc/#website"
             },
             "about": {
                 "@id": "https://bishal.cc/#/schema/person/9eb9271947820f762a827ea24980084c"
             },
             "datePublished": "2020-06-03T19:08:28+00:00",
             "dateModified": "2021-02-03T18:43:42+00:00",
             "description": "Bishal is a UX and a Product Designer who has experience of designing for cross-platform and various user bases from small to large.",
             "breadcrumb": {
                 "@id": "https://bishal.cc/#breadcrumb"
             },
             "inLanguage": "en-US",
             "potentialAction": [
                 {
                     "@type": "ReadAction",
                     "target": ["https://bishal.cc/"]
                 }
             ]
         }, {
             "@type": "BreadcrumbList",
             "@id": "https://bishal.cc/#breadcrumb",
             "itemListElement": [
                 {
                     "@type": "ListItem",
                     "position": 1,
                     "item": {
                         "@type": "WebPage",
                         "@id": "https://bishal.cc/",
                         "url": "https://bishal.cc/",
                         "name": "Home"
                     }
                 }
             ]
         }
     ]
    }
 `}
      </script>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
