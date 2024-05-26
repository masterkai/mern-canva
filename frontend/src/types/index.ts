export type InfoType = {
	id: number;
	type: string;
	name: string;
	width: number;
	height: number;
	color: string;
	z_index: number;
	image: string;
	setCurrentComponent: (a: InfoType) => void;
};
