import SearchBar from "./Filters/StudentName";
import Type from "./Filters/SquadType";
import TacticRole from "./Filters/TacticRole";
import Rarity from "./Filters/Rarity";
import AttackType from "./Filters/AttackType";
import DefenseType from "./Filters/DefenseType";
import Owned from "./Filters/Owned";

const Filters = ({ conditions, setConditions }) => {
    const get = (key) => {
        return conditions[key];
    }, set = (key, value) => {
        const newConditions = { ...{}, ...conditions };
        newConditions[key] = value;
        setConditions(newConditions);
    };
    return (
        <section className="filters">
            <SearchBar {...{ get, set }} />
            <Owned {...{ get, set }} />
            <Type {...{ get, set }} />
            <TacticRole {...{ get, set }} />
            <Rarity {...{ get, set }} />
            <AttackType {...{ get, set }} />
            <DefenseType {...{ get, set }} />
        </section>
    )
}

export default Filters;