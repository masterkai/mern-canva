// create context for Main component
import React, {
	ChangeEvent,
	createContext,
	useContext,
	useEffect,
	useRef,
} from "react";
import {
	IMainContext,
	InfoName,
	InfoType,
	MainState,
	ShapeType,
	TaskType,
} from "../types";
import { useImmer } from "use-immer";
import { idGenerator } from "../utils";
import { useParams } from "react-router-dom";
import api from "../utils/api.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const MainContext = createContext<IMainContext>(null);

const MainProvider = ({ children }: { children: React.ReactNode }) => {
	const { design_id } = useParams();

	const opacityInputRef = useRef<HTMLInputElement>(null);
	const zIndexInputRef = useRef<HTMLInputElement>(null);
	const paddingInputRef = useRef<HTMLInputElement>(null);
	const fontSizeInputRef = useRef<HTMLInputElement>(null);
	const fontWeightInputRef = useRef<HTMLInputElement>(null);
	const radiusInputRef = useRef<HTMLInputElement>(null);
	const initialState: MainState = {
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
		radius: 0,
		opacity: 0,
		zIndex: 0,
		show: { status: true, name: "" },
	};
	const [state, setState] = useImmer<MainState>(initialState);
	const {
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
		padding,
		fontSize,
		fontWeight,
		text,
		radius,
	} = state;

	const setElements = (type: ShapeType | TaskType | null, name: InfoName) => {
		setState((draft) => {
			draft.typeState = type;
			draft.show.name = name;
			draft.show.status = false;
		});
	};
	const add_image = (img: string) => {
		setState((draft) => {
			draft.current_component = null;
		});
		const style: InfoType = {
			id: idGenerator(),
			name: InfoName.IMAGE,
			type: TaskType.IMAGE,
			left: 10,
			top: 10,
			opacity: 1,
			width: 200,
			height: 150,
			rotate,
			z_index: 2,
			radius: 0,
			image: img,
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

	const add_text = (name: InfoName, type: TaskType) => {
		setState((draft) => {
			draft.current_component = null;
		});
		const style: InfoType = {
			id: idGenerator(),
			name: name,
			type,
			left: 10,
			top: 10,
			opacity: 1,
			rotate,
			z_index: 10,
			padding: 6,
			fontSize: 22,
			title: "Add Your Text",
			fontWeight: 400,
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
			draft.padding = 0;
			draft.fontSize = 0;
			draft.fontWeight = 0;
			draft.text = "";
			draft.radius = 0;
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

	const opacityHandle = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setState((draft) => {
			draft.opacity = parseFloat(opacityInputRef.current!.value);
		});
	};

	useEffect(() => {
		if (current_component) {
			const index = components.findIndex((c) => c.id === current_component.id);
			// const temp = components.filter((c) => c.id !== current_component.id);

			if (current_component.name !== InfoName.TEXT) {
				setState((draft) => {
					draft.components[index].width = width || current_component.width;
					draft.components[index].height = height || current_component.height;
					draft.components[index].rotate = rotate || current_component.rotate;
				});
			}
			if (current_component.name === InfoName.TEXT) {
				setState((draft) => {
					draft.components[index].fontSize =
						fontSize || current_component.fontSize;
					draft.components[index].padding =
						padding || current_component.padding;
					draft.components[index].fontWeight =
						fontWeight || current_component.fontWeight;
					draft.components[index].title = text || current_component.title;
				});
			}
			if (current_component.name === InfoName.IMAGE) {
				setState((draft) => {
					draft.components[index].radius = radius || current_component.radius;
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
	}, [
		zIndex,
		color,
		image,
		left,
		top,
		width,
		height,
		opacity,
		fontWeight,
		padding,
		fontSize,
		text,
		radius,
	]);

	useEffect(() => {
		const get_design = async () => {
			try {
				const { data } = await api.get(`/api/user-design/${design_id}`);
				console.log(data);
				const { design } = data;
				for (let i = 0; i < design.length; i++) {
					design[i].setCurrentComponent = (a: InfoType) => {
						setState((draft) => {
							draft.current_component = a;
						});
					};
					design[i].moveElement = moveElement;
					design[i].resizeElement = resizeElement;
					design[i].rotateElement = rotateElement;
					design[i].remove_background = remove_background;
				}
				setState((draft) => {
					draft.components = design;
				});
			} catch (error) {
				console.log(error);
			}
		};
		get_design();
	}, [design_id]);

	const value = {
		state,
		setState,
		setElements,
		add_image,
		add_text,
		moveElement,
		resizeElement,
		rotateElement,
		removeComponent,
		createShape,
		opacityHandle,
		remove_background,
		opacityInputRef,
		zIndexInputRef,
		paddingInputRef,
		fontSizeInputRef,
		fontWeightInputRef,
		radiusInputRef,
		design_id,
	};

	return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
export default MainProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useMainContext = () => {
	return useContext(MainContext);
};
