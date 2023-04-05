import React from "react";
import { Footer, Header } from "../../blocks";
import { Outlet } from "react-router-dom";
import { DashBoardLayout } from "../dashboardlayout";
const HomeLayout = () => {
	return (
		<div>
			{/* <Header />
			<Outlet />
			<Footer /> */}
			<DashBoardLayout />

		</div>
	);
};

export default HomeLayout;
