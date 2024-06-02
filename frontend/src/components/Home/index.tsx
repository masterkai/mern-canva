import { ChangeEvent, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api.ts";
import { DesignType } from "../../types";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import Item from "../Item";

const Home = () => {
	const navigate = useNavigate();
	const [designs, setDesigns] = useState<DesignType[]>([]);
	const [show, setShow] = useState(false);
	const [state, setState] = useState({
		width: 0,
		height: 0,
	});

	const create = () => {
		const { width, height } = state;
		navigate("/design/create", {
			state: {
				type: "create",
				width,
				height,
			},
		});
	};

	const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

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
		<div className="pt-1 pl-3">
			<div className="w-full flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] relative rounded-md overflow-hidden">
				<button
					onClick={() => setShow(!show)}
					className="px-4 py-2 text-[15px] overflow-hidden text-center bg-[#32769ead] text-white rounded-[3px] font-medium hover:bg-[#1e830f] absolute top-3 right-3"
				>
					Custom Size
				</button>

				{show && <SizeSetting create={create} inputHandler={inputHandle} />}

				<div>
					<h2 className="text-3xl pb-10 pt-6 font-semibold text-white">
						What Will You Design Today
					</h2>
				</div>
			</div>

			<div>
				<h2 className="text-xl py-6 font-semibold text-white">
					Your Recent Designs{" "}
				</h2>

				<div>
					<Carousel
						autoPlay={true}
						infinite={true}
						responsive={responsive}
						transitionDuration={500}
					>
						{designs.map((d, i) => (
							<Item key={i} design={d} delete_design={delete_design} type="" />
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Home;

type SizeSettingProps = {
	inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	create: () => void;
};
const SizeSetting = ({ inputHandler, create }: SizeSettingProps) => {
	return (
		<form
			onSubmit={create}
			className="absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4 text-white"
		>
			<div className="grid grid-cols-2 pb-4 gap-3">
				<div className="flex gap-2 justify-center items-start flex-col">
					<label htmlFor="width">Width</label>
					<input
						onChange={inputHandler}
						type="number"
						name="width"
						id="width"
						className="w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md"
					/>
				</div>

				<div className="flex gap-2 justify-center items-start flex-col">
					<label htmlFor="height">Height</label>
					<input
						onChange={inputHandler}
						type="number"
						name="height"
						id="height"
						className="w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md"
					/>
				</div>
			</div>

			<button className="px-4 py-2 text-[15px] overflow-hidden text-center bg-[#32769ead] text-white rounded-[3px] font-medium hover:bg-[#1e830f] w-full">
				Create New Design
			</button>
		</form>
	);
};
