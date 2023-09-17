const Student = (data) => {
    const student = data?.student;
    return (
        <div className="student-card"
            data-id={student.Id}
            data-name={student.Name}>
            <img src={`../images/student/collection/${student.Id}.webp`}
                width='120' height='135'
                alt={student.Name} />
            <span className={`name ${student.Name.length > 12 ? 'small-text' : ''}`}>{student.Name}</span>
            <span className={`badge role ${student.SquadType}`}>
                <img src={`../images/ui/Role_${student.TacticRole}.png`}
                    width='22' height='22'
                    alt={student.TacticRole} />
            </span>
            <span className={`badge hover rarity rarity-${student.StarGrade}`}>
                <img src={`../images/ui/Common_Icon_Formation_Star_R${student.StarGrade}.png`}
                    width='22' height='22'
                    alt={`Start ${student.StarGrade}`} />
            </span>
            <span className={`badge hover attack-type ${student.BulletType}`}>
                <img src={`../images/ui/Type_Attack.png`}
                    width='15' height='15'
                    alt={`Start ${student.StarGrade}`} />
            </span>
            <span className={`badge hover defense-type ${student.ArmorType}`}>
                <img src={`../images/ui/Type_Defense.png`}
                    width='16' height='16'
                    alt={`Start ${student.StarGrade}`} />
            </span>
        </div>
    );
};

export default Student;