import React, { useContext, useEffect, useState } from 'react'
import Product_card from './Product_card.jsx'
import Product_Data from './Product_data.jsx'
import './Manage_product.css'
import ProductForm from './ProductForm.jsx'
import ProductDetails from './ProductDetails.jsx'
import { Link, Outlet } from 'react-router-dom'
import ProductAddform from './ProductAddform.jsx'
import { AnimatePresence } from 'motion/react'
import { motion } from 'motion/react'
import { AppContext } from './useContext.jsx'

const Product_list = () => {

  const { data, setData } = useContext(AppContext)
  const [ViewProduct, setViewProduct] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null) // to store the product which was being edited by the user
  const [showAdd, setShowAdd] = useState(false)
  // console.log("editingProduct",editingProduct)

  const HandleEditClick = product => {
    setEditingProduct(product) // uploaded the product to the state for edit purpose
  }

  const handleCloseForm = () => {
    setEditingProduct(null)
  }

  const handleSaveEdit = updatedProduct => {
    const newList = data.map(item =>
      item.id === updatedProduct.id ? updatedProduct : item
    )
    setData(newList) // update the list
    setEditingProduct(null) // close the form
  }

  const handledelete = product => {
    const newList = data.filter(item => item.id !== product.id)
    setData(newList)
  }

  const HandleView = product => {
    setViewProduct(product)
  }

  const HandleCloseView = () => {
    setViewProduct(null)
  }

  if (showAdd) {
    return (
      <div className='bg-[url(https://images.unsplash.com/photo-1486520299386-6d106b22014b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center flex items-center justify-center h-screen inset-0 '>
        <ProductAddform setData={setData} data={data} setShowAdd={setShowAdd} />
      </div>
    )
  }


  if (ViewProduct) {
    // console.log("viewProdcut",ViewProduct);
    return (
      <div className='flex inset-0 items-center justify-center color h-screen'>
        <ProductDetails
          product={ViewProduct}
          HandleCloseView={HandleCloseView}
        />
      </div>
    )
  }
  // if the editingproduct(state) got the value(product) then it should show the form to edit the product 👇
  if (editingProduct) {
    return (
      <div className='bg-[url(https://images.unsplash.com/photo-1486520299386-6d106b22014b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center flex items-center justify-center h-screen inset-0 '>
        {/* Pass the product data and the save/close handlers to the form */}
        <ProductForm
          product={editingProduct}
          onSave={handleSaveEdit}
          onClose={handleCloseForm}
        />
      </div>
    )
  }

  return (
    <AnimatePresence mode='wait'>
      <motion.main
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -100 }}
        className='color'
      >
        <div className='flex items-center p-3'>
          <div
            onClick={() => setShowAdd(true)}
            className='px-3 py-1 font-semibold cursor-pointer select-none bg-[#2c92c3] rounded-xl flex items-center justify-center'
          >
            Add Product
          </div>
        </div>
        <div className='grid gap-3 p-3'>
          <div className='grid grid-cols-4 font-semibold p-2 rounded-xl bg-[#105c98] text-white'>
            <div>Name</div>
            <div>Price</div>
            <div>Stock</div>
            <div>Actions</div>
          </div>
          {Array.isArray(data) && data.length > 0 ? data.map(item => (
            <Product_card
              key={item.id}
              product={item}
              onEdit={HandleEditClick}
              handledelete={handledelete}
              HandleView={HandleView}
            />
          )) :
            // if the data is empty then show this in the screen 
            <div className='text-center text-2xl font-semibold flex items-center justify-center h-screen'>data not found</div>
          }
        </div>
        <div>
          <Outlet />
        </div>
      </motion.main>
    </AnimatePresence>
  )
}

export default Product_list
