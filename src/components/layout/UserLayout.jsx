import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className="flex h-full w-full  ">
    <div className='hidden lg:flex w-96'>
        <SideBar />
    </div>
    <div className="flex flex-col min-h-screen w-full bg-[#fafbfd] ">
      <div className=" flex w-full h-20 bg-white">
      <Header />
      </div>
      <div className=" h-full w-full">
        Admin Dashboard
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default UserLayout
