import { RxCross2 } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { ChangeEvent } from "react";

type LogInModalProps = {
	show: boolean;
	setShow: (show: boolean) => void;
	type: "signin" | "signup" | string;
	inputHandle: (e: ChangeEvent<HTMLInputElement>) => void;
	state: {
		name: string;
		email: string;
		password: string;
	};
};

const LogInModal = ({
	show,
	setShow,
	inputHandle,
	state,
	type,
}: LogInModalProps) => {
	const displayStr = type === "signin" ? "Login" : "Sign up";
	return (
		<div
			className={`w-screen ${
				show ? "visible opacity-100" : "invisible opacity-30"
			} transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center `}
		>
			<div className="w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative">
				<div
					onClick={() => setShow(false)}
					className="absolute right-4 top-4 text-xl cursor-pointer text-white"
				>
					<RxCross2 />
				</div>
				<h2 className="text-white pb-4 text-center text-xl">
					{displayStr} in seconds
				</h2>
				<form>
					{type === "signup" && (
						<div className="flex flex-col gap-3 mb-3 text-white">
							<label htmlFor="name">Name</label>
							<input
								onChange={inputHandle}
								type="name"
								name="name"
								id="name"
								placeholder="name"
								value={state.name}
								className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
							/>
						</div>
					)}
					<div className="flex flex-col gap-3 mb-3 text-white">
						<label htmlFor="email">Email</label>
						<input
							onChange={inputHandle}
							type="email"
							name="email"
							id="email"
							placeholder="email"
							value={state.email}
							className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
						/>
					</div>

					<div className="flex flex-col gap-3 mb-3 text-white">
						<label htmlFor="password">Password</label>
						<input
							onChange={inputHandle}
							type="password"
							name="password"
							id="password"
							placeholder="password"
							value={state.password}
							className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
						/>
					</div>

					<div>
						<button className="px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white">
							{displayStr}
						</button>
					</div>

					<div className="flex py-4 justify-between items-center px-3">
						<div className="w-[45%] h-[1px] bg-slate-500 "></div>
						<div className="w-[6%] text-center flex pb-1 px-1 text-white">
							or
						</div>
						<div className="w-[45%] h-[1px] bg-slate-500 "></div>
					</div>

					<div className="pb-4">
						<button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-red-500 w-full outline-none hover:bg-red-600 text-white">
							<span>
								<BiLogoGmail />
							</span>
							<span>{displayStr} with Gmail </span>
						</button>
					</div>

					<div className="pb-4">
						<button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-blue-500 w-full outline-none hover:bg-blue-600 text-white">
							<span>
								<FaFacebook />
							</span>
							<span>{displayStr} with Facebook </span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LogInModal;
