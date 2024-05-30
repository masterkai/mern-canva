import Header from "../components/Header_login";
import Hero from "../components/Hero";
import { ChangeEvent, createContext, FormEvent, useContext } from "react";
import LogInModal from "../components/LogInModal";
import { Updater, useImmer } from "use-immer";
import { AuthDataType, UserDataType } from "../types";
import api from "../utils/api";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface IndexContextProps {
	state: AuthDataType;
	setState: Updater<AuthDataType>;
	inputHandle: (e: ChangeEvent<HTMLInputElement>) => void;
	user_register: (e: FormEvent) => Promise<void>;
	user_login: (e: FormEvent) => Promise<void>;
}
const IndexContext = createContext<IndexContextProps | null>(null);

const Index = () => {
	const navigate = useNavigate();
	const initialState = {
		registerType: "",
		isShow: false,
		loading: false,
		userDATA: {
			name: "",
			email: "",
			password: "",
		},
	};
	const [state, setState] = useImmer<AuthDataType>(initialState);
	const { userDATA } = state;

	// inputHandler function accept the event object from form input element and then set the state
	const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
		setState((draft) => {
			if (e.target.name in draft.userDATA) {
				draft.userDATA[e.target.name as keyof UserDataType] = e.target.value;
			}
		});
	};

	const user_register = async (e: FormEvent) => {
		e.preventDefault();
		try {
			setState((draft) => {
				draft.loading = true;
			});
			const { data } = await api.post("/api/user-register", userDATA);
			setState((draft) => {
				draft.loading = false;
			});
			console.log(data);
			localStorage.setItem("canva_token", data.token);
			setState((draft) => {
				draft.userDATA = {
					name: "",
					email: "",
					password: "",
				};
			});
			// window.location.href = '/'
			navigate("/");
			setState((draft) => {
				draft.isShow = false;
			});
		} catch (error) {
			setState((draft) => {
				draft.loading = false;
			});
			const err = error as AxiosError;
			console.log(err.response?.data);
		}
	};

	const user_login = async (e: FormEvent) => {
		e.preventDefault();

		try {
			setState((draft) => {
				draft.loading = true;
			});
			const { data } = await api.post("/api/user-login", userDATA);
			setState((draft) => {
				draft.loading = false;
			});

			localStorage.setItem("canva_token", data.token);
			setState((draft) => {
				draft.userDATA = {
					name: "",
					email: "",
					password: "",
				};
			});

			window.location.href = "/";
			// navigate("/");
			// setState((draft) => {
			// 	draft.isShow = false;
			// });
		} catch (error) {
			setState((draft) => {
				draft.loading = false;
			});
			const err = error as AxiosError;
			console.log(err.response?.data);
		}
	};
	//end method
	const value = {
		state,
		setState,
		inputHandle,
		user_register,
		user_login,
	};

	return (
		<IndexContext.Provider value={value}>
			<div className="bg-[#18191b] min-h-screen w-full">
				<LogInModal />
				<Header />
				<Hero />
			</div>
		</IndexContext.Provider>
	);
};

export default Index;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	const context = useContext(IndexContext);
	if (!context) {
		throw new Error("useIndexContext must be used within an IndexProvider");
	}
	return context;
};
