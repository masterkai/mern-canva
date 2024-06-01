import { useEffect, useState } from "react";
import { DesignType } from "../../types";
import api from "../../utils/api.ts";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import Item from "../Item";
import { useMainContext } from "../../context/MainProvide.tsx";

interface ProjectsProps {
	type?: string;
}
const Projects = ({ type }: ProjectsProps) => {
	const { design_id } = useMainContext();
	const [designs, setDesigns] = useState<DesignType[]>([]);
	const get_user_design = async () => {
		try {
			const { data } = await api.get("/api/user-designs");
			setDesigns(data.designs);
		} catch (error) {
			console.log(error);
		}
	};

	const delete_design = async (design_id: string) => {
		try {
			const { data } = await api.put(`/api/delete-user-design/${design_id}`);
			toast.success(data.message);
			get_user_design();
		} catch (error) {
			const err = error as AxiosError<{ message: string }>;
			toast.error(err.response!.data.message);
		}
	};

	useEffect(() => {
		get_user_design();
	}, []);
	return (
		<div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide w-full">
			<div
				className={
					type
						? "grid grid-cols-2 gap-2 mt-5 w-full"
						: "grid grid-cols-4 gap-4 mt-5 w-full"
				}
			>
				{designs.map(
					(d, i) =>
						d._id !== design_id && (
							<Item
								key={i}
								design={d}
								type={type}
								delete_design={delete_design}
							/>
						),
				)}
			</div>
		</div>
	);
};

export default Projects;
