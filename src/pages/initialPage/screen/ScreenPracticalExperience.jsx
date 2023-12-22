export { PracticalExperience };

function PracticalExperience({
    companyName,
    positionTitle,
    mainResponsibilities,
    employmentPeriod,
}) {
    return (
        <div className="screen-container">
            <h2 className="experience-header">Practical Experience</h2>
            <div className="experience-container">
                <div className="experience-item">
                    <h3 className="experience-item-header">{companyName}</h3>
                    <p className="experience-item-title">{positionTitle}</p>
                    <p className="experience-item-text">{mainResponsibilities}</p>
                    <p className="experience-item-date">{employmentPeriod}</p>
                </div>
            </div>
        </div>
    );
}