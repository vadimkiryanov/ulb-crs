import "./styles/index.scss";
import { classNames } from "@/shared/lib/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

export const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme, "hello"])}>
			<Navbar />
			<div className="content-page">
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	);
};
