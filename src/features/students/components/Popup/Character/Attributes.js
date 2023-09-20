import { useState } from "react";
import t from "../../../i18n";
import _ from 'lodash';
import useStorage from "../../../hooks/useStorage";
import Stats from "./Stats";
import Configurable from "./Configurable";

const Attributes = ({ student }) => {
    const [storage, setStorage] = useStorage('schale_character_storage', {}),
        TerrainRender = (level) => {
            switch (level) {
                case 0:
                    return 'Ingame_Emo_AdaptresultD';
                case 1:
                    return 'Ingame_Emo_AdaptresultC';
                case 2:
                    return 'Ingame_Emo_AdaptresultB';
                case 3:
                    return 'Ingame_Emo_AdaptresultA';
                case 4:
                    return 'Ingame_Emo_AdaptresultS';
                case 5:
                    return 'Ingame_Emo_AdaptresultSS';
            }
        },
        [studentConfig, setStudentConfig] = useState(storage[student.Id] || {});

    return (
        <div className="attributes">
            <div className="row">
                <div className={`terrains floatRight`}>
                    <div className={`stat vertical terrain`}>
                        <img src={`${process.env.PUBLIC_URL}/images/ui/Terrain_Street.png`}
                            width='30' height='30'
                            alt={`Street`} />
                        <img src={`${process.env.PUBLIC_URL}/images/ui/${TerrainRender(student.StreetBattleAdaptation)}.png`}
                            width='30' height='30'
                            alt={`Adaptation ${student.StreetBattleAdaptation}`} />
                    </div>
                    <div className={`stat vertical terrain`}>
                        <img src={`${process.env.PUBLIC_URL}/images/ui/Terrain_Outdoor.png`}
                            width='30' height='30'
                            alt={`Outdoor`} />
                        <img src={`${process.env.PUBLIC_URL}/images/ui/${TerrainRender(student.OutdoorBattleAdaptation)}.png`}
                            width='30' height='30'
                            alt={`Adaptation ${student.OutdoorBattleAdaptation}`} />
                    </div>
                    <div className={`stat vertical terrain`}>
                        <img src={`${process.env.PUBLIC_URL}/images/ui/Terrain_Indoor.png`}
                            width='30' height='30'
                            alt={`Indoor`} />
                        <img src={`${process.env.PUBLIC_URL}/images/ui/${TerrainRender(student.IndoorBattleAdaptation)}.png`}
                            width='30' height='30'
                            alt={`Adaptation ${student.IndoorBattleAdaptation}`} />
                    </div>
                </div>
                <div className={`stat tactic-role ${student.TacticRole}`}>
                    <img src={`${process.env.PUBLIC_URL}/images/ui/Role_${student.TacticRole}.png`}
                        width='26' height='26'
                        alt={student.TacticRole} />
                    <span>{t(`TacticRole.${student.TacticRole}`)}</span>
                </div>
                <div className={`stat attack-type ${student.BulletType}`}>
                    <img src={`${process.env.PUBLIC_URL}/images/ui/Type_Attack.png`}
                        width='20' height='20'
                        alt={student.BulletType} />
                    <span>{t(`BulletType.${student.BulletType}`)}</span>
                </div>
                <div className={`stat defense-type ${student.ArmorType}`}>
                    <img src={`${process.env.PUBLIC_URL}/images/ui/Type_Defense.png`}
                        width='20' height='20'
                        alt={student.ArmorType} />
                    <span>{t(`ArmorType.${student.ArmorType}`)}</span>
                </div>
                <div className={`stat position ${student.Position}`}>
                    <span>{student.Position}</span>
                </div>
                <div className={`stat club ${student.Club}`}>
                    <img src={`${process.env.PUBLIC_URL}/images/schoolicon/School_Icon_${student.School?.toUpperCase()}_W.png`}
                        width='26' height='26'
                        alt={`${student.School}`} />
                    <span>{t(`Club.${student.Club}`)}</span>
                </div>
            </div>
            <div className="row">
                <Configurable {...{ student, studentConfig, setStudentConfig, storage, setStorage }} />
            </div>
            <div className="row">
                <Stats {...{ student, studentConfig }} />
            </div>
        </div>
    );
};

export default Attributes;