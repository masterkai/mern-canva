import { InfoName, InfoType, ShapeType } from "../../types";
import { FaTrashAlt } from "react-icons/fa";
import { useKeyGen } from "../../hooks/useKeyGen.ts";
import Element from "../Element";
import { useMainContext } from "../../context/MainProvide.tsx";
interface ICreateComponent {
	info: InfoType;
	current_component: InfoType | null;
	removeComponent?: (id: number) => void;
}
const CreateComponent = ({ info, current_component }: ICreateComponent) => {
	const { setState, removeComponent } = useMainContext();
	const randValue = useKeyGen().getKey(info);
	// console.log("current_component", current_component);
	// console.log("info", info);
	let html: JSX.Element = <></>;

	if (info.name === InfoName.MAIN_FRAME) {
		html = (
			<div
				onClick={() => {
					console.log("info.id", info.id);
					setState((draft) => {
						draft.current_component = info;
					});
				}}
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
			html = (
				<div
					id={randValue.toString()}
					onClick={() => {
						console.log("info.id", info.id);
						setState((draft) => {
							draft.current_component = info;
						});
					}}
					style={{
						width: info.width + "px",
						height: info.height + "px",
						background: info.color,
						opacity: info.opacity,
						left: info.left + "px",
						top: info.top + "px",
						zIndex: info.z_index,
						transform: info.rotate
							? `rotate(${info.rotate}deg)`
							: "rotate(0deg)",
					}}
					className="absolute group hover:border-[2px] hover:border-indigo-500"
				>
					<Element id={randValue} info={info} exId="" />
					{current_component?.id === info.id && (
						<div
							onClick={() => removeComponent(info.id)}
							className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
						>
							<FaTrashAlt />
						</div>
					)}
				</div>
			);
		}
	}

	if (info.name === InfoName.SHAPE && info.type === ShapeType.CIRCLE) {
		if (removeComponent) {
			html = (
				<div
					id={randValue}
					onClick={() => {
						console.log("info.id", info.id);
						setState((draft) => {
							draft.current_component = info;
						});
					}}
					style={{
						left: info.left + "px",
						top: info.top + "px",
						zIndex: info.z_index,
						transform: info.rotate
							? `rotate(${info.rotate}deg)`
							: "rotate(0deg)",
					}}
					className="absolute group hover:border-[2px] hover:border-indigo-500"
				>
					<div
						id={`${randValue}c`}
						className="rounded-full"
						style={{
							width: info.width + "px",
							height: info.width + "px",
							background: info.color,
							opacity: info.opacity,
						}}
					></div>
					<Element id={randValue} info={info} exId={`${randValue}c`} />
					{current_component?.id === info.id && (
						<div
							onClick={() => removeComponent(info.id)}
							className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
						>
							<FaTrashAlt />
						</div>
					)}
				</div>
			);
		}
	}

	if (info.name === InfoName.SHAPE && info.type === ShapeType.TRIANGLE) {
		if (removeComponent) {
			html = (
				<div
					id={randValue}
					onClick={() => {
						console.log("info.id", info.id);
						setState((draft) => {
							draft.current_component = info;
						});
					}}
					style={{
						left: info.left + "px",
						top: info.top + "px",
						zIndex: info.z_index,
						transform: info.rotate
							? `rotate(${info.rotate}deg)`
							: "rotate(0deg)",
					}}
					className="absolute group hover:border-[2px] hover:border-indigo-500"
				>
					<div
						id={`${randValue}t`}
						style={{
							width: info.width + "px",
							height: info.height + "px",
							background: info.color,
							opacity: info.opacity,
							clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
						}}
					></div>
					<Element id={randValue} info={info} exId={`${randValue}t`} />
					{current_component?.id === info.id && (
						<div
							onClick={() => removeComponent(info.id)}
							className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
						>
							<FaTrashAlt />
						</div>
					)}
				</div>
			);
		}
	}
	if (info.name === InfoName.TEXT) {
		if (removeComponent) {
			html = (
				<div
					id={randValue}
					onClick={() => {
						console.log("info.id", info.id);
						setState((draft) => {
							draft.current_component = info;
						});
					}}
					style={{
						left: info.left + "px",
						top: info.top + "px",
						zIndex: info.z_index,
						transform: info.rotate
							? `rotate(${info.rotate}deg)`
							: "rotate(0deg)",
						padding: info.padding + "px",
						color: info.color,
						opacity: info.opacity,
					}}
					className="absolute group hover:border-[2px] hover:border-indigo-500"
				>
					<Element id={randValue} info={info} exId="" />
					<h2
						style={{
							fontSize: info.fontSize + "px",
							fontWeight: info.fontWeight,
						}}
						className="w-full h-full"
					>
						{" "}
						{info.title}{" "}
					</h2>
					{current_component?.id === info.id && (
						<div
							onClick={() => removeComponent(info.id)}
							className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
						>
							<FaTrashAlt />
						</div>
					)}
				</div>
			);
		}
	}
	if (info.name === InfoName.IMAGE) {
		if (removeComponent) {
			html = (
				<div
					id={randValue}
					onClick={() => {
						setState((draft) => {
							draft.current_component = info;
						});
					}}
					style={{
						left: info.left + "px",
						top: info.top + "px",
						zIndex: info.z_index,
						opacity: info.opacity,
						transform: info.rotate
							? `rotate(${info.rotate}deg)`
							: "rotate(0deg)",
					}}
					className="absolute group hover:border-[2px] hover:border-indigo-500"
				>
					<Element id={randValue} info={info} exId={`${randValue}img`} />
					<div
						className="overflow-hidden"
						id={`${randValue}img`}
						style={{
							width: info.width + "px",
							height: info.height + "px",
							borderRadius: `${info.radius}px`,
						}}
					>
						<img className="w-full h-full" src={info.image} alt="image" />
					</div>

					{current_component?.id === info.id && (
						<div
							onClick={() => removeComponent(info.id)}
							className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
						>
							<FaTrashAlt />
						</div>
					)}
				</div>
			);
		}
	}
	return html;
};

export default CreateComponent;
CreateComponent.displayName = "CreateComponent";
