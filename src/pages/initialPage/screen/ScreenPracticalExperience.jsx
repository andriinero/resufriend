export { PracticalExperience };

function PracticalExperience({
    companyName,
    positionTitle,
    mainResponsibilities,
    employmentPeriod,
}) {
    return (
        <div className="screen-container">
            <h2 className="screen-container__header">Practical Experience</h2>
            <div className="experience">
                <div className="experience__item">
                    <h3 className="experience__item-header">{companyName}</h3>
                    <p className="experience__item-title">{positionTitle}</p>
                    <p className="experience__item-text">{mainResponsibilities}</p>
                    <p className="experience__item-date">{employmentPeriod}</p>
                </div>
            </div>
        </div>
    );
}