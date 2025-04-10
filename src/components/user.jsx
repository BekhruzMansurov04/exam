import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.ashyo.fullstackdev.uz/users/${id}`);
        setUser(response.data); 
        setLoading(false);
      } catch (err) {
        setError('Xatolik'); 
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>; 
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>; 
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
      <Link to="/teachers" className="text-teal-500 hover:underline">
        ← Back To Teachers
      </Link>

        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">User Details</h2>

        {user ? (
          <div>
            <div className="flex justify-center mb-6">
              {user.image ? (
                <img
                  src={`https://api.ashyo.fullstackdev.uz/${user.image}`}
                  alt={user.fullname}
                  className="w-40 h-40 object-cover rounded-full border-4 border-blue-500"
                />
              ) : (
                <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                  No Image
                </div>
              )}
            </div>

            <div className="mb-4">
              <strong className="text-lg">Full Name:</strong>
              <p className="text-md text-gray-700">{user.fullname}</p>
            </div>

            <div className="mb-4">
              <strong className="text-lg">Email:</strong>
              <p className="text-md text-gray-700">{user.email}</p>
            </div>

            <div className="mb-4">
              <strong className="text-lg">Phone Number:</strong>
              <p className="text-md text-gray-700">{user.phone_number}</p>
            </div>

            <div className="mb-4">
              <strong className="text-lg">Role:</strong>
              <p className="text-md text-gray-700">{user.role}</p>
            </div>
          </div>
        ) : (
          <div>Foydalanuvchi topilmadi..</div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
