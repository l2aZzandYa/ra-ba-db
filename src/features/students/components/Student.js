const Student = ({ key, student, setStudent }) => {
    return (
        <div className="student-card"
            onClick={() => setStudent(student)}
            data-id={student.Id}
            data-name={student.Name}>
            <img src={`${process.env.PUBLIC_URL}/images/student/collection/${student.Id}.webp`}
                width='120' height='135'
                alt={student.Name} />
            <span className={`name ${student.Name.length > 12 ? 'small-text' : ''}`}>{student.Name}</span>
            <span className={`badge role ${student.SquadType}`}>
                <img src={`${process.env.PUBLIC_URL}/images/ui/Role_${student.TacticRole}.png`}
                    width='22' height='22'
                    alt={student.TacticRole} />
            </span>
            <span className={`badge hover rarity rarity-${student.StarGrade}`}>
                <img src={`${process.env.PUBLIC_URL}/images/ui/Common_Icon_Formation_Star_R${student.StarGrade}.png`}
                    width='22' height='22'
                    alt={`Star ${student.StarGrade}`} />
            </span>
            <span className={`badge hover attack-type ${student.BulletType}`}>
                <img src={`${process.env.PUBLIC_URL}/images/ui/Type_Attack.png`}
                    width='15' height='15'
                    alt={`${student.BulletType}`} />
            </span>
            <span className={`badge hover defense-type ${student.ArmorType}`}>
                <img src={`${process.env.PUBLIC_URL}/images/ui/Type_Defense.png`}
                    width='16' height='16'
                    alt={`${student.ArmorType}`} />
            </span>
        </div>
    );
};

export default Student;