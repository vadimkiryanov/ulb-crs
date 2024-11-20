import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "@/app/providers/ThemeProvider";
import { clsx } from "@/shared/lib/clsx";
import { RouterProvider } from "./providers/router";

export const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={clsx("app", {}, [theme, "hello"])}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to={"/"}>Main</Link>
			<Link to={"/about"}>About</Link>
			<RouterProvider />
		</div>
	);
};
