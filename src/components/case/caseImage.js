import * as React from "react"
import { motion } from "framer-motion"
import AnimatedSection, { childVariants } from "../AnimatedSection"

const ImageContainer = {
   width: "100%",
   height: "auto",
   marginBottom: "clamp(4.5rem, 7.5vw, 7.5rem)",
}

const CaseImage = ({ LargeImage, Children, customMargin }) => {

   const imageStyles = {
      ...ImageContainer,
      marginBottom: customMargin || ImageContainer.marginBottom,
   };

   return (
      <AnimatedSection>
         <motion.img
            src={LargeImage}
            key={LargeImage}
            style={imageStyles}
            variants={childVariants}
         >
         </motion.img>
         {Children}
      </AnimatedSection>
   )
}

export default CaseImage