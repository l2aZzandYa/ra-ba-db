import { useState, useEffect } from "react";

const useStorage = (field, defaultValue) => {
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem(field);
        const initial = JSON.parse(saved);
        return initial || defaultValue;
    });
    useEffect(() => {
        localStorage.setItem(field, JSON.stringify(data))
    }, [field, data]);

    return [data, setData];
};

export default useStorage;

