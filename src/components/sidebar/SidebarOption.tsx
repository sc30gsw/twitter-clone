import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { FC } from "react";

export const SidebarOption: FC<{
	text: string;
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}> = ({ text, Icon }) => {
	return (
		<div>
			<Icon />
			<h2>{text}</h2>
		</div>
	);
};
