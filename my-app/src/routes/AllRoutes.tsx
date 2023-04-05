import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import { DashBoardLayout } from "../components/layout/dashboardlayout";
import DashBoardHomePage from "../pages/DashBoardHomePage";
// import { Home } from "../pages";
import { ErrorBoundary, fetchDictionary } from "../utils";
import NotFound from "../utils/hoc/NotFound";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const DashboardHomePage = lazy(()=> import ("../pages/DashBoardHomePage"))

export const element = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Home />,
				errorElement: <ErrorBoundary />,
				hasErrorBoundary: true,
				loader: fetchDictionary,
			},

			{
				path: "/about",
				element: <About />,
				errorElement: <ErrorBoundary />,
				hasErrorBoundary: true,
			},

			{
				path: "/dashboard",
				element: <DashBoardLayout />,
				children:[{
					index: true,
					element: <DashBoardHomePage />,
					errorElement: <ErrorBoundary />,
					hasErrorBoundary: true
				}]
			}
		],
	},

	{
		path: "*",
		element: <NotFound />,
	},
]);
