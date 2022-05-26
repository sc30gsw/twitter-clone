import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { FC } from "react";
import "./css/SidebarOption.css";

export const SidebarOption: FC<{
	text: string;
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
	active: boolean;
}> = ({ text, Icon, active }) => {
	return (
		<div className={`sidebarOption ${active && "sidebarOption_active"}`}>
			<Icon />
			<h2>{text}</h2>
		</div>
	);
};
