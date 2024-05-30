import { InfoName, TaskType } from "../../types";
import { LuLayoutTemplate } from "react-icons/lu";
import { FaCloudUploadAlt, FaFolderOpen, FaShapes } from "react-icons/fa";
import { FaTextHeight } from "react-icons/fa6";
import { BsImages } from "react-icons/bs";
import { RxTransparencyGrid } from "react-icons/rx";
import { useMainContext } from "../../context/MainProvide.tsx";

const SideNav = () => {
	const {
		setElements,
		state: { show },
	} = useMainContext();
	return (
		<div className="w-[80px] bg-[#18191B] z-50 h-full text-gray-400 overflow-y-auto">
			<div
				onClick={() => setElements(TaskType.DESIGN, InfoName.DESIGN)}
				className={` ${
					show.name === InfoName.DESIGN ? "bg-[#252627]" : ""
				} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<LuLayoutTemplate />
				</span>
				<span className="text-xs font-medium">Design</span>
			</div>

			<div
				onClick={() => setElements(TaskType.SHAPE, InfoName.DESIGN)}
				className={`${
					show.name === InfoName.SHAPE ? "bg-[#252627]" : ""
				} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<FaShapes />
				</span>
				<span className="text-xs font-medium">Shapes</span>
			</div>

			<div
				onClick={() => setElements(TaskType.IMAGE, InfoName.UPLOAD_IMAGE)}
				className={`${
					show.name === InfoName.UPLOAD_IMAGE ? "bg-[#252627]" : ""
				} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<FaCloudUploadAlt />
				</span>
				<span className="text-xs font-medium">Upload</span>
			</div>

			<div
				onClick={() => setElements(TaskType.TEXT, InfoName.TEXT)}
				className={`${
					show.name === InfoName.TEXT ? "bg-[#252627]" : ""
				} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<FaTextHeight />
				</span>
				<span className="text-xs font-medium">Text</span>
			</div>

			<div
				onClick={() => setElements(TaskType.PROJECT, InfoName.PROJECTS)}
				className={`${
					show.name === InfoName.PROJECTS ? "bg-[#252627]" : ""
				} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<FaFolderOpen />
				</span>
				<span className="text-xs font-medium">Project</span>
			</div>

			<div
				onClick={() => setElements(TaskType.INIT_IMAGE, InfoName.IMAGES)}
				className={`${
					show.name === InfoName.IMAGES ? "bg-[#252627]" : ""
				} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<BsImages />
				</span>
				<span className="text-xs font-medium">Images</span>
			</div>

			<div
				onClick={() => setElements(TaskType.BACKGROUND, InfoName.BACKGROUND)}
				className={`${
					show.name === InfoName.BACKGROUND ? "bg-[#252627]" : ""
				} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
			>
				<span className="text-2xl">
					<RxTransparencyGrid />
				</span>
				<span className="text-xs font-medium">Background</span>
			</div>
		</div>
	);
};

export default SideNav;
