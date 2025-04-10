import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, GraduationCap, CreditCard, Settings, FileText, Star } from 'lucide-react';

const menuItems = [
  { id: 1, icon: <Home size={20} />, label: 'Dashboard', to: '/dashboard' },
  { id: 2, icon: <Users size={20} />, label: 'Teachers', to: '/teachers' },
  { id: 3, icon: <GraduationCap size={20} />, label: 'Students', to: '/students' },
  { id: 4, icon: <CreditCard size={20} />, label: 'Billing', to: '/billing' },
  { id: 5, icon: <Settings size={20} />, label: 'Settings and profile', to: '/settings' },
  { id: 6, icon: <FileText size={20} />, label: 'Exams', to: '/exams' },
];

export default function SideBar() {
  const [close, setClose] = useState(false);

  return (
    <div className={`h-screen bg-[#0d1b4c] text-white flex flex-col transition-all duration-300 ${close ? 'w-[80px]' : 'w-[260px]'}`}>
      <div className="flex items-center gap-3 px-4 py-6">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-[#0d1b4c]">M</span>
        </div>
        {!close && <h1 className="text-lg font-semibold">Udemy Inter. school</h1>}
      </div>

      <nav className="flex-1 px-2 space-y-1">
        {menuItems.map((item) => (
          <Link to={item.to} key={item.id} className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer hover:bg-[#13235f]`}>
            {item.icon}
            {!close && <span>{item.label}</span>}
          </Link>
        ))}

        <hr className="my-4 border-dotted border-blue-400" />

        <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#13235f] rounded-md cursor-pointer">
          <Star size={20} />
          {!close && (
            <span className="flex items-center gap-2">
              Features
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">NEW</span>
            </span>
          )}
        </div>
      </nav>

      <button
        onClick={() => setClose(!close)}
        className="m-4 p-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-all"
      >
        {close ? '➤' : '◀'}
      </button>
    </div>
  );
}
