import { Avatar, Button } from "@mui/material";
import React, { FC } from "react";
import "./css/TweetBox.css";

export const TweetBox: FC = () => {
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox_input">
					<Avatar />
					<input placeholder="いまどうしてる？" type="text" />
				</div>
				<input
					className="tweetBox_imageInput"
					placeholder="画像のURLを入力してください"
					type="text"
				/>
				<Button className="tweetBox_tweetButton" type="submit">
					ツイートする
				</Button>
			</form>
		</div>
	);
};
