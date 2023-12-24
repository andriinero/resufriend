export { ScreenGeneralInfo };

function ScreenGeneralInfo({
    firstName,
    lastName,
    email,
    phoneNumber,
    location,
}) {
    return (
        <div className="screen-header">
            <h1 className="screen-header__full-name">{firstName} {lastName}</h1>
            <div className="screen-header__misc-container">
                <div className="screen-header__misc-item">
                    {email && <img className="screen-header__icon" src="/email.svg" alt="Email Icon" />}
                    {email}
                </div>
                <div className="screen-header__misc-item">
                    {phoneNumber && <img className="screen-header__icon" src="/phone.svg" alt="Phone Icon" />}
                    {phoneNumber}
                </div>
                <div className="screen-header__misc-item">
                    {location && <img className="screen-header__icon" src="/map-marker.svg" alt="Map Marker Icon" />}
                    {location}
                </div>
            </div>
        </div>
    );
}