import { Updater } from "use-immer";
import React, { ChangeEvent } from "react";

export type InfoType = {
	id: number;
	name: InfoName;
	type: ShapeType | TaskType;
	left?: number;
	top?: number;
	opacity?: number;
	width?: number;
	height?: number;
	rotate?: number;
	z_index: number;
	color?: string;
	image?: string;
	title?: string;
	padding?: number;
	fontSize?: number;
	fontWeight?: number;
	radius?: number;
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
	TITLE = "title",
}

export enum InfoName {
	MAIN_FRAME = "main_frame",
	SHAPE = "shape",
	TEXT = "text",
	DESIGN = "design",
	UPLOAD_IMAGE = "upload_image",
	PROJECTS = "projects",
	IMAGES = "images",
	IMAGE = "image",
	BACKGROUND = "background",
}

export type ShowType = { name: InfoName | string; status: boolean };

export interface MainState {
	current_component: InfoType | null;
	components: InfoType[];
	image: string;
	typeState: ShapeType | TaskType | null;
	color: string;
	rotate: number;
	left: number;
	top: number;
	width: number;
	height: number;
	padding: number;
	fontSize: number;
	fontWeight: number;
	zIndex: number;
	text: string;
	opacity: number;
	radius?: number;
	show: ShowType;
}

export interface IMainContext {
	state: MainState;
	setState: Updater<MainState>;
	setElements: (type: ShapeType | TaskType | null, name: InfoName) => void;
	add_image: (img: string) => void;
	add_text: (name: InfoName, type: TaskType) => void;
	moveElement: (id: string, currentInfo: InfoType) => void;
	resizeElement: (id: string, currentInfo: InfoType) => void;
	rotateElement: (id: string, currentInfo: InfoType) => void;
	removeComponent: (id: number) => void;
	createShape: (name: InfoName, type: ShapeType) => void;
	opacityHandle: (e: ChangeEvent<HTMLInputElement>) => void;
	remove_background: () => void;
	opacityInputRef: React.RefObject<HTMLInputElement>;
	zIndexInputRef: React.RefObject<HTMLInputElement>;
	paddingInputRef: React.RefObject<HTMLInputElement>;
	fontSizeInputRef: React.RefObject<HTMLInputElement>;
	fontWeightInputRef: React.RefObject<HTMLInputElement>;
	radiusInputRef: React.RefObject<HTMLInputElement>;
	design_id: string | undefined;
}

export type UserDataType = {
	name: string;
	email: string;
	password: string;
};

export type AuthDataType = {
	registerType: "signin" | "signup" | string;
	userDATA: UserDataType;
	isShow: boolean;
	loading: boolean;
};

export type UserImageType = {
	user_id: string;
	image_url: string;
};

export type DesignType = {
	_id: string;
	components: InfoType[];
	image_url: string;
};
