export { EducationalItem };

function EducationalItem({
    schoolName,
    titleOfStudy,
    dateOfStudy,
    deleteEducationalHandler,
}) {
    return (
        <div className="input-panel__item">
            <div>
                {schoolName}
            </div>
            <img className="input-panel__icon control-icon" onClick={() => { deleteEducationalHandler(schoolName) }} src="../../public/delete.svg" alt="Delete Icon" />
        </div>
    );
}