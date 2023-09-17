import useFetch from "../hooks/useFetch";

export default function Students() {
    const [data, setData] = useFetch(
        'https://raw.githubusercontent.com/lonqie/SchaleDB/main/data/en/students.min.json',
        null
    );

    return [data, setData];
}

