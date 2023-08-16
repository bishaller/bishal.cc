import React from "react";
import { motion } from "framer-motion";

const Loader = ({ setLoading }) => {

   return (
      <motion.div key="loader" id="loader">
         <motion.div
            onAnimationComplete={() => setLoading(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, duration: 3 }}
            exit={{ duration: 1, opacity: 0 }}
            transition={{ duration: 1, delay: "0", ease: "easeOut" }}
            className="dFlex loader"
         >
            <div className="wrap">
               <span>L</span>
               <span>O</span>
               <span>A</span>
               <span>D</span>
               <span>I</span>
               <span>N</span>
               <span>G</span>
               <span>•</span>
               <span>•</span>
               <span>•</span>
            </div>
         </motion.div>
      </motion.div>
   )
}

export default Loader;