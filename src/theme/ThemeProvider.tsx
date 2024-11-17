import React, { FC, PropsWithChildren, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from "./ThemeContext";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum) || ThemeEnum.LIGHT;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeEnum>(defaultTheme);

	const defaultProps = useMemo(() => ({ theme: theme, setTheme: setTheme }), [theme]);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
