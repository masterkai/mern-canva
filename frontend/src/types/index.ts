export type InfoType = {
	id: number;
	name: InfoName;
	type: ShapeType;
	left: number;
	top: number;
	opacity: number;
	width: number;
	height: number;
	rotate: number;
	z_index: number;
	color: string;
	image?: string;
	moveElement: (id: string, info: InfoType) => void;
	resizeElement: (exID: string, info: InfoType) => void;
	rotateElement: (exID: string, info: InfoType) => void;
	setCurrentComponent: (a: InfoType) => void;
};

export enum ShapeType {
	RECTANGLE = "rectangle",
	CIRCLE = "circle",
	TRIANGLE = "triangle",
}

export enum TaskType {
	DESIGN = "design",
	SHAPE = "shape",
	TEXT = "text",
	IMAGE = "image",
	PROJECT = "project",
	INIT_IMAGE = "initImage",
	BACKGROUND = "background",
}

export enum InfoName {
	MAIN_FRAME = "main_frame",
	SHAPE = "shape",
	TEXT = "text",
	DESIGN = "design",
	UPLOAD_IMAGE = "upload_image",
	PROJECTS = "projects",
	IMAGES = "images",
	BACKGROUND = "background",
}

export type ShowType = { name: InfoName | string; status: boolean };
