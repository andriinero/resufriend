export { InputPanelPractical };

function InputPanelPractical({
    isExpanded,
    practicalExperience,
    practicalHandlerContainer,
    writePracticalExperienceHandler,
    toggleEditModeHandler,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    return (
        <div className={expandedClass}>
            <div className="input-panel__item">
                <label className="input-panel__label" htmlFor="school-name">Company Name</label>
                <div className="input-panel__field">
                    <input value={practicalExperience.name} onChange={practicalHandlerContainer.nameHandler} id="school-name" type="text" placeholder="Company Name" />
                </div>
            </div>
            <div className="input-panel__item">
                <label className="input-panel__label" htmlFor="title-of-study">Position Title</label>
                <div className="input-panel__field">
                    <input value={practicalExperience.title} onChange={practicalHandlerContainer.titleHandler} id="title-of-study" type="text" placeholder="Title" />
                </div>
            </div>
            <div className="input-panel__item">
                <label className="input-panel__label" htmlFor="date-of-study">Main Responsibilities</label>
                <div className="input-panel__field">
                    <input value={practicalExperience.mainResponsibilities} onChange={practicalHandlerContainer.mainResponsibilitiesHandler} id="date-of-study" type="text" placeholder="Responsibilities" />
                </div>
            </div>
            <div className="input-panel__item">
                <label className="input-panel__label" htmlFor="date-of-study">Employment Period</label>
                <div className="input-panel__field">
                    <input value={practicalExperience.period} onChange={practicalHandlerContainer.periodHandler} id="date-of-study" type="text" placeholder="01.01.2001 - 01.01.2002" />
                </div>
            </div>
            <div className="input-panel__controls">
                <button className="input-panel__button" onClick={toggleEditModeHandler} type="button">Cancel</button>
                <button className="input-panel__button" onClick={writePracticalExperienceHandler} type="button">Save</button>
            </div>
        </div>
    );
}