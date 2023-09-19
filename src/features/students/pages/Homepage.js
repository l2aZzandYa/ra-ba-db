import React from 'react';
import StudentList from "../components/StudentList";
import Popup from '../components/Popup';
import { useState } from "react";

export default function Homepage() {
    const [student, setStudent] = useState({});
    return (
        <React.Fragment>
            <StudentList {...{ setStudent }} />
            <Popup {...{ student, setStudent }} />
        </React.Fragment>
    );
}