import { useRef, useEffect } from 'react';

const useOutsideClick = (func) => {
    const elmRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (elmRef.current && !elmRef.current.contains(e.target)) {
                func();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [elmRef]);

    return elmRef;
};

export default useOutsideClick;