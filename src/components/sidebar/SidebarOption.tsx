import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { FC } from "react";
import "./css/SidebarOption.css";

export const SidebarOption: FC<{
	text: string;
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}> = ({ text, Icon }) => {
	return (
		<div className="sidebarOption">
			<Icon />
			<h2>{text}</h2>
		</div>
	);
};
