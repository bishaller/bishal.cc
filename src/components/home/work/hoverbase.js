import React from "react"
import { useState, useRef } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  HoverTitle,
  HoverTitleInner,
  HoverSubTitle,
  HoverContent,
  HoverArrow,
} from "./hover.style"
import { containerVariants } from "../../AnimatedSection"

const workLink = {
  display: "inline-block",


  "&:hover, &:focus,  &:active": {
    backgroundColor: "transparent !important",

    "&::selection": {
      backgroundColor: "white !important",
    }
  },

  "h2, h2 span": {
    "&:hover, &:focus, &:active": {
      backgroundColor: "transparent",
    }
  }
}

export const childVariants = {
  hidden: {
    x: "60px",
    y: "200px",
    rotate: "15deg",
    opacity: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 50,
      restDelta: 0.005
    }
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: "0",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 50,
      restDelta: 0.005
    }
  }
};


const HoverText = ({
  title,
  description,
  bgColor,
  link,
  linkColor,
  children,
  direction,
}) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  function createHTML(props) {
    return { __html: props }
  }

  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  return (
    <motion.div
      ref={ref} 
      initial="hidden"
      whileInView="visible"
      viewport={{
        margin: "0px 0px -250px 0px",
        once: false,
      }}
      exit="hidden"
      variants={containerVariants}
      onViewportEnter={() => console.log(scrollYProgress.current)}
    >
      <div className="siteContainer siteContainer--small">

        <AniLink
          cover
          direction={direction}
          bg={linkColor}
          duration={1}
          style={workLink}
          to={link}
          key={link}
          title={`see case study for ${title}`}
        >

          <HoverTitle onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <motion.span variants={childVariants} className='motion'>
              <HoverArrow
                className={isHovering ? "hover" : ""}
                viewBox="0 0 121 48"
              >
                <use xlinkHref="#workArrow"></use>
              </HoverArrow>
              <HoverTitleInner>
                <span
                  dangerouslySetInnerHTML={createHTML(title)}
                  title={title}
                  className={isHovering ? "hover" : ""}
                />
                <HoverSubTitle
                  dangerouslySetInnerHTML={createHTML(description)}
                  className={isHovering ? "hoverSub" : ""}
                ></HoverSubTitle>
              </HoverTitleInner>
            </motion.span>
          </HoverTitle>
        </AniLink>
      </div>
      {/* For Debugging */}
      {/* <HoverContent
        style={{ backgroundColor: `${bgColor}` }}
        className={isHovering ? "hover" : ""}
      >
        <AnimatePresence>{children}</AnimatePresence>
      </HoverContent> */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ duration: 0.3, opacity: 0 }}
            transition={{ duration: 0.35, delay: "0", ease: "easeOut" }}
          >
            <HoverContent
              style={{ backgroundColor: `${bgColor}` }}
              className={isHovering ? "hover" : ""}
            >
              <AnimatePresence>{children}</AnimatePresence>
            </HoverContent>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
export default HoverText
