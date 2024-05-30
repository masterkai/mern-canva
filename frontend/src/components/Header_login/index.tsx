import { useAuthContext } from "../../pages";

const Header = () => {
	const { setState } = useAuthContext();
	return (
		<div className="bg-[#212223] shadow-md">
			<div className="w-[93%] m-auto py-3">
				<div className="flex justify-between items-center">
					<div className="w-[80px] h-[48px]">
						<img
							className="w-full h-full"
							src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
							alt="logo"
						/>
					</div>
					<div className="flex gap-4">
						<button
							onClick={() => {
								setState((draft) => {
									draft.isShow = true;
									draft.registerType = "signin";
								});
							}}
							className="py-2 w-[80px] text-center bg-teal-700 text-white transition-all hover:bg-teal-500 rounded-[5px] font-medium"
						>
							SingIn
						</button>
						<button
							onClick={() => {
								setState((draft) => {
									draft.isShow = true;
									draft.registerType = "signup";
								});
							}}
							className="py-2 w-[80px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium"
						>
							SingUp
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
