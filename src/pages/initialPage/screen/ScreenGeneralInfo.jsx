export { ScreenGeneralInfo };

function ScreenGeneralInfo({
    firstName,
    lastName,
    email,
    phoneNumber,
}) {
    return (
        <div className="container-section-item">
            <h2>General Info</h2>
            <div className="output-field">
                <h4 className="placeholder-label">First Name:</h4>
                <span>{firstName}</span>
            </div>
            <div className="output-field">
                <h4 className="placeholder-label">Last Name:</h4>
                <span>{lastName}</span>
            </div>
            <div className="output-field">
                <h4 className="placeholder-label">Email:</h4>
                <span>{email}</span>
            </div>
            <div className="output-field">
                <h4 className="placeholder-label">Phone Number:</h4>
                <span>{phoneNumber}</span>
            </div>
        </div>
    );
}