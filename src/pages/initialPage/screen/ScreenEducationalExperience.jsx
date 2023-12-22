export { EducationalExperience };

function EducationalExperience({
    schoolName,
    titleOfStudy,
    dateOfStudy,
}) {
    return (
        <div className="container-section-item">
            <h2>Educational Experience</h2>
            <div className="output-field">
                <h4 className="placeholder-label">School Name:</h4>
                <span>{schoolName}</span>
            </div>
            <div className="output-field">
                <h4 className="placeholder-label">Title of Study:</h4>
                <span>{titleOfStudy}</span>
            </div>
            <div className="output-field">
                <h4 className="placeholder-label">Date of Study:</h4>
                <span>{dateOfStudy}</span>
            </div>
        </div>
    );
}