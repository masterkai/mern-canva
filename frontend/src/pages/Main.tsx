import Header_Design from "../components/Header_Design";
import { LuLayoutTemplate } from "react-icons/lu";
import { FaCloudUploadAlt, FaFolderOpen, FaShapes } from "react-icons/fa";
import { FaTextHeight } from "react-icons/fa6";
import { BsImages } from "react-icons/bs";
import { RxTransparencyGrid } from "react-icons/rx";
import { useEffect, useRef } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import TemplateDesign from "../components/main/TemplateDesign";
import MyImages from "../components/MyImages";
import Projects from "../components/Projects";
import Image from "../components/Image";
import CreateComponent from "../components/CreateComponent";
import { idGenerator } from "../utils";
import {
	InfoName,
	InfoType,
	MainState,
	ShapeType,
	ShowType,
	TaskType,
} from "../types";
import { useImmer } from "use-immer";

const Main = () => {
	const opacityInputRef = useRef<HTMLInputElement>(null);
	const zIndexInputRef = useRef<HTMLInputElement>(null);
	const [state, setState] = useImmer<MainState>({
		current_component: null,
		components: [
			{
				id: idGenerator(),
				name: InfoName.MAIN_FRAME,
				type: ShapeType.RECTANGLE,
				height: 500,
				width: 650,
				z_index: 1,
				color: "#fff",
				image: "",
				setCurrentComponent: (a: InfoType) => {
					setState((draft) => {
						draft.current_component = a;
					});
				},
				moveElement,
				resizeElement,
				rotateElement,
				left: 0,
				top: 0,
				opacity: 0,
				rotate: 0,
			},
		],
		image: "",
		typeState: null,
		color: "",
		rotate: 0,
		left: 0,
		top: 0,
		width: 0,
		height: 0,
		padding: 0,
		fontSize: 0,
		fontWeight: 0,
		text: "",
		opacity: 0,
		zIndex: 0,
		show: { status: true, name: "" },
	});
	const {
		typeState,
		current_component,
		components,
		image,
		color,
		rotate,
		left,
		top,
		width,
		height,
		opacity,
		zIndex,
		show,
	} = state;

	const setElements = (type: ShapeType | TaskType | null, name: InfoName) => {
		setState((draft) => {
			draft.typeState = type;
			draft.show.name = name;
			draft.show.status = false;
		});
	};

	const add_text = (name: InfoName, type: TaskType) => {
		const style = {
			id: idGenerator(),
			name: name,
			type,
			left: 10,
			top: 10,
			opacity: 1,
			rotate,
			z_index: 10,
			padding: 6,
			font: 22,
			title: "Add Your Text",
			weight: 400,
			color: "#3c3c3d",
			setCurrentComponent: (a: InfoType) => {
				setState((draft) => {
					draft.current_component = a;
				});
			},
			moveElement,
			resizeElement,
			rotateElement,
		};

		setState((draft) => {
			draft.components.push(style);
			draft.current_component = style;
			draft.fontWeight = 0;
			draft.fontSize = 0;
		});
	};
	function initializeCurrentComponent(currentInfo: InfoType) {
		setState((draft) => {
			draft.current_component = null;
			draft.color = "";
			draft.left = 0;
			draft.top = 0;
			draft.width = 0;
			draft.height = 0;
			draft.opacity = 0;
			draft.rotate = 0;
			draft.zIndex = 0;
			draft.current_component = currentInfo;
		});
	}

	function moveElement(id: string, currentInfo: InfoType) {
		initializeCurrentComponent(currentInfo);
		let isMoving = true;

		const currentDiv = document.getElementById(id)!;

		const mouseMove = ({ movementX, movementY }: MouseEvent) => {
			const getStyle = window.getComputedStyle(currentDiv);
			const left = parseInt(getStyle.left);
			const top = parseInt(getStyle.top);
			if (isMoving) {
				currentDiv.style.left = `${left + movementX}px`;
				currentDiv.style.top = `${top + movementY}px`;
			}
		};

		const mouseUp = (e: MouseEvent) => {
			e.preventDefault();
			isMoving = false;
			window.removeEventListener("mousemove", mouseMove);
			window.removeEventListener("mouseup", mouseUp);
			setState((draft) => {
				draft.left = parseInt(currentDiv.style.left);
				draft.top = parseInt(currentDiv.style.top);
			});
		};

		window.addEventListener("mousemove", mouseMove);
		window.addEventListener("mouseup", mouseUp);
	}

	function resizeElement(id: string, currentInfo: InfoType) {
		initializeCurrentComponent(currentInfo);
		let isMoving = true;

		const currentDiv = document.getElementById(id)!;

		const mouseMove = ({ movementX, movementY }: MouseEvent) => {
			const getStyle = window.getComputedStyle(currentDiv);
			const width = parseInt(getStyle.width);
			const height = parseInt(getStyle.height);
			if (isMoving) {
				currentDiv.style.width = `${width + movementX}px`;
				currentDiv.style.height = `${height + movementY}px`;
			}
		};

		const mouseUp = (e: MouseEvent) => {
			e.preventDefault();
			isMoving = false;
			window.removeEventListener("mousemove", mouseMove);
			window.removeEventListener("mouseup", mouseUp);
			setState((draft) => {
				draft.width = parseInt(currentDiv.style.width);
				draft.height = parseInt(currentDiv.style.height);
			});
		};

		window.addEventListener("mousemove", mouseMove);
		window.addEventListener("mouseup", mouseUp);
	}

	function rotateElement(id: string, currentInfo: InfoType) {
		initializeCurrentComponent(currentInfo);
		const target = document.getElementById(id)!;

		const mouseMove = ({ movementX }: MouseEvent) => {
			const getStyle = window.getComputedStyle(target);
			const trans = getStyle.transform;
			const values = trans?.split("(")[1]?.split(")")[0]?.split(",");
			// console.log(values);
			const angle = Math.round(
				Math.atan2(Number(values[1]), Number(values[0])) * (180 / Math.PI),
			);

			let deg = angle < 0 ? angle + 360 : angle;
			if (movementX) {
				deg = deg + movementX;
			}
			target.style.transform = `rotate(${deg}deg)`;
		};

		const mouseUp = (e: MouseEvent) => {
			e.preventDefault();
			window.removeEventListener("mousemove", mouseMove);
			window.removeEventListener("mouseup", mouseUp);

			const getStyle = window.getComputedStyle(target);
			const trans = getStyle.transform;
			const values = trans?.split("(")[1]?.split(")")[0]?.split(",");
			const angle = Math.round(
				Math.atan2(Number(values[1]), Number(values[0])) * (180 / Math.PI),
			);

			const deg = angle < 0 ? angle + 360 : angle;
			// setRotate(deg);
			setState((draft) => {
				draft.rotate = deg;
			});
		};

		window.addEventListener("mousemove", mouseMove);
		window.addEventListener("mouseup", mouseUp);
	}

	function removeComponent(id: number) {
		const temp = components.filter((c) => c.id !== id);
		setState((draft) => {
			draft.current_component = null;
			draft.components = temp;
		});
	}

	// remove_background function
	const remove_background = () => {
		if (current_component) {
			const index = components.findIndex((c) => c.id === current_component.id);
			setState((draft) => {
				draft.components[index].image = "";
				draft.image = "";
			});
		}
	};

	const createShape = (name: InfoName, type: ShapeType) => {
		const style = {
			id: idGenerator(),
			name: name,
			type,
			left: 10,
			top: 10,
			opacity: 1,
			width: 200,
			height: 200,
			rotate,
			z_index: 2,
			color: "#3c3c3d",
			setCurrentComponent: (a: InfoType) => {
				setState((draft) => {
					draft.current_component = a;
				});
			},
			moveElement,
			resizeElement,
			rotateElement,
		};
		setState((draft) => {
			draft.components.push(style);
			draft.current_component = style;
		});
	};

	const opacityHandle = () => {
		if (opacityInputRef?.current) {
			setState((draft) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				draft.opacity = parseFloat(opacityInputRef.current.value);
			});
		}
	};

	useEffect(() => {
		if (current_component) {
			const index = components.findIndex((c) => c.id === current_component.id);
			// const temp = components.filter((c) => c.id !== current_component.id);

			if (current_component.name !== InfoName.TEXT) {
				// components[index].width = width || current_component.width;
				// components[index].height = height || current_component.height;
				// components[index].rotate = rotate || current_component.rotate;
				setState((draft) => {
					draft.components[index].width = width || current_component.width;
					draft.components[index].height = height || current_component.height;
					draft.components[index].rotate = rotate || current_component.rotate;
				});
			}
			if (current_component.name === InfoName.MAIN_FRAME && image) {
				setState((draft) => {
					draft.components[index].image = image || current_component.image;
				});
			}

			if (current_component.name !== InfoName.MAIN_FRAME) {
				setState((draft) => {
					draft.components[index].left = left || current_component.left;
					draft.components[index].top = top || current_component.top;
					draft.components[index].opacity =
						opacity || current_component.opacity;
					draft.components[index].z_index = zIndex || current_component.z_index;
				});
			}

			setState((draft) => {
				draft.components[index].color = color || current_component.color;
			});
		}
	}, [zIndex, color, image, left, top, width, height, opacity]);
	// ui

	return (
		<div className="min-w-screen h-screen bg-black">
			<Header_Design />

			<div className="flex h-[calc(100%-60px)] w-screen">
				<SideNav show={show} setElements={setElements} />

				<div className="h-full w-[calc(100%-75px)]">
					<Drawer_Box
						addText={add_text}
						createShape={createShape}
						setImage={(image) => {
							setState((draft) => {
								draft.image = image;
							});
						}}
						state={typeState}
						show={show}
						setShow={(show: { name: string; status: boolean }) =>
							setState((draft) => {
								draft.show = show;
							})
						}
					/>

					<div className="w-full flex justify-center h-full">
						<div
							className={`flex justify-center relative items-center h-full ${
								!current_component
									? "w-full"
									: "w-[calc(100%-250px)] overflow-hidden"
							}`}
						>
							<div className="m-w-[650px] m-h-[500px] flex justify-center items-center overflow-hidden">
								<div
									id="main_design"
									className="w-auto relative h-auto overflow-hidden"
								>
									{components.map((c, i) => (
										<CreateComponent
											key={i}
											info={c}
											current_component={current_component}
											removeComponent={removeComponent}
										/>
									))}
								</div>
							</div>
						</div>
						{current_component && (
							<div className="h-full w-[250px] text-gray-300 bg-[#252627] px-3 py-2">
								<div className="flex gap-6 flex-col items-start h-full px-3 justify-start">
									<div className="flex gap-4 justify-start items-start mt-4">
										<span>Color :</span>
										<label
											className="w-[30px] h-[30px] cursor-pointer rounded-sm"
											style={{
												background: `${
													current_component.color &&
													current_component.color !== "#fff"
														? current_component.color
														: "gray"
												}`,
											}}
											htmlFor="color"
										></label>
										<input
											onChange={(e) => {
												setState((draft) => {
													draft.color = e.target.value;
												});
											}}
											type="color"
											className="invisible"
											id="color"
										/>
									</div>
									{current_component.name === InfoName.MAIN_FRAME &&
										current_component.image && (
											<div
												className="p-[6px] bg-slate-600 text-white cursor-pointer"
												onClick={remove_background}
											>
												Remove Background
											</div>
										)}
									{current_component.name !== InfoName.MAIN_FRAME && (
										<div className="flex gap-6 flex-col">
											<div className="flex gap-1 justify-start items-start">
												<span className="text-md w-[70px]">Opacity</span>
												<input
													className="w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md"
													ref={opacityInputRef}
													onChange={opacityHandle}
													type="number"
													step={0.1}
													min={0.1}
													max={1}
													value={opacity}
												/>
											</div>
											<div className="flex gap-1 justify-start items-start">
												<span className="text-md w-[70px]">Z-Index</span>
												<input
													ref={zIndexInputRef}
													onChange={(e) => {
														setState((draft) => {
															draft.zIndex = parseInt(e.target.value);
														});
													}}
													className="w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md"
													type="number"
													step={1}
													value={zIndex}
												/>
											</div>
										</div>
									)}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
type SideNavProps = {
	setElements: (type: ShapeType | TaskType | null, name: InfoName) => void;
	show: ShowType;
};
const SideNav = ({ setElements, show }: SideNavProps) => {
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

type DrawerBoxProps = {
	show: { name: string; status: boolean };
	setShow: (show: { name: string; status: boolean }) => void;
	state?: ShapeType | TaskType | null;
	setImage: (image: string) => void;
	createShape: (name: InfoName, type: ShapeType) => void;
	addText: (name: InfoName, type: TaskType) => void;
};
const Drawer_Box = ({
	state,
	show,
	setShow,
	setImage,
	createShape,
	addText,
}: DrawerBoxProps) => {
	return (
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
			{state === TaskType.DESIGN && (
				<div className="grid grid-cols-2 gap-2">
					<TemplateDesign type="main" />
				</div>
			)}
			{state === TaskType.SHAPE && (
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
			{state === TaskType.IMAGE && <MyImages />}
			{state === TaskType.TEXT && (
				<div className="grid grid-cols-1 gap-2">
					<div
						onClick={() => addText(InfoName.TEXT, TaskType.TITLE)}
						className="bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white text-xl rounded-sm"
					>
						<h2>Add A Text </h2>
					</div>
				</div>
			)}
			{state === TaskType.PROJECT && <Projects />}
			{state === TaskType.INIT_IMAGE && (
				<div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
					<Image />
				</div>
			)}
			{state === TaskType.BACKGROUND && (
				<div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
					<div className="grid grid-cols-2 gap-2">
						{[1, 2, 3, 4, 5, 6].map((img, i) => (
							<div
								onClick={() => setImage("http://localhost:5173/canva.png")}
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
