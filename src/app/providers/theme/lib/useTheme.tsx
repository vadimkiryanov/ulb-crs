import React, { useContext } from "react";
import { ThemeContext, ThemeEnum, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";

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
