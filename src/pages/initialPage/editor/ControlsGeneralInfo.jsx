export { ControlsGeneralInfo };

function ControlsGeneralInfo({
    firstName,
    lastName,
    email,
    phoneNumber,
    firstNameHandler,
    lastNameHandler,
    emailHandler,
    phoneNumberHandler,
}) {
    return (
        <div className="container-panel">
            <div className="container-panel-item">
                <input value={firstName} onChange={firstNameHandler} id="name" type="text" placeholder="First Name" />
                <input value={lastName} onChange={lastNameHandler} id="name" type="text" placeholder="Last Name" />
                <label htmlFor="name">Full Name</label>
            </div>
            <div className="container-controls">
                <input value={email} onChange={emailHandler} id="email" type="text" placeholder="email@example.com" />
                <label htmlFor="email">Email</label>
            </div>
            <div className="container-controls">
                <input value={phoneNumber} onChange={phoneNumberHandler} id="phone-number" type="text" placeholder="555-5555-5555" />
                <label htmlFor="phone-number">Phone Number</label>
            </div>
        </div>
    );
}