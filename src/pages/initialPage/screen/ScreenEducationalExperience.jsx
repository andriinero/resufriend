export { EducationalExperience };

function EducationalExperience({
    schoolName,
    titleOfStudy,
    dateOfStudy,
}) {
    return (
        <div className="screen-container">
            <h2 className="experience-header">Educational Experience</h2>
            <div className="experience-container">
                <div className="experience-item">
                    <h3 className="experience-item-header">{schoolName}</h3>
                    <p className="experience-item-title">{titleOfStudy}</p>
                    <p className="experience-item-date">{dateOfStudy}</p>
                </div>
            </div>
        </div>
    );
}