import { useState } from "react";

const useStorage = (field, defaultValue) => {
    const getLocalStorage = () => {
            const saved = localStorage.getItem(field);
            const initial = JSON.parse(saved);
            return initial || defaultValue;
        },
        [data, setData] = useState(() => getLocalStorage()),
        setValue = (value) => {
            setData(value);
            if (typeof window !== 'undefined') {
                localStorage.setItem(field, JSON.stringify(value));
            }
        };

    return [data, setValue];
};

export default useStorage;

