import { useEffect, useState } from "react";
import api from "../utils/api";
import Image from "./Image";

const InitialImage = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const get_images = async () => {
			try {
				const { data } = await api.get("/api/design-images");
				setImages(data.images);
			} catch (error) {
				console.log(error);
			}
		};
		get_images();
	}, []);

	return <Image images={images} />;
};

export default InitialImage;
