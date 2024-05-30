import Header_Design from "../components/Header_Design";
import PropertiesControlPanel from "../components/PropertiesControlPanel";
import MainProvider from "../context/MainProvide";
import SideNav from "../components/SideNav";
import Drawer_Box from "../components/Drawer_Box.tsx";

const Main = () => {
	// ui
	return (
		<MainProvider>
			<div className="min-w-screen h-screen bg-black">
				<Header_Design />

				<div className="flex h-[calc(100%-60px)] w-screen">
					<SideNav />

					<div className="h-full w-[calc(100%-75px)]">
						<Drawer_Box />
						<PropertiesControlPanel />
					</div>
				</div>
			</div>
		</MainProvider>
	);
};

export default Main;
