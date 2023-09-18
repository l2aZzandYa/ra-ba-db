import Students from '../services/Students';
import Student from './Student';
import Filters from "../components/Filters";
import useStorage from "../hooks/useStorage";

const StudentList = ({ setStudent }) => {
    const [data] = Students(),
        [conditions, setConditions] = useStorage('schale_filter_conditions', {});

    return (
        <section className='student-list'>
            <Filters {...{ conditions, setConditions }} />
            <section className='grid'>
                {data?.filter(student => !conditions.name || student.Name.toLowerCase().includes(conditions.name.toLowerCase()))
                    .filter(student => !conditions.type || student.SquadType.toLowerCase() === conditions.type.toLowerCase())
                    .filter(student => !conditions.role || student.TacticRole.toLowerCase() === conditions.role.toLowerCase())
                    .filter(student => !conditions.rarity || student.StarGrade === parseInt(conditions.rarity))
                    .filter(student => !conditions.attackType || student.BulletType.toLowerCase() === conditions.attackType.toLowerCase())
                    .filter(student => !conditions.defenseType || student.ArmorType.toLowerCase() === conditions.defenseType.toLowerCase())
                    .map((student, i) => <Student {...{ student, setStudent }} key={i} />)}
            </section>
        </section>
    );
};

export default StudentList;