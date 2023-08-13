import * as React from "react"
import { motion } from "framer-motion"

const ImageContainer = {
   width: "100%",
   height: "auto",
   marginBottom: "clamp(4.5rem, 7.5vw, 7.5rem)",
}

const CaseImage = ({ LargeImage, Children }) => {
   return (
         <motion.img
            src={LargeImage}
            key={LargeImage}
            style={ImageContainer}
            initial={{ width: "0", opacity: 0, }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ height: "0", opacity: 0 }}
            transition={{
               type: "spring",
               damping: 20,
               stiffness: 100,
               restDelta: 0.005,
               delay: 2,
            }}
         >
         </motion.img>
   )
}

export default CaseImage