import React, { Fragment } from 'react'
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [fullname, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
  
        axios.post(`https://api.ashyo.fullstackdev.uz/auth/register`, {
            fullname,
            email,
            password,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("user", JSON.stringify(res.data.user || {}));
            navigate("/dashboard");
          })
          .catch((error) => {
            console.error("Ro'yxatdan o'tishda xatolik", error);
          });
      };

  return (
    <Fragment>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="w-full max-w-md">
    <h1 className="mt-16 text-4xl font-bold text-center text-gray-800 mb-8">
      Welcome, Sign up
    </h1>

    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded-md shadow-md"
    >
      <p className="text-center text-gray-600 text-lg mb-8">
        It is our great pleasure to have <br /> you on board!
      </p>

      <div className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          value={fullname}
          onChange={(e) => setfullName(e.target.value)}
          placeholder="Create your Login"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create your Password"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md"
        >
          Sign up
        </button>
      </div>
    </form>
  </div>
</div>


    </Fragment>
  )
}

export default Register;