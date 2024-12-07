import "./styles/index.scss";
import { classNames } from "@/shared/lib/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import React from "react";

export const App = () => {
	const { theme } = useTheme();
	const { t } = useTranslation();

	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback={<div>{t("zagruzka")}</div>}>
				<Navbar />
				<div className="contentPage">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
