import * as React from "react"
// import "./styles.scss"
import { motion, AnimatePresence } from "framer-motion"

const animLetter = {
  hidden: { y: 200 },
  visible: { y: 0 },
}

const animSeparator = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
}

const AnimatedText = ({ children }) => {
  return (
    <AnimatePresence>
    <motion.div
      className="text-wrapper"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
    >
      {/* <motion.p
        variants={animLetter}
        transition={{ type: "spring", stiffness: 100, damping: 1000, mass: 5 }}
      >
        {children}
      </motion.p> */}

      {children.split(" ").map((word, wordIndex) => {
        return (
          <span key={wordIndex} className="word-wrap">
            {word.split("").map((letter, letterIndex) => {
              return (
                <motion.span
                  key={letterIndex}
                  variants={animLetter}
                  style={{ originY: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 10,
                    damping: 100,
                    mass: 0.2,
                    delay: 4,
                  }}
                  s
                >
                  {letter}
                </motion.span>
              )
            })}
            &nbsp;
          </span>
        )
      })}

      <div className="separator-wrapper">
        <motion.div
          variants={animSeparator}
          className="separator"
          transition={{
            delay: 4,
            type: "spring",
            stiffness: 100,
            damping: 100,
            mass: 1,
          }}
        />
          </div>
      </motion.div>
      </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="container">
        <AnimatedText sthle={{ fontSize: "100px" }}>Antiprocess</AnimatedText>
    </div>
  )
}
