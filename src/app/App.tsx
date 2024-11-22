import "./styles/index.scss";
import { classNames } from "@/shared/lib/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";
import { Navbar } from "@/widgets/Navbar";

export const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme, "hello"])}>
			<Navbar />
			<AppRouter />
		</div>
	);
};
