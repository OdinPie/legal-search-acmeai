import React from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Animated legal scale icon */}
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-6xl text-blue-800 mb-4"
      >
        ⚖️
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-xl font-semibold text-gray-700"
      >
        Loading Legal Assistant...
      </motion.h2>
    </div>
  );
};

export default PageLoader;
