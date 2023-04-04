import React from 'react'
import { Outlet } from 'react-router-dom'
import { DashBoardHeader, DashBoardSideBar } from '../../blocks'
import DashboardHeader from '../../blocks/dashboardheader/DashboardHeader'

const DashBoardLayout = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>

    <DashBoardHeader />

    <div style={{display: "flex"}} >
        <DashBoardSideBar />
        <Outlet />
    </div>



    </div>
  )
}

export default DashBoardLayout