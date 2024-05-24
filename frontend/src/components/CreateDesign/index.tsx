import { useRef } from "react";
import { useLocation } from "react-router-dom";
import CreateComponent from "../CreateComponent";
import { idGenerator } from "../../utils";

const CreateDesign = () => {
	const ref = useRef(null);
	const { state } = useLocation();
	const infoData = {
		name: "main_frame",
		type: "rect",
		id: idGenerator(),
		height: state.height,
		width: state.width,
		z_index: 1,
		color: "green",
		image: "",
	};

	return (
		<div className="w-screen h-screen flex justify-center items-center relative">
			<div ref={ref} className="relative w-auto h-auto overflow-auto">
				<CreateComponent info={infoData} current_component={null} />
			</div>
		</div>
	);
};

export default CreateDesign;
CreateDesign.displayName = "CreateDesign";
