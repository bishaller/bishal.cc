import * as React from "react"
import { useRef } from "react"
import { motion, useScroll } from "framer-motion"

export const childVariants = {
   hidden: {
      y: "50px",
      opacity: 0
   },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         type: "spring",
         damping: 20,
         stiffness: 50,
         restDelta: 0.005
      }
   }
};

const containerVariants = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.25,
         type: "spring",
         damping: 20,
         stiffness: 50,
         restDelta: 0.005
      }
   }
};

export default function AnimatedSection ({ children }) {
   const ref = useRef()
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"]
   });

   return (
      <motion.section
         ref={ref}
         initial="hidden"
         whileInView="visible"
         viewport={{
            margin: "0px 0px -400px 0px",
            once: true
         }}
         variants={containerVariants}
         onViewportEnter={() => console.log(scrollYProgress.current)}
         
      >
         {children}
      </motion.section>
   )
}