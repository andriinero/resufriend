export { InputPanelPractical };

function InputPanelPractical({
    isExpanded,
    companyName,
    positionTitle,
    mainResponsibilities,
    employmentPeriod,
    companyNameHandler,
    positionTitleHandler,
    mainResponsibilitiesHandler,
    employmentPeriodHandler,
    writePracticalExperienceHandler,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    return (
        <div className={expandedClass}>
            <div className="input-panel__item">
                <label htmlFor="company-name">Company Name</label>
                <input value={companyName} onChange={companyNameHandler} id="company-name" type="text" placeholder="Company Name" />
            </div>
            <div className="input-panel__item">
                <label htmlFor="position-title">Position Title</label>
                <input value={positionTitle} onChange={positionTitleHandler} id="position-title" type="text" placeholder="Title" />
            </div>
            <div className="input-panel__item">
                <label htmlFor="main-responsibilities">Main Responsibilities</label>
                <input value={mainResponsibilities} onChange={mainResponsibilitiesHandler} id="main-responsibilities" type="text" placeholder="Main Responsibilities" />
            </div>
            <div className="input-panel__item">
                <label htmlFor="date-of-study">Employment Period</label>
                <input value={employmentPeriod} onChange={employmentPeriodHandler} id="date-of-study" type="text" placeholder="01.01.2001-02.02.2005" />
            </div>
            <button className="input-panel__save-button" onClick={writePracticalExperienceHandler} type="button">Save</button>
        </div>
    );
}