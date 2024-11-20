import { createContext } from "react";

export enum ThemeEnum {
	LIGHT = "light",
	DARK = "dark",
}

type TThemeContextProps = {
	theme?: ThemeEnum;
	setTheme?: (theme: ThemeEnum) => void;
};

export const ThemeContext = createContext<TThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = "theme";
