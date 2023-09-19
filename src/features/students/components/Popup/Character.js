import useStorage from "../../hooks/useStorage";
import CharacterStats from "./Character/View";

const Character = ({ student }) => {
    const [storage, setStorage] = useStorage('schale_character_storage', {});

    return (
        <div className="character">
            <div className="character-image">
                <img src={`../images/student/portrait/${student.Id}.webp`}
                    alt={student.Name} />
            </div>
            <div className="character-content">
                <CharacterStats {...{ student }} />
            </div>
        </div>
    );
};

export default Character;