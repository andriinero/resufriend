export { InputPanelEducational };

function InputPanelEducational({
    isExpanded,
    educationalExperience,
    educationalHandlerContainer,
    writeEducationalExperienceHandler,
    toggleEditModeHandler,

}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    return (
        <div className={expandedClass}>
            <div className="input-panel__item">
                <label className="input-panel__label" htmlFor="school-name">School Name</label>
                <div className="input-panel__field">
                    <input value={educationalExperience.schoolName} onChange={educationalHandlerContainer.schoolNameHandler} id="school-name" type="text" placeholder="School Name" />
                </div>
            </div>
            <div className="input-panel__item">
                <label className="input-panel__label" htmlFor="title-of-study">Title of Study</label>
                <div className="input-panel__field">
                    <input value={educationalExperience.titleOfStudy} onChange={educationalHandlerContainer.titleOfStudyHandler} id="title-of-study" type="text" placeholder="Title" />
                </div>
            </div>
            <div className="input-panel__item">
                <label className="input-panel__label" htmlFor="date-of-study">Date of Study</label>
                <div className="input-panel__field">
                    <input value={educationalExperience.dateOfStudy} onChange={educationalHandlerContainer.dateOfStudyHandler} id="date-of-study" type="text" placeholder="01.01.2001 - 01.01.2002" />
                </div>
            </div>
            <div className="input-panel__controls">
                <button className="input-panel__button" onClick={toggleEditModeHandler} type="button">Cancel</button>
                <button className="input-panel__button" onClick={writeEducationalExperienceHandler} type="button">Save</button>
            </div>
        </div>
    );
}