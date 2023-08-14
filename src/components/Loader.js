import React from "react";
import { motion } from "framer-motion";


// const line = {
//    display: "block",
//    width: "200px",
//    height: "1px",
//    backgroundColor: "var(--brand)",
//    marginBottom: "30px",
// }

const Loader = ({ setLoading }) => {

   return (
      <motion.div key="loader" >
         <motion.div
            onAnimationComplete={() => setLoading(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, duration: 3 }}
            exit={{ duration: 1, opacity: 0 }}
            transition={{ duration: 1, delay: "0", ease: "easeOut" }}
            className="dFlex"
         >
         </motion.div>
      </motion.div>
   )
}

export default Loader;