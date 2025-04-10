import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { LucideSearch } from 'lucide-react';


const Dashboard = () => {
  return (
   <Fragment>
  <div className="min-h-screen p-6 bg-gray-50 relative">
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-3xl font-semibold text-gray-500">Teachers</h1>
    <Link
      to="/addTeacher"
      className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
    >
      Add Teacher
    </Link>
  </div>

  <div className="relative mb-6">
    <div className="absolute top-2 right-3 text-gray-400">
      <LucideSearch />
    </div>
    <input
      type="text"
      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Search for a teacher by name or email"
    />
  </div>

  <div className="w-full flex justify-center">
    <div className="w-[1056px] h-[419px] bg-gray-100 rounded-lg flex flex-col justify-center items-center">
      <img
        src="13.webp" 
        alt="No teacher illustration"
        className="w-40 h-40 object-contain mb-4"
      />
      <h1 className="text-gray-700 text-3xl font-bold text-center mb-2">
        No teacher at this time
      </h1>
      <h3 className="text-gray-600 text-xl text-center">
        Teacher will appear here after they enroll your school
      </h3>
    </div>
  </div>
</div>

   </Fragment>
  )
}

export default Dashboard;