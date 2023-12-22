export { ControlsPracticalExperience };

function ControlsPracticalExperience() {
    return (
        <>
            <div className="container-panel">
                <div className="container-panel-item">
                    <label htmlFor="company-name">Company Name</label>
                    <input id="company-name" type="text" placeholder="Company Name" />
                </div>
                <div className="container-controls">
                    <label htmlFor="position-title">Position Title</label>
                    <input id="position-title" type="text" placeholder="Title" />
                </div>
                <div className="container-controls">
                    <label htmlFor="main-responsibilities">Main Responsibilities</label>
                    <input id="main-responsibilities" type="text" placeholder="Main Responsibilities" />
                </div>
                <div className="container-controls">
                    <label htmlFor="date-of-study">Employment Period</label>
                    <input id="date-of-study" type="text" placeholder="01.01.2001-02.02.2005" />
                </div>
            </div>
        </>
    );
}