import React, { FC, useEffect, useState } from "react";
import "./css/Timeline.css";
import { Post } from "./Post";
import { TweetBox } from "./TweetBox";
import { db } from "../../firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";

export const Timeline: FC = () => {
	// 投稿情報を管理するState
	const [posts, setPosts] = useState<DocumentData[]>([]);

	// マウント(DB接続)時のみデータを取得する
	useEffect(() => {
		// dbからpostsテーブルのデータを取得
		const postData = collection(db, "posts");
		// querySnapshot内にデータ情報が格納されている
		// querySnapshot.docsにpostsに格納されているデータをJSONオブジェクト形式で取得できる
		getDocs(postData).then((querySnapshot) => {
			setPosts(querySnapshot.docs.map((doc) => doc.data()));
		});
		console.log("aaa");
	}, []);

	return (
		<div className="timeline">
			{/* ヘッダー */}
			<div className="timeline_header">
				<h2>ホーム</h2>
			</div>

			{/* ツイートボックス */}
			<TweetBox />

			{/* 投稿情報 */}
			{posts.map((post) => (
				<Post
					// ユーザーの表示名
					displayName={post.displayName}
					// ユーザー名
					username={post.username}
					// 認証済みかどうか
					verified={post.verified}
					// 投稿内容
					text={post.text}
					// ユーザーアイコン
					avatar={post.avatar}
					// 投稿画像
					image={post.image}
				/>
			))}
		</div>
	);
};
