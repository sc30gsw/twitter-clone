import Search from "@mui/icons-material/Search";
import React from "react";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";

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

				{/* 指定したIDのツイートを表示する */}
				<TwitterTweetEmbed tweetId={"1528309824257413121"} />
				{/* Twitterのタイムラインを表示する */}
				<TwitterTimelineEmbed
					// プロフィールのタイムラインを指定
					sourceType="profile"
					// 指定したユーザーのタイムラインを表示する
					screenName="cu30rry_"
					// タイムラインを表示する高さを指定
					options={{ height: 400 }}
				/>
				{/* Twitterのshareボタンを表示する */}
				<TwitterShareButton
					// 指定したユーザーがTwitterに投稿をshareできるよう指定する
					url={"https://twitter.com/cu30rry_"}
					// ツイートのオプションを指定できる
					// text: ツイート内容, via: リプライ先
					options={{ text: "#React.js勉強中", via: "cu30rry_" }}
				/>
			</div>
		</div>
	);
};
