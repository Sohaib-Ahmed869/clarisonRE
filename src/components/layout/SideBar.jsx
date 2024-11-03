import React from 'react'
import { NavLink } from 'react-router-dom'
import image1 from '../../assets/sidebar/dashboard.png'
import image2 from '../../assets/sidebar/create-send-flyer.png'
import image3 from '../../assets/sidebar/my-schedule-flyer.png'
import image4 from '../../assets/sidebar/my-targeted-audience.png'
import image5 from '../../assets/sidebar/my-saved-work.png'
import image6 from '../../assets/sidebar/clarison-support.png'
import image7 from '../../assets/sidebar/account-setting.png'
import logo from '../../assets/sidebar/sidebar-logo.png'

const SideBar = () => {
  return (
    <div className="w-full p-4 h-screen bg-[url('/src/assets/sidebar/sidebar-image.png')] bg-cover bg-center">

        <img src={logo} className='py-5' alt="logo" />
      
      <NavLink
        to="/user/dashboard"
        className={({ isActive }) => isActive ? 'bg-secondary text-white flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300' : 'flex text-[#737791] items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300'}
      >
        <img src={image1} alt="Dashboard"  />
        <h1 className="ml-3">Dashboard</h1>
      </NavLink>
      <NavLink
        to="/user/create-send-flyer"
        className={({ isActive }) => isActive ? 'bg-secondary text-white flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300' : 'flex text-[#737791] items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300'}
      >
        <img src={image2} alt="Create & Send Flyer"  />
        <h1 className="ml-3">Create & Send Flyer</h1>
      </NavLink>
      <NavLink
        to="/user/my-schedule-flyer"
        className={({ isActive }) => isActive ? 'bg-secondary text-white flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300' : 'flex text-[#737791] items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300'}
      >
        <img src={image3} alt="My Schedule"  />
        <h1 className="ml-3">My Schedule</h1>
      </NavLink>
      <NavLink
        to="/user/my-targeted-audience"
        className={({ isActive }) => isActive ? 'bg-secondary text-white flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300' : 'flex text-[#737791] items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300'}
      >
        <img src={image4} alt="My Targeted Audience"  />
        <h1 className="ml-3">My Targeted Audience</h1>
      </NavLink>
      <NavLink
        to="/user/my-saved-work"
        className={({ isActive }) => isActive ? 'bg-secondary text-white flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300' : 'flex text-[#737791] items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300'}
      >
        <img src={image5} alt="My Saved Work"  />
        <h1 className="ml-3">My Saved Work</h1>
      </NavLink>
      <NavLink
        to="/user/clarison-support"
        className={({ isActive }) => isActive ? 'bg-secondary text-white flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300' : 'flex text-[#737791] items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300'}
      >
        <img src={image6} alt="ClarisonRE Support"  />
        <h1 className="ml-3">ClarisonRE Support</h1>
      </NavLink>
      <NavLink
        to="/user/account-setting"
        className={({ isActive }) => isActive ? 'bg-secondary text-white flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300' : 'flex text-[#737791] items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300'}
      >
        <img src={image7} alt="Account Setting"  />
        <h1 className="ml-3">Account Setting</h1>
      </NavLink>
     
    </div>
  )
}

export default SideBar
