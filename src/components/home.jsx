import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-white text-center"
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to My Project</h1>
      <p className="text-lg mb-6">
       Please choose the options below for your next step
      </p>
      <div className="space-x-4">
        <Link to="/register">
          <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-md">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="px-6 py-2 bg-gray-100  hover:bg-gray-300 text-black font-bold rounded-md border">
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home;