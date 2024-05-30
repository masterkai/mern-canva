import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreateComponent from "../CreateComponent";
import { idGenerator } from "../../utils";
import * as htmlToImage from "html-to-image";
import RotateLoader from "react-spinners/RotateLoader";
import { InfoName, ShapeType } from "../../types";
import api from "../../utils/api.ts";
import { AxiosError } from "axios";

const CreateDesign = () => {
	const ref = useRef(null);
	const { state } = useLocation();
	const navigate = useNavigate();
	const infoData = {
		name: InfoName.MAIN_FRAME,
		type: ShapeType.RECTANGLE,
		id: idGenerator(),
		height: state.height,
		width: state.width,
		z_index: 1,
		color: "#fff",
		image: "",
	};
	const [loader, setLoader] = useState(false);

	const create_design = async () => {
		let image;
		if (ref.current) {
			image = await htmlToImage.toBlob(ref.current);
		}
		const design = JSON.stringify(infoData);

		if (image) {
			const formData = new FormData();
			formData.append("design", design);
			formData.append("image", image);
			try {
				setLoader(true);
				const { data } = await api.post("/api/create-user-design", formData);
				navigate(`/design/${data.design._id}/edit`);
				setLoader(false);
			} catch (error) {
				setLoader(false);
				const err = error as AxiosError;
				console.log(err.response?.data);
			}
		}
	};

	useEffect(() => {
		if (state && ref.current) {
			create_design();
		} else {
			navigate("/");
		}
	}, [state, ref]);

	return (
		<div className="w-screen h-screen flex justify-center items-center relative">
			<div ref={ref} className="relative w-auto h-auto overflow-auto">
				<CreateComponent info={infoData} current_component={null} />
			</div>
			{loader && (
				<div className="left-0 top-0 w-full h-full flex justify-center items-center bg-black absolute">
					<RotateLoader color="white" />
				</div>
			)}
		</div>
	);
};

export default CreateDesign;
CreateDesign.displayName = "CreateDesign";
