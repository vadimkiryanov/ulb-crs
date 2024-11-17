import React, { Suspense, useContext, useState } from "react";

import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage lazy";
import { ThemeContext, ThemeEnum } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { clsx } from "./helpers/clsx";

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
