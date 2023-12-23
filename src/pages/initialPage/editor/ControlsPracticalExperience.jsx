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
        <div className="input-panel">
            <div className="input-panel__item">
                <input value={companyName} onChange={companyNameHandler} id="company-name" type="text" placeholder="Company Name" />
                <label htmlFor="company-name">Company Name</label>
            </div>
            <div className="input-panel__item">
                <input value={positionTitle} onChange={positionTitleHandler} id="position-title" type="text" placeholder="Title" />
                <label htmlFor="position-title">Position Title</label>
            </div>
            <div className="input-panel__item">
                <input value={mainResponsibilities} onChange={mainResponsibilitiesHandler} id="main-responsibilities" type="text" placeholder="Main Responsibilities" />
                <label htmlFor="main-responsibilities">Main Responsibilities</label>
            </div>
            <div className="input-panel__item">
                <input value={employmentPeriod} onChange={employmentPeriodHandler} id="date-of-study" type="text" placeholder="01.01.2001-02.02.2005" />
                <label htmlFor="date-of-study">Employment Period</label>
            </div>
        </div>
    );
}