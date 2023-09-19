import { useState } from "react";

const useStorageRaw = (field, defaultValue) => {
    const saved = localStorage.getItem(field);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
};

export default useStorageRaw;

