export { ControlsEducationalExperience };

function ControlsEducationalExperience() {
    return (
        <>
            <div className="container-panel">
                <div className="container-panel-item">
                    <label htmlFor="school-name">School Name</label>
                    <input id="school-name" type="text" placeholder="School Name" />
                </div>
                <div className="container-controls">
                    <label htmlFor="title-of-study">Title of Study</label>
                    <input id="title-of-study" type="text" placeholder="Title" />
                </div>
                <div className="container-controls">
                    <label htmlFor="date-of-study">Date of Study</label>
                    <input id="date-of-study" type="text" placeholder="01.01.2001-01.01.2002" />
                </div>
            </div>
        </>
    );
}