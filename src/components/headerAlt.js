import * as React from "react";
// import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = () => {

   const [header, setHeader] = useState(false)

   const changeClass = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 10) {
         setHeader(true)
      } else {
         setHeader(false)
      }
   }
   useEffect(() => {
      changeClass()
      window.addEventListener("scroll", changeClass)
   })


  return (
    <header className="siteHeader">
      <nav className="siteContainer">
        <ul>
          <li>
            <a
              className={header ? "button button--header" : "button button--header button--headerWhite"}
              title="hello@bishal.cc"
              href="mailto:hello@bishal.cc"
            >
              Contact!
              <span className="paperPlane"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
