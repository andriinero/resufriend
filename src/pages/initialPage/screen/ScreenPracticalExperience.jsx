export { PracticalExperience };

function PracticalExperience({
    companyName,
    positionTitle,
    mainResponsibilities,
    employmentPeriod,
}) {
    return (
        <div className="container-section-item">
            <h2>Practical Experience</h2>
            <div className="output-field">
                <h4 className="placeholder-label">Company Name:</h4>
                <span>{companyName}</span>
            </div>
            <div className="output-field">
                <h4 className="placeholder-label">Position Title:</h4>
                <span>{positionTitle}</span>
            </div>
            <div className="output-field">
                <h4 className="placeholder-label">Main Responsibilities:</h4>
                <span>{mainResponsibilities}</span>
            </div>
            <div className="output-field">
                <h4 className="placeholder-label">Employment Period:</h4>
                <span>{employmentPeriod}</span>
            </div>
        </div>
    );
}