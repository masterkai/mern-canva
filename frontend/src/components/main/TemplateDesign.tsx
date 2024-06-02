import { useEffect, useState } from "react";
import api from "../../utils/api";
import { DesignType } from "../../types";
import { useNavigate } from "react-router-dom";
type TemplateDesignProps = {
	type: string;
};
const TemplateDesign = ({ type }: TemplateDesignProps) => {
	const navigate = useNavigate();
	const [templates, setTemplates] = useState<DesignType[]>([]);
	const add_template = async (id:string) => {
		try {
			const { data } = await api.get(`/api/add-user-template/${id}`);
			navigate(`/design/${data.design?._id}/edit`);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const get_tamplates = async () => {
			try {
				const { data } = await api.get("/api/templates");
				setTemplates(data.templates);
			} catch (error) {
				console.log(error);
			}
		};
		get_tamplates();
	}, []);
	return (
		<>
			{templates.map((design, i) => (
				<div
					onClick={() => add_template(design._id)}
					key={i}
					className={`relative cursor-pointer group w-full ${
						type ? "h-[100px]" : "h-[170px] px-4"
					} `}
				>
					<div
						className={`w-full h-full block bg-slate-400 rounded-md ${
							type ? "" : "p-4"
						} `}
					>
						<img
							className="w-full h-full rounded-md overflow-hidden"
							src={design.image_url}
							alt=""
						/>
					</div>
				</div>
			))}
		</>
	);
};

export default TemplateDesign;
