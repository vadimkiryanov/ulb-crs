import "./styles/index.scss";
import { Link } from "react-router-dom";
import { clsx } from "@/shared/lib/clsx";
import { RouterProvider } from "./providers/router";
import { useTheme } from "./providers/theme";

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
