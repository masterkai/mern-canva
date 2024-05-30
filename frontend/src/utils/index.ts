import { jwtDecode } from "jwt-decode";

export const token_decode = (token: string | null) => {
	if (token) {
		const decode_data = jwtDecode(token);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		const exp_time = new Date(decode_data.exp * 1000);
		if (new Date() > exp_time) {
			localStorage.removeItem("canva_token");
			return "";
		} else {
			return decode_data;
		}
	} else {
		return "";
	}
};
// create id generator function
export function idGenerator() {
	return Math.floor(Math.random() * 100 + 1);
}
