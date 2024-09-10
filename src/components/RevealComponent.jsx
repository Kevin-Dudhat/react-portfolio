// RevealComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const RevealComponent = ({children}) => {
  
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      initial="hidden" 
      animate="visible" 
      variants={variants} 
      transition={{ duration: 0.5 }}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'lightblue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px'
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealComponent;
