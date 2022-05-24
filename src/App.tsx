import { FC } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";

export const App: FC = () => {
	return (
		<div className="app">
			<Sidebar />
		</div>
	);
};
