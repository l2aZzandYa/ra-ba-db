import SearchBar from "./Filters/StudentName";
import Type from "./Filters/SquadType";
import TacticRole from "./Filters/TacticRole";

const Filters = ({ conditions, setConditions }) => {
    const get = (key) => {
        return conditions[key];
    },
        set = (key, value) => {
            const newConditions = { ...{}, ...conditions };
            newConditions[key] = value;
            setConditions(newConditions);
        };
    return (
        <section className="filters">
            <SearchBar {...{ get, set }}/>
            <Type {...{ get, set }}/>
            <TacticRole {...{ get, set }}/>
        </section>
    )
}

export default Filters;