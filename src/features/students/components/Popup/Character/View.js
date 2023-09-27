import { useState } from "react";
import useStorage from "../../../hooks/useStorage";
import t from "../../../i18n";
import Attributes from "./Attributes";
import _ from 'lodash';
import Switch from 'rc-switch';
import Skills from "./Skills";

const CharacterStats = ({ student }) => {
    const [state, setState] = useState(0),
        [storage, setStorage] = useStorage('schale_character_owned', []),
        allStates = [
            {
                index: 0,
                label: 'Arributes'
            },
            {
                index: 1,
                label: 'Skills'
            },
            {
                index: 2,
                label: 'Weapon'
            },
            {
                index: 3,
                label: 'Profile'
            }
        ],
        StatControlRender = () => {
            return allStates.map((item) => {
                return (
                    <li onClick={() => setState(item.index)}
                        className={state === item.index ? 'selected' : ''}>{item.label}</li>
                )
            });
        },
        StatRender = () => {
            switch (state) {
                case 1:
                    return <Skills {...{ student }} />;
                case 2:
                    return <Weapon {...{ student }} />;
                case 3:
                    return <Profile {...{ student }} />;
                default:
                    return <Attributes {...{ student }} />;
            }
        },
        Weapon = () => {
            return (
                <div className="weapon">
                    <div className="stat name">weapon</div>
                </div>
            );
        },
        Profile = () => {
            return (
                <div className="profile">
                    <div className="stat name">profile</div>
                </div>
            );
        };
    return (
        <div className="stats">
            <div className="row">
                <div className="school floatRight">
                    <img src={`${process.env.PUBLIC_URL}/images/schoolicon/School_Icon_${student.School?.toUpperCase()}_W.png`}
                        width='100' height='90'
                        alt={`${student.School}`} />
                </div>
                <div className="name">
                    <h1 className="studentName">{student.Name}</h1>
                    <Switch className="owned-switch"
                        checked={_.indexOf(storage, student.Id) !== -1}
                        onChange={(value) => setStorage(value ? _.union(storage, [student.Id]) : _.remove(storage, (val) => {
                            return val !== student.Id;
                        }))} />
                </div>
                <div className="stat rarity">
                    <img src={`${process.env.PUBLIC_URL}/images/ui/Common_Icon_Formation_Star_R${student.StarGrade}.png`}
                        width='22' height='22'
                        alt={`Star ${student.StarGrade}`} />
                </div>
                <div className={`stat squad-type ${student.SquadType}`}>
                    {t(`SquadType.${student.SquadType}`)}
                </div>
            </div>
            <div className="row">
                <ul className="stat-control flex-one-line">
                    <StatControlRender />
                </ul>
            </div>
            <div className="row">
                <StatRender />
            </div>
        </div>
    );
};

export default CharacterStats;