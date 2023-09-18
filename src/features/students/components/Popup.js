import Character from "./Popup/Character";

const Popup = ({ student, setStudent }) => {
    const overlayStyles = student.Id ? {
        backgroundImage: `url(../images/background/${student.CollectionBG}.jpg)`,
        backgroundSize: 'cover'
    } : {};
    return (
        <div className={`modal ${student.Id ? 'opened' : ''}`} data-student-id={student.Id}>
            <div className='modal-popup'>
                <div className="modal-header"></div>
                <div className="modal-content">
                    <Character {...{ student }} />
                </div>
                <div className="modal-footer"></div>
            </div>
            <div className="modal-overlay" style={overlayStyles} onClick={() => setStudent({})}></div>
        </div>
    );
};

export default Popup;