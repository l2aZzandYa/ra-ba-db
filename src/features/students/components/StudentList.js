import Students from '../services/Students';
import Student from './Student';
import Filters from "../components/Filters";
import useStorage from "../hooks/useStorage";
import useStorageRaw from "../hooks/useStorageRaw";
import _ from 'lodash';

const StudentList = ({ setStudent }) => {
    const [data] = Students(),
        [conditions, setConditions] = useStorage('schale_filter_conditions', {}),
        owned = useStorageRaw('schale_character_owned', []),
        characters = useStorageRaw('schale_character_storage', []),
        styles = !_.isEmpty(data) ? {
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/background/${_.sample(data).CollectionBG}.jpg)`,
            backgroundAttachment: 'fixed'
        } : {};

    return (
        <section className='main' style={styles}>
            <Filters {...{ conditions, setConditions }} />
            <section className='grid'>
                {data?.filter(student => !conditions.name
                    || student.Name.toLowerCase().includes(conditions.name.toLowerCase()))
                    .filter(student => !conditions.type
                        || student.SquadType.toLowerCase() === conditions.type.toLowerCase())
                    .filter(student => !conditions.role
                        || student.TacticRole.toLowerCase() === conditions.role.toLowerCase())
                    .filter(student => !conditions.rarity
                        || characters?.[student.Id]?.rarity?.[0]?.[2] === parseInt(conditions.rarity)
                        || (!characters?.[student.Id]?.rarity?.[0] && student.StarGrade === parseInt(conditions.rarity)))
                    .filter(student => !conditions.attackType
                        || student.BulletType.toLowerCase() === conditions.attackType.toLowerCase())
                    .filter(student => !conditions.defenseType
                        || student.ArmorType.toLowerCase() === conditions.defenseType.toLowerCase())
                    .filter(student => !conditions.owned
                        || _.indexOf(owned, student.Id) !== -1)
                    .map((student, i) => <Student {...{ student, setStudent }} key={i} />)}
            </section>
        </section>
    );
};

export default StudentList;