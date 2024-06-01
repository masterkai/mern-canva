import { InfoName, InfoType } from "../../types";
import { useMainContext } from "../../context/MainProvide.tsx";
import CreateComponent from "../CreateComponent";
import { useEffect, useState } from "react";

const PropertiesControlPanel = () => {

	const {
		state: {
			current_component,
			components,
			opacity,
			zIndex,
			radius,
			padding,
			fontSize,
			fontWeight,
		},
		setState,
		remove_background,
		removeComponent,
		opacityHandle,
		opacityInputRef,
		zIndexInputRef,
		radiusInputRef,
		paddingInputRef,
		fontSizeInputRef,
		fontWeightInputRef,
	} = useMainContext();
	const [currentText, setCurrentText] = useState("");

	useEffect(() => {
		if (current_component?.title) {
			setCurrentText(current_component.title);
		}
	}
	, [current_component]);
	return (
		<div className="w-full flex justify-center h-full">
			<div
				className={`flex justify-center relative items-center h-full ${
					!current_component ? "w-full" : "w-[calc(100%-250px)] overflow-hidden"
				}`}
			>
				<div className="m-w-[650px] m-h-[500px] flex justify-center items-center overflow-hidden">
					<div
						id="main_design"
						className="w-auto relative h-auto overflow-hidden"
					>
						{components.map((c: InfoType, i: number) => (
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
			{current_component ? (
				<div className="h-full w-[250px] text-gray-300 bg-[#252627] px-3 py-2">
					<div className="flex gap-6 flex-col items-start h-full px-3 justify-start">
						<div className="flex gap-4 justify-start items-start mt-4">
							<span>Color :</span>
							<label
								className="w-[30px] h-[30px] cursor-pointer rounded-sm"
								style={{
									background: `${
										current_component?.color &&
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
										draft.current_component = current_component;
										draft.color = e.target.value;
									});
								}}
								type="color"
								className="invisible"
								id="color"
							/>
						</div>
						{current_component?.name === InfoName.MAIN_FRAME &&
							current_component.image && (
								<div
									className="p-[6px] bg-slate-600 text-white cursor-pointer"
									onClick={remove_background}
								>
									Remove Background
								</div>
							)}
						{current_component?.name !== InfoName.MAIN_FRAME && (
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
											e.preventDefault();
											setState((draft) => {
												draft.current_component = current_component;
												draft.zIndex = parseInt(zIndexInputRef.current!.value);
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
						{current_component?.name === InfoName.IMAGE && (
							<div className="flex gap-1 justify-start items-start">
								<span className="text-md w-[70px]">Radius</span>
								<input
									ref={radiusInputRef}
									onChange={(e) => {
										e.preventDefault();
										setState((draft) => {
											draft.current_component = current_component;
											draft.radius = parseInt(radiusInputRef.current!.value);
										});
									}}
									className="w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md"
									type="number"
									step={1}
									value={radius}
								/>
							</div>
						)}
						{current_component?.name === InfoName.TEXT && (
							<>
								<div className="flex gap-1 justify-start items-start">
									<span className="text-md w-[70px]">Padding : </span>
									<input
										ref={paddingInputRef}
										onChange={(e) => {
											setState((draft) => {
												draft.current_component = current_component;
												draft.padding = parseInt(e.target.value);
											});
										}}
										className="w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md"
										type="number"
										step={1}
										value={padding}
									/>
								</div>

								<div className="flex gap-1 justify-start items-start">
									<span className="text-md w-[70px]">Font Size</span>
									<input
										ref={fontSizeInputRef}
										onChange={(e) => {
											setState((draft) => {
												draft.current_component = current_component;
												draft.fontSize = parseInt(e.target.value);
											});
										}}
										className="w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md"
										type="number"
										step={1}
										value={fontSize}
									/>
								</div>

								<div className="flex gap-1 justify-start items-start">
									<span className="text-md w-[70px]">Weight : </span>
									<input
										ref={fontWeightInputRef}
										onChange={(e) => {
											setState((draft) => {
												draft.current_component = current_component;
												draft.fontWeight = parseInt(e.target.value);
											});
										}}
										className="w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md"
										type="number"
										step={100}
										min={100}
										max={900}
										value={fontWeight}
									/>
								</div>

								<div className="flex gap-2 flex-col justify-start items-start">
									<input
										onChange={(e) => {
											setState((draft) => {
												draft.current_component = current_component;
												setCurrentText(e.target.value);
											});
										}}
										className="border border-gray-700 bg-transparent outline-none p-2 rounded-md"
										type="text"
										value={currentText}
									/>
									<button
										onClick={() => {
											setState((draft) => {
												draft.current_component = current_component;
												draft.text = currentText || "";
											});
										}}
										className="px-4 py-2 bg-purple-500 text-xs text-white rounded-sm"
									>
										Add Text
									</button>
								</div>
							</>
						)}
					</div>
				</div>
			) : null}
		</div>
	);
};

export default PropertiesControlPanel;
