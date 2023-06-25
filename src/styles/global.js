import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: inherit;
}

a {
  text-decoration: none;
}

html {
  box-sizing: border-box;
  font-size: 100%; //This is used for baseline font-size calculations according to the client browser apeariaces.
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
}

ol,
ul {
  list-style: none;
}

.visually-hidden,
.sr-only {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: .1rem;
}

body {
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  font-family: var(--ff-sans);
}

main {
 min-height: 60vh;

}
`

export default GlobalStyles
