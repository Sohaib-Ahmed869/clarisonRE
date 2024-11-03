import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-full w-full">
      {/* Sidebar is shown on lg and hidden on smaller screens unless open */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`} onClick={handleToggle}></div>
      <div className={`fixed top-0 left-0 sm:w-96 h-full bg-white transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:block`}>
        <SideBar open={sidebarOpen} handleToggle={handleToggle} />
      </div>
          <GiHamburgerMenu
            onClick={handleToggle}
            className={`text-gray-800 text-2xl z-40 lg:hidden ${sidebarOpen ? 'hidden' : 'block'}`}
          />
      <div className="flex flex-col min-h-screen w-full bg-[#fafbfd]">
        <div className="flex w-full h-20 bg-white">
          <Header />
          {/* Hamburger menu shown on small screens */}
        </div>
        <div className="h-full w-full">
          Admin Dashboard
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
