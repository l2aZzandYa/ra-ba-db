import { useState, useEffect } from "react";
import Localization from "../../../services/Localization";
import ReactSlider from 'react-slider';

const Attributes = ({ student, get, set }) => {
    const TerrainRender = (level) => {
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
        maxEquipmentLevel = 7,
        maxGearLevel = 2,
        maxStudentLevel = 85,
        [eqActive, setEqActive] = useState(),
        [gearActive, setGearActive] = useState(),
        [levels, setLevels] = useState([1, 85]),
        assignStudentStorage = (eq, category, type, tier) => {
            const current = get(student.Id) || {},
                toRemove = current?.[category]?.[eq]?.[type] === tier,
                object = {
                    ...{
                        equipment: {},
                        gear: {}
                    },
                    ...current
                };

            if (!object[category][eq]) {
                object[category][eq] = {};
            }
            object[category][eq][type] = toRemove ? null : tier;

            set(student.Id, object);
        };

    return (
        <div className="attributes">
            <div className="row">
                <div className={`terrains floatRight`}>
                    <div className={`stat vertical terrain`}>
                        <img src={`../images/ui/Terrain_Street.png`}
                            width='30' height='30'
                            alt={`Street`} />
                        <img src={`../images/ui/${TerrainRender(student.StreetBattleAdaptation)}.png`}
                            width='30' height='30'
                            alt={`Adaptation ${student.StreetBattleAdaptation}`} />
                    </div>
                    <div className={`stat vertical terrain`}>
                        <img src={`../images/ui/Terrain_Outdoor.png`}
                            width='30' height='30'
                            alt={`Outdoor`} />
                        <img src={`../images/ui/${TerrainRender(student.OutdoorBattleAdaptation)}.png`}
                            width='30' height='30'
                            alt={`Adaptation ${student.OutdoorBattleAdaptation}`} />
                    </div>
                    <div className={`stat vertical terrain`}>
                        <img src={`../images/ui/Terrain_Indoor.png`}
                            width='30' height='30'
                            alt={`Indoor`} />
                        <img src={`../images/ui/${TerrainRender(student.IndoorBattleAdaptation)}.png`}
                            width='30' height='30'
                            alt={`Adaptation ${student.IndoorBattleAdaptation}`} />
                    </div>
                </div>
                <div className={`stat tactic-role ${student.TacticRole}`}>
                    <img src={`../images/ui/Role_${student.TacticRole}.png`}
                        width='26' height='26'
                        alt={student.TacticRole} />
                    <span>{Localization(['TacticRole', student.TacticRole])}</span>
                </div>
                <div className={`stat attack-type ${student.BulletType}`}>
                    <img src={`../images/ui/Type_Attack.png`}
                        width='20' height='20'
                        alt={student.BulletType} />
                    <span>{Localization(['BulletType', student.BulletType])}</span>
                </div>
                <div className={`stat defense-type ${student.ArmorType}`}>
                    <img src={`../images/ui/Type_Defense.png`}
                        width='20' height='20'
                        alt={student.ArmorType} />
                    <span>{Localization(['ArmorType', student.ArmorType])}</span>
                </div>
                <div className={`stat position ${student.Position}`}>
                    <span>{student.Position}</span>
                </div>
                <div className={`stat club ${student.Club}`}>
                    <img src={`../images/schoolicon/School_Icon_${student.School?.toUpperCase()}_W.png`}
                        width='26' height='26'
                        alt={`${student.School}`} />
                    <span>{Localization(['Club', student.Club])}</span>
                </div>
            </div>
            <div className="row flex-one-line">
                <div className="stat vertical weapon">
                    <span>{student.WeaponType}</span>
                    <img src={`../images/weapon/${student.WeaponImg}.webp`}
                        width='160' height='41'
                        alt={`${student.WeaponType}`} />
                </div>
                <div className="stat equipments">
                    {student.Equipment ? student.Equipment.map((eq) => {
                        return (
                            <div className={`equipment ${eq} ${eqActive === eq ? 'active' : ''}`}>
                                <img src={`../images/equipment/icon/equipment_icon_${eq.toLowerCase()}_tier${get(student.Id)?.equipment?.[eq]?.current ? get(student.Id).equipment[eq].current : '1'}.webp`}
                                    width='64' height='64'
                                    className={!get(student.Id)?.equipment?.[eq]?.current ? 'no-equiped' : ''}
                                    onClick={(e) => eqActive !== eq ? setEqActive(eq) : setEqActive(null)}
                                    alt={eq} />
                                <div className="equipment-selection">
                                    <div className="current">
                                        <span>Current</span>
                                        {[...Array(maxEquipmentLevel)].map((x, i) =>
                                            <img src={`../images/equipment/icon/equipment_icon_${eq.toLowerCase()}_tier${i + 1}.webp`}
                                                width='64' height='64'
                                                className={`${get(student.Id)?.equipment?.[eq]?.current === (i + 1) ? 'selected' : ''}`}
                                                onClick={() => assignStudentStorage(eq, 'equipment', 'current', i + 1)}
                                                alt={eq} />
                                        )}
                                    </div>
                                    <div className="target">
                                        <span>Target</span>
                                        {[...Array(maxEquipmentLevel)].map((x, i) =>
                                            <img src={`../images/equipment/icon/equipment_icon_${eq.toLowerCase()}_tier${i + 1}.webp`}
                                                width='64' height='64'
                                                className={`${get(student.Id)?.equipment?.[eq]?.target === (i + 1) ? 'selected' : ''}`}
                                                onClick={() => assignStudentStorage(eq, 'equipment', 'target', i + 1)}
                                                alt={eq} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    }) : ''}
                    {student.Gear?.Name ? <div className={`equipment gear ${gearActive === student.Gear.Name ? 'active' : ''}`}>
                        <img src={get(student.Id)?.gear?.[student.Gear.Name]?.current ? `../images/gear/icon/${student.Id}.webp` : `../images/gear/empty.png`}
                            width='64' height='64'
                            className={!get(student.Id)?.gear?.[student.Gear.Name]?.current ? 'no-equiped' : ''}
                            onClick={(e) => gearActive !== student.Gear.Name ? setGearActive(student.Gear.Name) : setGearActive(null)}
                            alt={student.Gear.Name} />
                        <div className="equipment-selection">
                            <div className="current">
                                {[...Array(maxGearLevel)].map((x, i) =>
                                    <img src={`../images/gear/icon/${student.Id}.webp`}
                                        width='64' height='64'
                                        className={`${get(student.Id)?.gear?.[student.Gear.Name]?.current === (i + 1) ? 'selected' : ''}`}
                                        onClick={() => assignStudentStorage(student.Gear.Name, 'gear', 'current', i + 1)}
                                        alt={student.Gear.Name} />
                                )}
                            </div>
                        </div>
                    </div> : ''}
                </div>
            </div>
            <div className="row">
                <div className="student-level">
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="level-thumb"
                        trackClassName="level-track"
                        defaultValue={[1, maxStudentLevel]}
                        max={maxStudentLevel}
                        ariaLabel={['Current Level', 'Target Level']}
                        ariaValuetext={state => `Level ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        onChange={(value, i) => setLevels(value)}
                        pearling
                    />
                    <span>lv {levels[0]}</span>
                </div>
            </div>
            <div className="row"></div>
        </div>
    );
};

export default Attributes;