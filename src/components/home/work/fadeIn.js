import React from "react"
import { motion } from "framer-motion"

const FadeIn = ({ children }) => (
  <motion.span
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{ duration: 0.2, delay: 0, ease: "easeOut" }}
  >
    {children}
  </motion.span>
)

export default FadeIn
