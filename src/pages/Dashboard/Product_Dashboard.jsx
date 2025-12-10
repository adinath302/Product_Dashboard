import React from 'react'
import { MdSpaceDashboard } from 'react-icons/md'
import { FaTag } from 'react-icons/fa'
import { TbBuildingStore } from 'react-icons/tb'
import { IoPerson } from 'react-icons/io5'
import { Link, Outlet } from 'react-router-dom'
import { IoIosAddCircle } from 'react-icons/io'
import { AnimatePresence } from 'motion/react'
import { motion } from 'motion/react'
const Product_Dashboard = () => {
  return (
    <AnimatePresence mode='wait'>
      <motion.main
      initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -100 }}
        className='flex bg-[#2c92c3]'
      >
        <div className=' flex flex-col min-w-[200px] h-screen p-2'>
          <h1 className='font-bold mt-5 text-2xl items-center flex justify-center'>
            ShopSwift
          </h1>
          <div className='flex flex-col gap-3 mt-10'>
            <Link
              to='/dashboard'
              className='flex items-center gap-3 py-2 px-3 hover:scale-105 cursor-pointer hover:bg-gray-200 rounded-2xl transition-all duration-105 bg-blue-200 '
            >
              <MdSpaceDashboard />
              Overview
            </Link>
            <Link
              to='products'
              className='flex items-center gap-3 py-2 px-3 hover:scale-105 cursor-pointer hover:bg-gray-200 rounded-2xl transition-all duration-105 bg-blue-200 '
            >
              <FaTag />
              Product List
            </Link>
            <div className='flex items-center gap-3 py-2 px-3 hover:scale-105 cursor-pointer hover:bg-gray-200 rounded-2xl transition-all duration-105 bg-blue-200 '>
              <IoPerson />
              Customers
            </div>
            <div className='flex items-center gap-3 py-2 px-3 hover:scale-105 cursor-pointer hover:bg-gray-200 rounded-2xl transition-all duration-105 bg-blue-200 '>
              <TbBuildingStore />
              Online Store
            </div>
          </div>
        </div>
        <div className='bg-gray-100 h-screen w-full'>
          <Outlet />
        </div>
      </motion.main>
    </AnimatePresence>
  )
}

export default Product_Dashboard
