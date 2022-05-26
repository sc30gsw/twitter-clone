import { Avatar, Button } from "@mui/material";
import React, { FC, useState } from "react";
import "./css/TweetBox.css";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const TweetBox: FC = () => {
	// ツイートのテキストを管理するState(初期値: 空)
	const [tweetMessage, setTweetMessage] = useState<string>("");
	// ツイートの画像URLを管理するState(初期値: 空)
	const [tweetImage, setTweetImage] = useState<string>("");

	/**
	 * ボタン押下時にツイートをFirebaseDBに登録する処理
	 *
	 * @param e event
	 */
	const sendTweet = (e: React.MouseEvent<HTMLButtonElement>) => {
		// ボタン押下時、画面が遷移しないようにする
		e.preventDefault();

		// FirebaseDBにデータを追加する
		addDoc(collection(db, "posts"), {
			displayName: "プログラミングチュートリアル",
			username: "Shin_Engineer",
			verified: true,
			text: tweetMessage,
			avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
			image: tweetImage,
			timestamp: serverTimestamp(),
		});

		// 投稿が完了したら、textとimageの入力欄を空にする
		setTweetMessage("");
		setTweetImage("");
	};

	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox_input">
					<Avatar />
					<input
						value={tweetMessage}
						placeholder="いまどうしてる？"
						type="text"
						onChange={(e) => setTweetMessage(e.target.value)}
					/>
				</div>
				<input
					value={tweetImage}
					className="tweetBox_imageInput"
					placeholder="画像のURLを入力してください"
					type="text"
					onChange={(e) => setTweetImage(e.target.value)}
				/>
				<Button
					className="tweetBox_tweetButton"
					type="submit"
					onClick={sendTweet}
				>
					ツイートする
				</Button>
			</form>
		</div>
	);
};
