import React, { Fragment } from 'react'
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
    
        try {
          const res = await axios.post("https://api.ashyo.fullstackdev.uz/auth/login", { email, password });
          const token = res.data.accessToken;
    
          if (token) {
            
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/dashboard");
          } else {
            setError(" Serverdan noto'g'ri javob keldi. Iltimos, qaytadan urinib ko'ring.");
          }
        } catch (err) {
          console.error("Login failed:", err);
          setError("Email yoki parol noto'g'ri");
        } finally {
          setLoading(false);
        }
      };
    

  return (
    <Fragment>
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
  <h1 className="mt-8 text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
    Welcome, Login to your account
  </h1>

  <div className="w-full max-w-md border  p-10 bg-white rounded-md shadow-md">
    
    <p className="text-center text-gray-500 text-lg mb-6">
      It is our great pleasure to have <br /> you on board!
    </p>

    {error && (
      <p className="text-red-500 text-center mb-4">{error}</p>
    )}

    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Login"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-md transition-all duration-300 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Signing In..." : "Login"}
      </button>
    </form>

    <p className="text-center mt-4">
      <Link to="/register" className="text-blue-500 hover:underline text-sm font-medium">
        Sign up
      </Link>
    </p>
  </div>
</div>


    </Fragment>
  )
}

export default LoginPage;