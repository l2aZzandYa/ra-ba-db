import Students from '../services/Students';
import Student from './Student';
import Filters from "../components/Filters";
import useStorage from "../hooks/useStorage";
import useStorageRaw from "../hooks/useStorageRaw";
import _ from 'lodash';
import { useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';

const StudentList = ({ setStudent }) => {
    const [data] = Students(),
        [filterState, setFilterState] = useState(),
        [conditions, setConditions] = useStorage('schale_filter_conditions', {}),
        owned = useStorageRaw('schale_character_owned', []),
        characters = useStorageRaw('schale_character_storage', []),
        styles = {
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/background/BG_CraftChamber_Night.jpg)`,
            backgroundAttachment: 'fixed'
        },
        filterRef = useOutsideClick(() => setFilterState(null));

    return (
        <section className={`main ${filterState ? 'filter-active' : ''}`} style={styles}>
            <div className='filter-icon' onClick={() => setFilterState(true)}>
                <img src={`${process.env.PUBLIC_URL}/images/icon/schaledb-192.png`}
                    width={`40px`} height={`40px`} />
            </div>
            <Filters {...{ conditions, setConditions, filterRef }} />
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