import { AnimatePresence } from 'motion/react'
import React, { useState } from 'react'
import { motion } from "motion/react";

const ProductForm = ({ product, onSave, onClose }) => {
  // console.log('product', product)
  const [formdata, setformdata] = useState(product)

  const handlechange = e => {
    const { name, value } = e.target // destructuring the target element
    console.log(e)
    setformdata({ ...formdata, [name]: value }) // [name] will be 'name', 'price', or 'stock'
  }

  const handlesave = e => {
    e.preventDefault()
    onSave(formdata)
    console.log('formdata', formdata)
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -100 }}
        className='flex flex-col p-3 bg-gray-200 rounded-xl '>
        <h1 className='font-bold flex items-center justify-center text-xl mb-5'>
          Edit Product
        </h1>
        <form action='' onSubmit={handlesave} className='gap-2 flex flex-col'>
          <label htmlFor='' className=''>
            name :
            <input
              type='text'
              name='name'
              value={formdata.name}
              onChange={handlechange}
              placeholder='Product name'
              className='px-2 py-1 text-sm rounded-md bg-white '
            />
          </label>
          <label htmlFor=''>
            Price:
            <input
              type='number'
              name='price'
              value={formdata.price}
              onChange={handlechange}
              placeholder='Product price'
              className='px-2 py-1 text-sm rounded-md bg-white '
            />
          </label>
          <label htmlFor=''>
            Stock:
            <input
              type='number'
              name='stock'
              value={formdata.stock}
              onChange={handlechange}
              placeholder='Product stock'
              className='px-2 py-1 text-sm rounded-md bg-white '
            />
          </label>
          <button
            type='submit'
            className=' mt-3 py-2 px-3 bg-gray-400 font-semibold rounded-2xl hover:scale-102 transition-all'
          >
            Save
          </button>
          <button
            type='button'
            onClick={onClose}
            className='py-2 px-3 bg-gray-400 font-semibold rounded-2xl hover:scale-102 transition-all'
          >
            Cancel
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProductForm
