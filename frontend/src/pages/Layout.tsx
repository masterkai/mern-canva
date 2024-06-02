import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaFolderOpen, FaHome } from "react-icons/fa";
import { LuLayoutTemplate } from "react-icons/lu";

const Layout = () => {
	const navigate = useNavigate();

	const create = () => {
		navigate("/design/create", {
			state: {
				type: "create",
				width: 750,
				height: 500,
			},
		});
	};
	const [show, setShow] = useState(false);

	return (
		<div className="bg-[#18191b] min-h-screen w-full ">
			<Navbar create={create} setShow={setShow} show={show} />

			<div className="w-full flex mt-16">
				<Sidebar />

				<div className="ml-[300px] w-[calc(100%-300px)]">
					<div className="py-4 pr-4">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;

const Sidebar = () => {
	const { pathname } = useLocation();
	return (
		<div className="sidebar w-[300px] p-5 h-[calc(100vh-70px)] fixed bg-[#34569f]">
			<div className="px-2 py-2 flex justify-start gap-5 items-center mb-3">
				<img
					className="w-[40px] h-[40px] rounded-full"
					src="https://templates-flatlogic.herokuapp.com/sing-app/html5/demo/img/people/a5.jpg"
					alt="image"
				/>
				<div className="flex justify-center flex-col items-start">
					<span className="text-[#e0dddd] font-bold text-md">Kazi Ariyan</span>
					<span className="text-[#e0dddd] text-sm">Free</span>
				</div>
			</div>

			<ul className="px-4 flex flex-col gap-2">
				<li>
					<Link
						to="/"
						className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
							pathname === "/" ? "bg-[#ffffff26]" : ""
						} rounded-md `}
					>
						<span className="text-xl">
							<FaHome />
						</span>
						<span className="font-medium">Home</span>
					</Link>
				</li>

				<li>
					<Link
						to="/projects"
						className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
							pathname === "/projects" ? "bg-[#ffffff26]" : ""
						} rounded-md `}
					>
						<span className="text-xl">
							<FaFolderOpen />
						</span>
						<span className="font-medium">Projects</span>
					</Link>
				</li>

				<li>
					<Link
						to="/templates"
						className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
							pathname === "/templates" ? "bg-[#ffffff26]" : ""
						} rounded-md `}
					>
						<span className="text-xl">
							<LuLayoutTemplate />
						</span>
						<span className="font-medium">Templates</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

type NavbarProps = {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	create: () => void;
};

const Navbar = ({ setShow, show, create }: NavbarProps) => {
	return (
		<div className="bg-[#212223] shadow-md fixed left-0 top-0 w-full z-20">
			<div className="w-[93%] m-auto py-3">
				<div className="flex justify-between items-center">
					<div className="w-[80px] h-[48px]">
						<img
							className="w-full h-full"
							src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
							alt=""
						/>
					</div>

					<div className="flex gap-4 justify-center items-center relative">
						<button
							onClick={create}
							className="py-2 px-2 overflow-hidden text-center bg-[#8b3dff] text-white rounded-[3px] font-medium"
						>
							Create a Design
						</button>
						<div
							onClick={() => setShow((prev) => !prev)}
							className=" cursor-pointer"
						>
							<img
								className="w-[48px] h-[45px] rounded-full"
								src="https://templates-flatlogic.herokuapp.com/sing-app/html5/demo/img/people/a5.jpg"
								alt=""
							/>
						</div>

						{show && <Profile />}
					</div>
				</div>
			</div>
		</div>
	);
};

const Profile = () => {
	return (
		<div className="absolute top-[60px] right-0 w-[250px] bg-[#313030] p-3 border border-gray-700">
			<div className="px-2 py-2 flex justify-start gap-5 items-center">
				<img
					className="w-[40px] h-[40px] rounded-full"
					src="https://templates-flatlogic.herokuapp.com/sing-app/html5/demo/img/people/a5.jpg"
					alt=""
				/>
				<div className="flex justify-center flex-col items-start">
					<span className="text-[#e0dddd] font-bold text-md">Ariyan</span>
					<span className="text-[#e0dddd] font-bold text-md">
						ariyan@gmail.com
					</span>
				</div>
			</div>

			<ul className="text-[#e0dddd] font-semibold">
				<li>
					<Link className="p-2 cursor-pointer" to={""}>
						<span>Setting </span>
					</Link>
				</li>
				<li>
					<Link to={""} className="p-2 cursor-pointer">
						<span>Logout </span>
					</Link>
				</li>
			</ul>
		</div>
	);
};
