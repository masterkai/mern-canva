interface ICreateComponent {
	info: {
		name: string;
		width: number;
		height: number;
		color: string;
		z_index: number;
		image: string;
	};
	current_component: {
		name: string;
		width: number;
		height: number;
		color: string;
		z_index: number;
		image: string;
	} | null | string;
	removeComponent?: () => void;
}
const CreateComponent = ({ info, current_component, removeComponent }: ICreateComponent) => {
	let html: JSX.Element = <></>;

	if (info.name === "main_frame") {
		html = (
			<div
				className="hover:border-[2px] hover:border-indigo-500 shadow-md"
				style={{
					width: info.width + "px",
					height: info.height + "px",
					background: info.color,
					zIndex: info.z_index,
				}}
			>
				{info.image && (
					<img className="w-full h-full" src={info.image} alt="image" />
				)}
			</div>
		);
	}

	return html;
};

export default CreateComponent;
CreateComponent.displayName = "CreateComponent";
