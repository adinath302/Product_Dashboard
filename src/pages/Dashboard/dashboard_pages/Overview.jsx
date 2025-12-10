import { AnimatePresence } from 'motion/react'
import React from 'react'
import { motion } from 'motion/react'
const Overview = () => {
  return (
    <AnimatePresence mode='wait'>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -100 }}
        className='text-8xl flex items-center justify-center h-screen bg-[url(https://images.unsplash.com/photo-1486520299386-6d106b22014b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-fixed'
      >
        Overview
      </motion.h1>
    </AnimatePresence>
  )
}

export default Overview
