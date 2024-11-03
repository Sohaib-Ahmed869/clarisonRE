import React from 'react'
import Header from './Header'
import SideBar from './SideBar'

const UserLayout = () => {
  return (
    <div className="flex flex-col w-full ">
    <div>
      <Header />
    </div>
    <div className="flex min-h-screen ">
      <div className=" flex w-1/6">
        <SideBar />
      </div>
      <div className="bg-gray-200 w-full">
        Admin Dashboard
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default UserLayout
