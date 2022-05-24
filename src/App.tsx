import { FC } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Timeline } from "./components/timeline/Timeline";

export const App: FC = () => {
	return (
		<div className="app">
			{/* Sidebar */}
			<Sidebar />

			{/* Timeline */}
			<Timeline />

			{/* Widget */}
		</div>
	);
};
