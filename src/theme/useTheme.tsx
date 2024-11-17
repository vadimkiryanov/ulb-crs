import React, { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from "./ThemeContext";

export const useTheme = (): TUseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);
	const toggleTheme = () => {
		const newTheme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return { theme, toggleTheme };
};

type TUseThemeResult = {
	toggleTheme: () => void;
	theme: ThemeEnum;
};
