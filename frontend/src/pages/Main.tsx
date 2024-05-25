import Header_Design from "../components/Header_Design";
import { LuLayoutTemplate } from "react-icons/lu";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";
import { FaTextHeight } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { RxTransparencyGrid } from "react-icons/rx";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Main = () => {
	const [state, setState] = useState("");
	const [show, setShow] = useState({
		status: true,
		name: "",
	});

	const setElements = (type, name) => {
		setState(type);
		setShow({
			state: false,
			name,
		});
	};
	return (
		<div className="min-w-screen h-screen bg-black">
			<Header_Design />

			<div className="flex h-[calc(100%-60px)] w-screen">
				<SideNav setElements={setElements} />

				<Drawer_Box show={show} setShow={setShow} />
			</div>
		</div>
	);
};

export default Main;
type SideNavProps = {
	setElements: (type: string, name: string) => void;
};
const SideNav = ({ setElements }: SideNavProps) => {
	return (
		<div className="w-[80px] bg-[#18191B] z-50 h-full text-gray-400 overflow-y-auto">
			<div
				onClick={() => setElements("design", "design")}
				className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<LuLayoutTemplate />
				</span>
				<span className="text-xs font-medium">Design</span>
			</div>

			<div
				onClick={() => setElements("shape", "shape")}
				className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<FaShapes />
				</span>
				<span className="text-xs font-medium">Shapes</span>
			</div>

			<div
				onClick={() => setElements("image", "uploadImage")}
				className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<FaCloudUploadAlt />
				</span>
				<span className="text-xs font-medium">Upload</span>
			</div>

			<div
				onClick={() => setElements("text", "text")}
				className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<FaTextHeight />
				</span>
				<span className="text-xs font-medium">Text</span>
			</div>

			<div
				onClick={() => setElements("project", "projects")}
				className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<FaFolderOpen />
				</span>
				<span className="text-xs font-medium">Project</span>
			</div>

			<div
				onClick={() => setElements("initImage", "images")}
				className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<BsImages />
				</span>
				<span className="text-xs font-medium">Images</span>
			</div>

			<div
				onClick={() => setElements("background", "background")}
				className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<RxTransparencyGrid />
				</span>
				<span className="text-xs font-medium">Background</span>
			</div>
		</div>
	);
};

type DrawerBoxProps = {
	show: { name: string; status: boolean };
	setShow: (show: { name: string; status: boolean }) => void;
};
const Drawer_Box = ({ show, setShow }: DrawerBoxProps) => {
	return (
		<div className="h-full w-[calc(100%-75px)]">
			<div
				className={`${
					show.status ? "p-0 -left-[350px]" : "px-8 left-[75px] py-5"
				} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-350`}
			>
				<div
					onClick={() => setShow({ name: "", status: true })}
					className="flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full"
				>
					<MdKeyboardArrowLeft />
				</div>
			</div>
		</div>
	);
};
