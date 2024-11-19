import React, { Suspense, useContext, useState } from "react";

import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from "@/app/providers/ThemeProvider";
import { AboutPageLazy } from "@/pages/AboutPage";
import { MainPageLazy } from "@/pages/MainPage";
import { clsx } from "@/shared/lib/clsx";

export const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={clsx("app", {}, [theme, "hello"])}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to={"/"}>Main</Link>
			<Link to={"/about"}>About</Link>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={"/about"} element={<AboutPageLazy />} />
					<Route path={"/"} element={<MainPageLazy />} />
				</Routes>
			</Suspense>
		</div>
		// <Counter />
	);
};
