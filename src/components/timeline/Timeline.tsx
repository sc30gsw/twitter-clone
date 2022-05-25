import React, { FC } from "react";
import "./css/Timeline.css";
import { Post } from "./Post";
import { TweetBox } from "./TweetBox";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const Timeline: FC = () => {
	// dbからpostsテーブルのデータを取得
	const postData = collection(db, "posts");
	// querySnapshot内にデータ情報が格納されている
	// querySnapshot.docsにpostsに格納されているデータをJSONオブジェクト形式で取得できる
	getDocs(postData).then((querySnapshot) => {
		console.log(querySnapshot.docs.map((doc) => doc.data()));
	});

	return (
		<div className="timeline">
			{/* ヘッダー */}
			<div className="timeline_header">
				<h2>ホーム</h2>
			</div>

			{/* ツイートボックス */}
			<TweetBox />

			{/* 投稿情報 */}
			<Post
				// ユーザーの表示名
				displayName="プログラミングチュートリアル"
				// ユーザー名
				username="Shin_Engineer"
				// 認証済みかどうか
				verified={true}
				// 投稿内容
				text="初めてのツイート"
				// ユーザーアイコン
				avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
				// 投稿画像
				image="https://source.unsplash.com/random"
			/>
		</div>
	);
};
