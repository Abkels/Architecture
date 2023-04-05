import React from 'react'
import { Outlet } from 'react-router-dom'
import DashBoardHomePage from '../../../pages/DashBoardHomePage'
import { Header } from '../../blocks'
import SideNav from '../../blocks/dashboardblock/SideNav'

const Dashboardlayout = () => {
  return (
    <div style={{width: "100%", height: "100vh", display: "flex",  flexDirection: "column"}}>

        <Header />

        <div style={{display:"flex"}}>
            <SideNav />
            <DashBoardHomePage />
        </div>
    </div>
  )
}

export default Dashboardlayout