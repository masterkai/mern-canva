import { InfoName, InfoType, ShapeType } from "../../types";
import { FaTrashAlt } from "react-icons/fa";

interface ICreateComponent {
	info: InfoType;
	current_component: InfoType | null;
	removeComponent?: (id: number) => void;
}
const CreateComponent = ({
	info,
	current_component,
	removeComponent,
}: ICreateComponent) => {
	const randValue = Math.floor(Math.random() * 100)
	console.log("current_component", current_component);
	console.log("info", info);
	let html: JSX.Element = <></>;

	if (info.name === InfoName.MAIN_FRAME) {
		html = (
			<div
				onClick={() => info.setCurrentComponent(info)}
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

	if (info.name === InfoName.SHAPE && info.type === ShapeType.RECTANGLE) {
		if (removeComponent) {
			html = <div id={ randValue.toString() } onClick={ () => info.setCurrentComponent( info ) } style={ {
				width: info.width + 'px',
				height: info.height + 'px',
				background: info.color,
				opacity: info.opacity,
				left: info.left + 'px',
				top: info.top + 'px',
				zIndex: info.z_index,
				transform: info.rotate ? `rotate(${ info.rotate }deg)` : 'rotate(0deg)'
			} }
						className='absolute group hover:border-[2px] hover:border-indigo-500'
			>
				{
					current_component?.id === info.id && <div
						onClick={ () => removeComponent( info.id ) }
						className='px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md'>
						<FaTrashAlt/>
					</div>
				}
			</div>
		}
	}
	return html;
};

export default CreateComponent;
CreateComponent.displayName = "CreateComponent";
