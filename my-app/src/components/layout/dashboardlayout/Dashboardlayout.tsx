import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../blocks'
import SideNav from '../../blocks/dashboardblock/SideNav'

const Dashboardlayout = () => {
  return (
    <div style={{width: "100%", height: "100vh", display: "flex", justifyContent:"center", alignItems: "center"}}>

        <Header />

        <div style={{display:"flex"}}>
            <SideNav />
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboardlayout