export { EducationalExperience };

function EducationalExperience({
    schoolName,
    titleOfStudy,
    dateOfStudy,
}) {
    return (
        <div className="screen-container">
            {schoolName && <h2 className="screen-container__header">Educational Experience</h2>}
            <div className="experience">
                <div className="experience__item">
                    <h3 className="experience__item-header">{schoolName}</h3>
                    <p className="experience__item-title">{titleOfStudy}</p>
                    <p className="experience__item-date">{dateOfStudy}</p>
                </div>
            </div>
        </div>
    );
}