import { motion } from 'motion/react'
import React from 'react'
import { IoClose } from 'react-icons/io5'

const ProductDetails = ({ product, HandleCloseView }) => {
  console.log('product_details', product)
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, y: -100 }}
      className='flex items-center justify-center inset-0 backdrop-blur-2xl flex-col p-3 bg-gray-300 rounded-xl relative'>
      <div
        onClick={HandleCloseView}
        className='absolute top-1 cursor-pointer right-2'>
        <IoClose />
      </div>
      <h1 className='font-bold text-xl mb-5'>Product details</h1>
      <div className='gap-2 flex flex-col'>
        <h1 className='font-semibold text-md flex items-center px-2 py-1 bg-gray-500 rounded-xl gap-1 select-none'>
          <span className='font-normal'>Product name :</span>
          {product.name}
        </h1>
        <div className='text-sm font-semibold flex items-center px-2 py-1 bg-gray-500 rounded-xl gap-1 select-none'>
          <span className='font-normal'>Price :</span>
          {product.price}
        </div>
        <div className='text-sm font-semibold flex items-center px-2 py-1 bg-gray-500 rounded-xl gap-1 select-none'>
          <span className='font-normal'>Stock :</span>
          {product.stock}
        </div>
      </div>
    </motion.div>
  )
}

export default ProductDetails
