import Image from "../Image";
import BarLoader from "react-spinners/BarLoader";
import toast from "react-hot-toast";
import api from "../../utils/api.ts";
import { FormEvent, useEffect, useState } from "react";
import { UserImageType } from "../../types";

const MyImages = () => {
	const [loader, setLoader] = useState(false);
	const [images, setImages] = useState<UserImageType[]>([]);
	const image_upload = async (e: FormEvent) => {
		if (e.target && (e.target as HTMLInputElement).files!.length > 0) {
			const formData = new FormData();
			formData.append("image", (e.target as HTMLInputElement).files![0]);

			try {
				setLoader(true);
				const { data } = await api.post("/api/add-user-image", formData);
				setImages([...images, data.userImage]);
				setLoader(false);
			} catch (error) {
				setLoader(false);
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				toast.error(error.response.data.message);
			}
		}
	};
	useEffect(() => {
		const get_images = async () => {
			try {
				const { data } = await api.get("/api/get-user-image");
				setImages(data.images);
			} catch (error) {
				console.log(error);
			}
		};
		get_images();
	}, []);
	return (
		<div>
			<div className="w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-md text-white mb-3">
				<label className="text-center cursor-pointer" htmlFor="image">
					Upload Image
				</label>
				<input
					readOnly={loader}
					onChange={image_upload}
					type="file"
					id="image"
					className="hidden"
				/>
			</div>
			{loader && (
				<div className="flex justify-center items-center mb-2">
					<BarLoader color="#fff" />
				</div>
			)}

			<div className="h-[80vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
				<Image images={images} />
			</div>
		</div>
	);
};

export default MyImages;
