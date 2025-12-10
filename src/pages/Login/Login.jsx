import React, { useState } from 'react'
import './Login.css'
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa6'
import { FaGoogle } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { AnimatePresence, motion } from 'motion/react'
const Login = ({ setData, setIsLogin }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const HandleSubmit = e => {
    e.preventDefault()
    const newdata = {
      id: Date.now(),
      username: username,
      password: password
    }
    setData({ ...setData, newdata })
    setPassword('')
    setUsername('')
    setIsLogin(true)
  }
  return (
    <AnimatePresence mode='wait'>
      <motion.main
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -100 }}
        id='login'
        className='flex items-center justify-center h-screen'
      >
        <section className='flex flex-col items-center justify-center px-4 py-10 rounded-4xl bg-gradient-to-t from-[#56c6e2] to-white w-100'>
          <h1 className='font-bold text-2xl'>Login</h1>
          <p className='text-sm text-gray-500 mb-5 mt-1'>
            Welcome back! Please enter your details
          </p>
          <form
            action=''
            onSubmit={HandleSubmit}
            className='flex flex-col p-2 gap-3'
          >
            <label
              htmlFor=''
              className='flex items-center gap-2 rounded-md px-3 py-2 bg-[#EFF3F6]'
            >
              <FaUser className='text-gray-600' />
              <input
                required
                type='text'
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder='Username'
                className='focus:outline-none text-black'
              />
            </label>
            <label
              htmlFor=''
              className='flex items-center justify-between gap-2 rounded-md px-3 py-2 bg-[#EFF3F6]'
            >
              <div className='flex items-center gap-2'>
                <FaLock className='text-gray-600' />
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder='Password'
                  className='focus:outline-none text-black'
                />
              </div>
              <div
                onClick={() => setShowPassword(!showPassword)}
                className='text-gray-600 cursor-pointer'
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </label>
            <span className='hover:text-black cursor-pointer underline text-right text-sm text-gray-700 select-none'>
              Forgot password?
            </span>
            <button
              type='submit'
              className='bg-black rounded-md text-white py-1 cursor-pointer select-none'
            >
              Get Started
            </button>
            <div className='flex items-center gap-3 text-[12px] text-gray-600'>
              <div className='border-t border-gray-400 w-full' />
              OR
              <div className='border-t text-gray-400 w-full' />
            </div>
            {/* after or */}
            <div className='flex items-center gap-2'>
              <div className='flex py-2 px-3 items-center gap-2 text-[12px] rounded-md bg-[#EFF3F6] font-medium'>
                <FaGoogle />
                Sign up with Google
              </div>
              <div className='flex py-2 px-3 gap-2 items-center text-[12px]  rounded-md bg-[#EFF3F6] font-medium'>
                <FaApple />
                Sign up with Apple
              </div>
            </div>
            <div className='select-none text-sm flex items-center justify-center font-medium  text-gray-500 mt-2'>
              Don't have an account?{' '}
              <span className='text-black font-semibold'> Sign Up</span>
            </div>
          </form>
        </section>
      </motion.main>
    </AnimatePresence>
  )
}

export default Login
