export { ControlsEducationalExperience };

function ControlsEducationalExperience({
    schoolName,
    titleOfStudy,
    dateOfStudy,
    schoolNameHandler,
    titleOfStudyHandler,
    dateOfStudyHandler,
}) {
    return (
        <div className="container-panel">
            <div className="container-panel-item">
                <input value={schoolName} onChange={schoolNameHandler} id="school-name" type="text" placeholder="School Name" />
                <label htmlFor="school-name">School Name</label>
            </div>
            <div className="container-controls">
                <input value={titleOfStudy} onChange={titleOfStudyHandler} id="title-of-study" type="text" placeholder="Title" />
                <label htmlFor="title-of-study">Title of Study</label>
            </div>
            <div className="container-controls">
                <input value={dateOfStudy} onChange={dateOfStudyHandler} id="date-of-study" type="text" placeholder="01.01.2001-01.01.2002" />
                <label htmlFor="date-of-study">Date of Study</label>
            </div>
        </div>
    );
}