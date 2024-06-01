import { InfoType } from "../../types";
import { useMainContext } from "../../context/MainProvide.tsx";

type ElementProps = {
	id: string;
	info: InfoType;
	exId?: string;
};

const Element = ({ id, info, exId }: ElementProps) => {
	const { resizeElement, rotateElement, moveElement } = useMainContext();
	return (
		<>
			{exId ? (
				<>
					<div
						onMouseDown={(e) => {
							resizeElement(exId, info);
							e.preventDefault();
						}}
						className="hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-600 z-[99999] "
					>
						{" "}
					</div>
					<div
						onMouseDown={(e) => {
							resizeElement(exId, info);
							e.preventDefault();
						}}
						className="hidden absolute group-hover:block -top-[3px] -right-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-green-600 z-[99999] "
					>
						{" "}
					</div>
					<div
						onMouseDown={(e) => {
							resizeElement(exId, info);
							e.preventDefault();
						}}
						className="hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-green-600 z-[99999] "
					>
						{" "}
					</div>
				</>
			) : (
				<>
					<div
						onMouseDown={(e) => {
							resizeElement(id, info);
							e.preventDefault();
						}}
						className="hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-600 z-[99999] "
					>
						{" "}
					</div>
					<div
						onMouseDown={(e) => {
							resizeElement(id, info);
							e.preventDefault();
						}}
						className="hidden absolute group-hover:block -top-[3px] -right-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-green-600 z-[99999] "
					>
						{" "}
					</div>
					<div
						onMouseDown={(e) => {
							resizeElement(id, info);
							e.preventDefault();
						}}
						className="hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-green-600 z-[99999] "
					>
						{" "}
					</div>
				</>
			)}
			{/*rotate*/}
			<div
				onMouseDown={(e) => {
					rotateElement(id, info);
					e.preventDefault();
				}}
				className="hidden absolute group-hover:block -top-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-red-600 z-[99999] "
			>
				{" "}
			</div>
			{/*Move*/}
			<div
				onMouseDown={(e) => {
					moveElement(id, info);
					e.preventDefault();
				}}
				className="hidden absolute group-hover:block -top-[3px] left-[50%] translate-[-50%,0%] w-[10px] h-[10px] cursor-row-resize bg-blue-600 z-[99999] "
			></div>
			<div
				onMouseDown={(e) => {
					moveElement(id, info);
					e.preventDefault();
				}}
				className="hidden absolute group-hover:block top-[50%] -left-[3px] translate-[-0%,50%] w-[10px] h-[10px] cursor-col-resize bg-blue-600 z-[99999] "
			></div>
			<div
				onMouseDown={(e) => {
					moveElement(id, info);
					e.preventDefault();
				}}
				className="hidden absolute group-hover:block top-[50%] -right-[3px] translate-[-0%,50%] w-[10px] h-[10px] cursor-col-resize bg-blue-600 z-[99999] "
			></div>
			<div
				onMouseDown={(e) => {
					moveElement(id, info);
					e.preventDefault();
				}}
				className="hidden absolute group-hover:block -bottom-[3px] left-[50%] translate-[-50%,0%] w-[10px] h-[10px] cursor-row-resize bg-blue-600 z-[99999] "
			></div>
		</>
	);
};

export default Element;
