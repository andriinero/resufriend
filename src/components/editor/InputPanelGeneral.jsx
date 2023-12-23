export { InputPanelGeneral };

function InputPanelGeneral({
    isExpanded,
    firstName,
    lastName,
    email,
    phoneNumber,
    location,
    firstNameHandler,
    lastNameHandler,
    emailHandler,
    phoneNumberHandler,
    locationHandler,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    return (
        <div className={expandedClass}>
            <div className="input-panel__item">
                <label className="input-panel__label" htmlFor="name">Full Name</label>
                <div className="input-panel__field">
                    <input value={firstName} onChange={firstNameHandler} id="name" type="text" placeholder="First Name" />
                    <input value={lastName} onChange={lastNameHandler} id="name" type="text" placeholder="Last Name" />
                </div>
            </div>
            <div className="input-panel__item">
                <label className="input-panel__label" htmlFor="email">Email</label>
                <div className="input-panel__field">
                    <input value={email} onChange={emailHandler} id="email" type="text" placeholder="email@example.com" />
                </div>
            </div>
            <div className="input-panel__item">
                <label className="input-panel__label" htmlFor="phone-number">Phone Number</label>
                <div className="input-panel__field">
                    <input value={phoneNumber} onChange={phoneNumberHandler} id="phone-number" type="text" placeholder="555-5555-5555" />
                </div>
            </div>
            <div className="input-panel__item">
                <label className="input-panel__label" htmlFor="phone-number">Location</label>
                <div className="input-panel__field">
                    <input value={location} onChange={locationHandler} id="phone-number" type="text" placeholder="Berlin, DE" />
                </div>
            </div>
        </div>
    );
}