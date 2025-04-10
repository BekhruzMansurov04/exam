import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, LogOut } from 'lucide-react';

export default function Header() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const fullname = user?.fullname || 'User';

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center bg-gray-50 shadow px-6 py-4">
      <h1 className="text-2xl font-semibold text-black">Udemy Inter. School</h1>

      <div className="flex items-center gap-6">
        <div className="text-gray-700 font-medium hidden sm:block">
          Welcome, <span className="text-blue-600 font-semibold">{fullname}</span>
        </div>

        <Bell size={20} className="cursor-pointer text-gray-600 hover:text-blue-500 transition" />

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 hover:bg-blue-600 text-blue px-4 py-2 rounded-md transition duration-300"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}


