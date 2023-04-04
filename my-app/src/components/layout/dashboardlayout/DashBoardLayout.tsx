import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardHeader from '../../blocks/dashboardheader/DashboardHeader'
import { DashBoardSideBar } from '../../blocks/dashboardsidebar'



const DashBoardLayout = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>

    <DashboardHeader />

    <div style={{display: "flex"}} >
        <DashBoardSideBar />
        <Outlet />
    </div>



    </div>
  )
}

export default DashBoardLayout