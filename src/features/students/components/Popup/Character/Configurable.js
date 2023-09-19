import { useState, useRef, useEffect } from "react";
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons';
import ReactSlider from 'react-slider';
import _ from 'lodash';

const Configurable = ({ student, studentConfig, setStudentConfig, storage, setStorage }) => {
    const maxEquipmentLevel = 7,
        maxGearLevel = 2,
        maxStudentLevel = 85,
        maxBondLevel = 50,
        [eqActive, setEqActive] = useState(),
        calcStarGrade = (starGrade) => {
            if (starGrade <= 5) {
                return [starGrade, null, starGrade];
            }

            return [starGrade > 5 ? 5 : starGrade, starGrade > 5 ? starGrade - 5 : null, starGrade];
        },
        updateStorage = (path, value) => {
            const object = _.set(studentConfig, path, value);
            setStudentConfig(object);
            storage[student.Id] = studentConfig;
            setStorage({ ...storage });
        },
        popupRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setEqActive(null);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popupRef]);

    return (
        <div className='configurable'>
            <div className='row flex-one-line'>
                <div className="stat vertical weapon">
                    <span>{student.WeaponType}</span>
                    <img src={`../images/weapon/${student.WeaponImg}.webp`}
                        width='160' height='41'
                        alt={`${student.WeaponType}`} />
                </div>
                <div className="stat equipments" ref={popupRef}>
                    {student.Equipment ? student.Equipment.map((eq) => {
                        return (
                            <div className={`equipment ${eq} ${eqActive === eq ? 'active' : ''}`}>
                                <img src={`../images/equipment/icon/equipment_icon_${eq.toLowerCase()}_tier${_.get(studentConfig, `equipment.${eq}.0`) || '1'}.webp`}
                                    width='64' height='64'
                                    className={!_.get(studentConfig, `equipment.${eq}.0`) ? 'no-equiped' : ''}
                                    onClick={(e) => eqActive !== eq ? setEqActive(eq) : setEqActive(null)}
                                    alt={eq} />
                                <div className="equipment-selection">
                                    <div className="current">
                                        <span>Current</span>
                                        {[...Array(maxEquipmentLevel)].map((x, i) =>
                                            <img src={`../images/equipment/icon/equipment_icon_${eq.toLowerCase()}_tier${i + 1}.webp`}
                                                width='64' height='64'
                                                className={`${_.get(studentConfig, `equipment.${eq}.0`) === (i + 1) ? 'selected' : ''}`}
                                                onClick={() => updateStorage(`equipment.${eq}.0`, i + 1)}
                                                alt={eq} />
                                        )}
                                    </div>
                                    <div className="target">
                                        <span>Target</span>
                                        {[...Array(maxEquipmentLevel)].map((x, i) =>
                                            <img src={`../images/equipment/icon/equipment_icon_${eq.toLowerCase()}_tier${i + 1}.webp`}
                                                width='64' height='64'
                                                className={`${_.get(studentConfig, `equipment.${eq}.1`) === (i + 1) ? 'selected' : ''}`}
                                                onClick={() => updateStorage(`equipment.${eq}.1`, i + 1)}
                                                alt={eq} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    }) : ''}
                    {student.Gear?.Name ? <div className={`equipment gear ${eqActive === student.Gear.Name ? 'active' : ''}`}>
                        <img src={studentConfig.gear?.[student.Gear.Name]?.[0] ? `../images/gear/icon/${student.Id}.webp` : `../images/gear/empty.png`}
                            width='64' height='64'
                            className={!_.get(studentConfig, `gear.${student.Gear.Name}.0`) ? 'no-equiped' : ''}
                            onClick={(e) => eqActive !== student.Gear.Name ? setEqActive(student.Gear.Name) : setEqActive(null)}
                            alt={student.Gear.Name} />
                        <div className="equipment-selection">
                            <div className="current">
                                <img src={`../images/gear/empty.png`}
                                    width='64' height='64'
                                    onClick={() => updateStorage(`gear.${student.Gear.Name}.0`, null)}
                                    alt="Empty" />
                                {[...Array(maxGearLevel)].map((x, i) =>
                                    <img src={`../images/gear/icon/${student.Id}.webp`}
                                        width='64' height='64'
                                        className={`${_.get(studentConfig, `gear.${student.Gear.Name}.0`) === (i + 1) ? 'selected' : ''}`}
                                        onClick={() => updateStorage(`gear.${student.Gear.Name}.0`, i + 1)}
                                        alt={student.Gear.Name} />
                                )}
                            </div>
                        </div>
                    </div> : ''}
                </div>
            </div>
            <div className='row'>
                <div className="student-level">
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="thumb"
                        trackClassName="track"
                        defaultValue={[1, maxStudentLevel]}
                        max={maxStudentLevel}
                        min="1"
                        ariaLabel={['Current Level', 'Target Level']}
                        ariaValuetext={state => `Level ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        onChange={(value, i) => updateStorage(`level`, value)}
                        value={[_.get(studentConfig, `level.0`, 1), _.get(studentConfig, `level.1`, 85)]}
                    />
                    <span className="stat">Lv.{_.get(studentConfig, `level.0`, 1)}</span>
                </div>
            </div>
            <div className='row'>
                <div className="student-bond-level">
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="thumb"
                        trackClassName="track"
                        defaultValue={[1, {maxBondLevel}]}
                        max={maxBondLevel}
                        min="1"
                        ariaLabel={'Current Level'}
                        ariaValuetext={state => `Bond Lv. ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        onChange={(value, i) => updateStorage(`bond`, value)}
                        value={_.get(studentConfig, `bond`, 1)}
                    />
                    <span className="stat">Bond Lv.{_.get(studentConfig, `bond`, 1)}</span>
                </div>
            </div>
            <div className='row'>
                <div className="stat">
                    <span>Current</span>
                    <Rating
                        className="rarity-selection"
                        stop={8}
                        onChange={(value) => updateStorage(`rarity.0`, calcStarGrade(value))}
                        initialRating={_.get(studentConfig, `rarity.0.2`, student.StarGrade)}
                        emptySymbol={[
                            <FontAwesomeIcon icon={faStarO} className="level" />,
                            <FontAwesomeIcon icon={faStarO} className="level" />,
                            <FontAwesomeIcon icon={faStarO} className="level" />,
                            <FontAwesomeIcon icon={faStarO} className="level" />,
                            <FontAwesomeIcon icon={faStarO} className="level" />,
                            <FontAwesomeIcon icon={faStarO} className="ue" />,
                            <FontAwesomeIcon icon={faStarO} className="ue" />,
                            <FontAwesomeIcon icon={faStarO} className="ue" />]}
                        fullSymbol={[
                            <FontAwesomeIcon icon={faStar} className="level" />,
                            <FontAwesomeIcon icon={faStar} className="level" />,
                            <FontAwesomeIcon icon={faStar} className="level" />,
                            <FontAwesomeIcon icon={faStar} className="level" />,
                            <FontAwesomeIcon icon={faStar} className="level" />,
                            <FontAwesomeIcon icon={faStar} className="ue" />,
                            <FontAwesomeIcon icon={faStar} className="ue" />,
                            <FontAwesomeIcon icon={faStar} className="ue" />]}
                    />
                </div>
                <div className="stat">
                    <span>Target</span>
                    <Rating
                        className="rarity-selection target"
                        stop={8}
                        onChange={(value) => updateStorage(`rarity.1`, calcStarGrade(value))}
                        initialRating={_.get(studentConfig, `rarity.1.2`, student.StarGrade)}
                        emptySymbol={[
                            <FontAwesomeIcon icon={faStarO} className="level" />,
                            <FontAwesomeIcon icon={faStarO} className="level" />,
                            <FontAwesomeIcon icon={faStarO} className="level" />,
                            <FontAwesomeIcon icon={faStarO} className="level" />,
                            <FontAwesomeIcon icon={faStarO} className="level" />,
                            <FontAwesomeIcon icon={faStarO} className="ue" />,
                            <FontAwesomeIcon icon={faStarO} className="ue" />,
                            <FontAwesomeIcon icon={faStarO} className="ue" />]}
                        fullSymbol={[
                            <FontAwesomeIcon icon={faStar} className="level" />,
                            <FontAwesomeIcon icon={faStar} className="level" />,
                            <FontAwesomeIcon icon={faStar} className="level" />,
                            <FontAwesomeIcon icon={faStar} className="level" />,
                            <FontAwesomeIcon icon={faStar} className="level" />,
                            <FontAwesomeIcon icon={faStar} className="ue" />,
                            <FontAwesomeIcon icon={faStar} className="ue" />,
                            <FontAwesomeIcon icon={faStar} className="ue" />]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Configurable;