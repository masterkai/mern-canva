type TemplateDesignProps = {
	type: string;
};
const TemplateDesign = ({ type }: TemplateDesignProps) => {
	return (
		<>
			{[1, 2, 3, 4].map((design, i) => (
				<div
					className={`group w-full rounded-md overflow-hidden bg-[#ffffff] cursor-pointer`}
				>
					<img
						className="w-full h-full"
						src="http://localhost:5173/canva.png"
						alt=""
					/>
				</div>
			))}
		</>
	);
};

export default TemplateDesign;
