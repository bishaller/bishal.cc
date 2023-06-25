// Design with a mobile-first frame of mind to avoid the need for max-width queries
const size = {
  mobile: "40em", // 640px
  phablet: "48em", // 768px
  tablet: "64em", // 1024px
  laptop: "80em", // 1280px
  desktop: "96em", // 1536px
  xlarge: "160em", // 2560px
}

 const device = {
  mobile: `(min-width: ${size.mobile})`,
  phablet: `(min-width: ${size.phablet})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  xlarge: `(min-width: ${size.xlarge})`,
}

export default {size, device}
