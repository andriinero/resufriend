export { ControlsPracticalExperience };

function ControlsPracticalExperience({
    companyName,
    positionTitle,
    mainResponsibilities,
    employmentPeriod,
    companyNameHandler,
    positionTitleHandler,
    mainResponsibilitiesHandler,
    employmentPeriodHandler,
}) {
    return (
        <div className="editor-section__container">
            <div className="input-panel__header">
                <div className="input-panel__title">
                    <img className="input-panel__title-icon" src="../../../public/practical-experience.svg" alt="General Information Icon" />
                    <h1 className="input-panel__title-h1">Practical Experience</h1>
                </div>
                <img className="input-panel__icon control-icon" src="../../../public/chevron-down.svg" alt="Expand Icon" />
            </div>
            <div className="input-panel">
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
            </div>
        </div>
    );
}