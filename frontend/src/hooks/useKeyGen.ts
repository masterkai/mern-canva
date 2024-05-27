export const useKeyGen = () => {
    let curID = Math.floor(Math.random() * 100 + 1);
    const ids = new WeakMap();

    return {
        getKey: (object: NonNullable<unknown>): string => {
            if (!ids.has(object)) {
                ids.set(object, String(curID++));
            }
            return ids.get(object);
        },
    };
};