export { ControlsGeneralInfo };

function ControlsGeneralInfo() {
    return (
        <div className="container-panel">
            <div className="container-panel-item">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="First Name" />
                <input id="name" type="text" placeholder="Last Name" />
            </div>
            <div className="container-controls">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="email@example.com" />
            </div>
            <div className="container-controls">
                <label htmlFor="phone-number">Phone Number</label>
                <input id="phone-number" type="text" placeholder="555-5555-5555" />
            </div>
        </div>
    );
}