import Search from "@mui/icons-material/Search";
import React from "react";

export const Widgets = () => {
	return (
		<div className="widgets">
			<div className="widgets_input">
				<Search className="widgets_searchIcon" />
				<input type="text" placeholder="キーワード検索" />
			</div>

			<div className="widgets_widgetContainer">
				<h2>いまどうしてる？</h2>

				{/* ライブラリを追加・追記 */}
			</div>
		</div>
	);
};
