import {
	ChatBubbleOutline,
	FavoriteBorder,
	PublishOutlined,
	Repeat,
	VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { FC } from "react";
import "./css/Post.css";

export const Post: FC<{
	displayName: string;
	username: string;
	verified: boolean;
	text: string;
	avatar: string;
	image: string;
}> = ({ displayName, username, verified, text, avatar, image }) => {
	return (
		<div className="post">
			<div className="post_avatar">
				<Avatar src={avatar} />
			</div>
			<div className="post_body">
				<div className="post_header">
					<div className="post_headerText">
						<h3>
							{displayName}
							<span className="post_headerSpecial">
								<VerifiedUser className="post_badge" />@{username}
							</span>
						</h3>
					</div>
					<div className="post_headerDescription">
						<p>{text}</p>
					</div>
				</div>
				<img src={image} alt="画像" />
				<div className="post_footer">
					{/* コメントアイコン */}
					<ChatBubbleOutline fontSize="small" />
					{/* リツイートボタン */}
					<Repeat fontSize="small" />
					{/* いいねボタン */}
					<FavoriteBorder fontSize="small" />
					{/* shareボタン */}
					<PublishOutlined fontSize="small" />
				</div>
			</div>
		</div>
	);
};
