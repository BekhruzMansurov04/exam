import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './nav/header';
import SideBar from './nav/sideBar';
import LoginPage from './components/login';
import Register from './components/register';
import Teachers from './components/teachers';
import Dashboard from './components/dashboard';
import Billing from './components/billing';
import Students from './components/students';
import Settings from './components/settings';
import Exams from './components/exams';
import Home from './components/home';
import AddTeacher from './components/addTeacher';
import UserDetails from './components/user';

function Layout({ children }) {
  return (
    <div className="flex">
      <SideBar /> 
      <div className="flex-1 p-4">
        <Header /> 
        {children} 
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/addTeacher" element={<AddTeacher />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/students" element={<Students />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
