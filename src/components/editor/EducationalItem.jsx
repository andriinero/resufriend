export { EducationalItem };

function EducationalItem({
    schoolName,
    id,
    deleteEducationalHandler,
}) {
    return (
        <div className="editor-container__item">
            <h3 className="">
                {schoolName}
            </h3>
            <img className="editor-container__button control-icon" onClick={() => { deleteEducationalHandler(id) }} src="/delete.svg" alt="Delete Icon" />
        </div>
    );
}