import { useMainContext } from "../../context/MainProvide.tsx";
import { TaskType, UserImageType } from "../../types";

const Image = ({ images }: { images?: UserImageType[] }) => {
	const {
		state: { typeState },
		setState,
		add_image,
	} = useMainContext();
	return (
		<div className="grid grid-cols-2 gap-2">
			{images?.map((item, i) => (
				<div
					onClick={() =>
						typeState === TaskType.BACKGROUND
							? setState((draft) => {
									draft.image = item.image_url;
								})
							: add_image(item.image_url)
					}
					key={i}
					className="w-full h-[90px] overflow-hidden rounded-md cursor-pointer"
				>
					<img className="w-full h-full" src={item.image_url} alt="" />
				</div>
			))}
		</div>
	);
};

export default Image;
