import Header from "../components/Header_login";
import Hero from "../components/Hero";
import { ChangeEvent, useState } from "react";
import LogInModal from "../components/LogInModal";

const Index = () => {
	const [type, setType] = useState("");
	const [show, setShow] = useState(false);
	const [state, setState] = useState({
		name: "",
		email: "",
		password: "",
	});
	console.log(state);

	// inputHandler function accept the event object from form input element and then set the state
	const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="bg-[#18191b] min-h-screen w-full">
			<LogInModal
				type={type}
				show={show}
				setShow={setShow}
				inputHandle={inputHandle}
				state={state}
			/>
			<Header setShow={setShow} setType={setType} />
			<Hero setType={setType} setShow={setShow} />
		</div>
	);
};

export default Index;
