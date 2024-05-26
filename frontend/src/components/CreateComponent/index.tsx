import { InfoType } from "../../types";

interface ICreateComponent {
	info: InfoType;
	current_component:
		| InfoType
		| null
		| string;
	removeComponent?: () => void;
}
const CreateComponent = ({
	info,
	current_component,
	removeComponent,
}: ICreateComponent) => {
	console.log("current_component", current_component);
	console.log("info", info);
	let html: JSX.Element = <></>;

	if (info.name === "main_frame") {
		html = (
			<div
				onClick={() => info.setCurrentComponent(info) }
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
