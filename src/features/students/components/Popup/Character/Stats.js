import _ from 'lodash';
import t from "../../../i18n";
import CharacterStats from '../../../services/CharacterStats';

const Stats = ({ student, studentConfig }) => {
    const studentStatList = ['MaxHP', 'AttackPower', 'DefensePower', 'HealPower',
        'AccuracyPoint', 'DodgePoint', 'CriticalPoint', 'CriticalChanceResistPoint',
        'CriticalDamageRate', 'CriticalDamageResistRate', 'StabilityPoint', 'Range',
        'OppressionPower', 'OppressionResist', 'HealEffectivenessRate', 'AmmoCount'],
        charStats = new CharacterStats(
            student,
            _.get(studentConfig, 'level.0', 1),
            _.get(studentConfig, 'rarity.0.0', 1)
        ),
        getBondStats = () => {
            let stat1 = 0, stat2 = 0;
            const level = _.get(studentConfig, 'bond', 1);
            for (let i = 1; i < Math.min(level, 50); i++) {
                if (i < 20) {
                    stat1 += student.FavorStatValue[Math.floor(i / 5)][0]
                    stat2 += student.FavorStatValue[Math.floor(i / 5)][1]
                } else if (i < 50) {
                    stat1 += student.FavorStatValue[2 + Math.floor(i / 10)][0]
                    stat2 += student.FavorStatValue[2 + Math.floor(i / 10)][1]
                }
            }
            return { [student.FavorStatType[0]]: stat1, [student.FavorStatType[1]]: stat2 }
        },
        calcStats = () => {
            const equipments = _.get(studentConfig, 'equipment', {}),
                gearLevel = _.get(studentConfig, `gear.${student.Gear.Name}.0`),
                weaponLevel = _.get(studentConfig, 'rarity.0.1'),
                bondStats = getBondStats();

            _.each(equipments, (levels, type) => {
                if (levels[0] >= 1) charStats.addEquipmentBonuses(type, levels[0]);
            });
            if (gearLevel) {
                charStats.addGearBonuses(student.Gear);
            }
            if (weaponLevel >= 1) {
                charStats.addWeaponBonuses(student.Weapon, (weaponLevel + 2) * 10);
            }
            for (let stat in bondStats) {
                charStats.addBuff(stat, bondStats[stat])
            }
        };

    if (student.Id) calcStats();

    return (
        <div className="row">
            <div className="stats-table">
                {studentStatList.map((stat) => {
                    return (
                        <div className="stat-line">
                            <img src={`../images/staticon/Stat_${stat}.png`}
                                alt={stat}
                                width={26} height={26} />
                            <span class="stat-label">{t(`Stat.${stat}`)}</span>
                            <span className="stat-value">{charStats.getTotal(stat)}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Stats;