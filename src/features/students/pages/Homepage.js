import StudentList from "../components/StudentList";
import Popup from '../components/Popup';
import { useState } from "react";

export default function Homepage() {
    const [student, setStudent] = useState({});
    return (
        <section className="main">
            <StudentList {...{ setStudent }} />
            <Popup {...{ student, setStudent }} />
        </section>
    );
}