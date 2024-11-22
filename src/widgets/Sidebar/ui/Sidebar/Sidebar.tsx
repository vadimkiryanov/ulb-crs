import { FC, useState } from "react";
import { classNames } from "@/shared/lib/classNames";
import * as cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { Button, ThemeButtonEnum } from "@/shared/ui/Button";

export const Sidebar: FC<ISidebarProps> = ({ className, ...props }) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])} {...props}>
			<Button onClick={onToggle} theme={ThemeButtonEnum.CLEAR}>
				toggle
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				{/* lang switcher */}
			</div>
		</div>
	);
};

interface ISidebarProps {
	className?: string;
}
