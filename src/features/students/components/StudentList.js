import Students from '../services/Students';
import Student from './Student';
import Filters from "../components/Filters";
import useStorage from "../hooks/useStorage";

const StudentList = () => {
    const [data] = Students(),
        [conditions, setConditions] = useStorage('schale_filter_conditions', {});

    return (
        <section className='student-list'>
            <Filters {...{ conditions, setConditions }} />
            <section className='grid'>
                {data?.filter(student => student.Name.toLowerCase().includes(conditions.name.toLowerCase()))
                    .filter(student => !conditions.type || student.SquadType.toLowerCase() === conditions.type.toLowerCase())
                    .filter(student => !conditions.role || student.TacticRole.toLowerCase() === conditions.role.toLowerCase())
                    .map((student, i) => <Student key={i} student={student} />)}
            </section>
        </section>
    );
};

export default StudentList;