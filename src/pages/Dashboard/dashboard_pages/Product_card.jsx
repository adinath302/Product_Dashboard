import React, { useState } from 'react'
import ProductForm from './ProductForm'
import { AnimatePresence } from 'motion/react'
import { motion } from 'motion/react'
const Product_card = ({ product, onEdit, handledelete, HandleView }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -100 }}
        className='items-center p-2 rounded-xl bg-gray-300 flex hover:scale-101 duration-300 transition-all hover:bg-gray-100 hover:overflow-hidden'>
        <div className='grid grid-cols-4 items-center gap-40 '>
          <h1 className='font-semibold text-md'>{product.name}</h1>
          <div className='text-sm font-semibold'>{product.price}</div>
          <div className='text-sm font-semibold'>{product.stock}</div>
          <div className='gap-1 flex font-semibold'>
            <span
              onClick={() => HandleView(product)}
              className='rounded-md bg-blue-400 px-2 py-1 cursor-pointer hover:scale-105 transition-all'
            >
              View
            </span>
            <span
              onClick={() => onEdit(product)}
              className='rounded-md bg-black text-white px-2 py-1 cursor-pointer hover:scale-105 transition-all'
            >
              Edit
            </span>
            <span
              onClick={() => handledelete(product)}
              className='rounded-md bg-red-400 px-2 py-1 cursor-pointer hover:scale-105 transition-all'
            >
              Delete
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Product_card
