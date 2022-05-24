import React from "react";
import "./css/Timeline.css";
import { TweetBox } from "./TweetBox";

export const Timeline = () => {
	return (
		<div className="timeline">
			{/* ヘッダー */}
			<div className="timeline_header">
				<h2>ホーム</h2>
			</div>

			{/* ツイートボックス */}
			<TweetBox />

			{/* 投稿情報 */}
		</div>
	);
};
