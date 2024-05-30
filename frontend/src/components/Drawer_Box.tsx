import { MdKeyboardArrowLeft } from "react-icons/md";
import { InfoName, ShapeType, TaskType } from "../types";
import TemplateDesign from "./main/TemplateDesign.tsx";
import MyImages from "./MyImages";
import Projects from "./Projects";
import Image from "./Image";
import { useMainContext } from "../context/MainProvide.tsx";

const Drawer_Box = () => {
	const {
		state: { show, typeState },
		createShape,
		setState,
		add_text,
		add_image,
	} = useMainContext();

	return (
		<div
			className={`${
				show.status ? "p-0 -left-[350px]" : "px-8 left-[75px] py-5"
			} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-350`}
		>
			<div
				onClick={() => {
					setState((draft) => {
						draft.show = { name: "", status: true };
					});
				}}
				className="flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full"
			>
				<MdKeyboardArrowLeft />
			</div>
			{typeState === TaskType.DESIGN && (
				<div className="grid grid-cols-2 gap-2">
					<TemplateDesign type="main" />
				</div>
			)}
			{typeState === TaskType.SHAPE && (
				<div className="grid grid-cols-3 gap-2">
					<div
						onClick={() => createShape(InfoName.SHAPE, ShapeType.RECTANGLE)}
						className="h-[90px] bg-[#3c3c3d] cursor-pointer"
					></div>
					<div
						onClick={() => createShape(InfoName.SHAPE, ShapeType.CIRCLE)}
						className="h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full"
					></div>
					<div
						onClick={() => createShape(InfoName.SHAPE, ShapeType.TRIANGLE)}
						style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
						className="h-[90px] bg-[#3c3c3d] cursor-pointer  "
					></div>
				</div>
			)}
			{typeState === TaskType.IMAGE && <MyImages />}
			{typeState === TaskType.TEXT && (
				<div className="grid grid-cols-1 gap-2">
					<div
						onClick={() => add_text(InfoName.TEXT, TaskType.TITLE)}
						className="bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white text-xl rounded-sm"
					>
						<h2>Add A Text </h2>
					</div>
				</div>
			)}
			{typeState === TaskType.PROJECT && <Projects />}
			{typeState === TaskType.INIT_IMAGE && (
				<div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
					<Image add_image={add_image} />
				</div>
			)}
			{typeState === TaskType.BACKGROUND && (
				<div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
					<div className="grid grid-cols-2 gap-2">
						{[1, 2, 3, 4, 5, 6].map((img, i) => (
							<div
								onClick={() => {
									setState((draft) => {
										draft.image = "http://localhost:5173/canva.png";
									});
								}}
								key={i}
								className="w-full h-[90px] overflow-hidden rounded-sm cursor-pointer"
							>
								<img
									className="w-full h-full object-fill"
									src="http://localhost:5173/canva.png"
									alt=""
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Drawer_Box;
