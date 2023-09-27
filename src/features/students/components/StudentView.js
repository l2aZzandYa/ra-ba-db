import { useSearchParams, useRouteLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Character from "./Popup/Character";
import _ from "lodash";

const StudentView = () => {
    const [searchParams] = useSearchParams(),
        [student, setStudent] = useState({}),
        students = useRouteLoaderData('students'),
        id = searchParams.get('id');

    useEffect(() => {
        setStudent(_.find(students, (item) => {
            return item.Id == id;
        }));
    }, [id, students]);

    if (student?.Id) {
        const styles = student.Id ? {
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/background/${student.CollectionBG}.jpg)`,
            backgroundSize: 'cover'
        } : {};
        return (
            <div className="view" data-student-id={student?.Id}>
                <div className="view-content">
                    <Character {...{ student }} />
                </div>
                <div className="view-overlay" style={styles}></div>
            </div>
        );
    }
};

export default StudentView;