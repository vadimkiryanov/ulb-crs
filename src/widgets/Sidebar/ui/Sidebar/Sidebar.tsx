import { FC, useState } from "react";
import { classNames } from "@/shared/lib/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { Button, ThemeButtonEnum } from "@/shared/ui/Button";
import { LangSwitcher } from "@/widgets/LangSwitcher";

export const Sidebar: FC<ISidebarProps> = ({ className, ...props }) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
			data-testid="sidebar"
			{...props}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				theme={ThemeButtonEnum.CLEAR}
				className={cls.collapseBtn}
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};

interface ISidebarProps {
	className?: string;
}
