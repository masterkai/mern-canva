import { useEffect, useState } from "react";
import api from "../../utils/api";
import { DesignType } from "../../types";
import { useNavigate } from "react-router-dom";
type TemplateDesignProps = {
	type: string;
};
const TemplateDesign = ({ type }: TemplateDesignProps) => {
	console.log(type);
	const navigate = useNavigate();
	const [templates, setTemplates] = useState<DesignType[]>([]);
	const add_template = async (id: string) => {
		try {
			const { data } = await api.get(`/api/add-user-template/${id}`);
			navigate(`/design/${data.design?._id}/edit`);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const get_templates = async () => {
			try {
				const { data } = await api.get("/api/templates");
				setTemplates(data.templates);
			} catch (error) {
				console.log(error);
			}
		};
		get_templates();
	}, []);
	return (
		<>
			<div
				className={`grid gap-2 ${type ? "grid-cols-2" : "grid-cols-4 mt-5"}`}
			>
				{templates.map((design, i) => (
					<div
						key={i}
						onClick={() => add_template(design._id)}
						className={`relative cursor-pointer group w-full ${
							type ? "h-[150px]" : "h-[170px] px-4"
						} `}
					>
						<div
							className={`w-full h-full block bg-slate-400 rounded-md ${
								type ? "p-2 mx-2" : "p-4"
							} `}
						>
							<img
								className="w-full h-full rounded-md overflow-hidden object-cover"
								src={design.image_url}
								alt=""
							/>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default TemplateDesign;
