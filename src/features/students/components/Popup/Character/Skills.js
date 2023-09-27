import React from 'react';
import useStorage from "../../../hooks/useStorage";
import _ from "lodash";
import t from "../../../i18n";
import ReactSlider from 'react-slider';
import { useState } from "react";

const Skills = ({ student }) => {
    const skills = ['ex', 'normal', 'passive', 'sub'],
        [storage, setStorage] = useStorage('schale_character_storage'),
        [studentConfig, setStudentConfig] = useState(storage[student.Id] || {}),
        updateStorage = (path, value) => {
            const object = _.set(studentConfig, path, value);
            setStudentConfig(object);
            storage[student.Id] = studentConfig;
            setStorage({ ...storage });
        };

    return (
        <div className="skills">
            {skills.map((key) => {
                const skill = _.find(student.Skills, function (s) { return s.SkillType === key; }),
                    max = skill.SkillType === 'ex' ? 5 : 10,
                    level = _.get(studentConfig, `skills.${skill.SkillType}.0`, 1),
                    skillDesc = skill.Desc.replace(
                        /<\?([0-9]{1})>/gm,
                        (tx, i) => {
                            const num = skill.Parameters?.[i - 1]?.[level - 1];
                            return `<strong>${num}</strong>`;
                        }
                    ).replace(
                        /<b:([a-zA-Z]+)>/gm,
                        (tx, i) => {
                            const buff = t(`BuffName.Buff_${i}`);
                            return `<span class="stat stat-buff">
                            <img src="${process.env.PUBLIC_URL}/images/buff/Buff_${i}.webp" alt="${buff}" width="19" height="22"/>
                            ${buff}
                            </span>`;
                        }
                    );
                return (
                    <React.Fragment>
                        <div className={`skill-wrapper ${key}-skill`}>
                            <div className="skill-basic">
                                <img src={`${process.env.PUBLIC_URL}/images/skill/${skill.Icon}.webp`}
                                    width={64} height={64} className="skill-icon"
                                    alt={skill.Name} />
                                <div className="skill-title">
                                    <div className="skill-name">{skill.Name}</div>
                                    <div className="skill-cost">
                                        <span>{t(`ui.student_skill_${skill.SkillType}`)}</span>
                                        <span>{skill.Cost ? `Cost: ${skill.Cost[level - 1]}` : ``}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-desc" dangerouslySetInnerHTML={{ __html: skillDesc }} />
                        </div>
                        <div className="skill-levels">
                            <ReactSlider
                                className="horizontal-slider"
                                thumbClassName="thumb"
                                trackClassName="track"
                                defaultValue={[1, { max }]}
                                max={max}
                                min="1"
                                ariaLabel={'Skill Lv.'}
                                ariaValuetext={state => `Skill Lv. ${state.valueNow}`}
                                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                onChange={(value) => updateStorage(`skills.${skill.SkillType}`, value)}
                                value={[_.get(studentConfig, `skills.${skill.SkillType}.0`, 1), _.get(studentConfig, `skills.${skill.SkillType}.1`, max)]}
                            />
                            <span className="stat">Lv.{_.get(studentConfig, `skills.${skill.SkillType}.0`, 1)}</span>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Skills;