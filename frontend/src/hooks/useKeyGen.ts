export const useKeyGen = () => {
	let curID = Math.floor(Math.random() * 100 + 1);
	const ids = new WeakMap();

	return {
		getKey: (object: NonNullable<unknown>): string => {
			if (typeof object === "object" && object !== null) {
				if (!ids.has(object)) {
					ids.set(object, String(curID++));
				}
				return ids.get(object);
			} else {
				throw new Error("Invalid object");
			}
		},
	};
};
