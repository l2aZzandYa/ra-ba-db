import { useState } from "react";
import Localization from "../../../services/Localization";
import Attributes from "./Attributes";

const CharacterStats = ({ student, storage, setStorage }) => {
    const [state, setState] = useState(0),
        get = (key) => {
            return storage[key];
        }, set = (key, value) => {
            const newStorage = { ...{}, ...storage };
            newStorage[key] = value;
            setStorage(newStorage);
        },
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
                    return <Skills />;
                case 2:
                    return <Weapon />;
                case 3:
                    return <Profile />;
                default:
                    return <Attributes {...{ student, get, set }} />;
            }
        },
        Skills = () => {
            return (
                <div className="skills">
                    <div className="stat name">skills</div>
                </div>
            );
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
                    <img src={`../images/schoolicon/School_Icon_${student.School?.toUpperCase()}_W.png`}
                        width='100' height='90'
                        alt={`${student.School}`} />
                </div>
                <div className="name">
                    <h1 className="studentName">{student.Name}</h1>
                </div>
                <div className="stat rarity">
                    <img src={`../images/ui/Common_Icon_Formation_Star_R${student.StarGrade}.png`}
                        width='22' height='22'
                        alt={`Star ${student.StarGrade}`} />
                </div>
                <div className={`stat squad-type ${student.SquadType}`}>
                    {Localization(['SquadType', student.SquadType])}
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