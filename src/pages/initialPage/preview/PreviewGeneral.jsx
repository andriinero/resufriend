export { PreviewGeneral };

function PreviewGeneral({
    firstName,
    lastName,
    email,
    phoneNumber,
    location,
}) {
    return (
        <div className="preview-header">
            <h1 className="preview-header__full-name">{firstName} {lastName}</h1>
            <div className="preview-header__misc-container">
                <div className="preview-header__misc-item">
                    {email && <img className="preview-header__icon" src="/email.svg" alt="Email Icon" />}
                    {email}
                </div>
                <div className="preview-header__misc-item">
                    {phoneNumber && <img className="preview-header__icon" src="/phone.svg" alt="Phone Icon" />}
                    {phoneNumber}
                </div>
                <div className="preview-header__misc-item">
                    {location && <img className="preview-header__icon" src="/map-marker.svg" alt="Map Marker Icon" />}
                    {location}
                </div>
            </div>
        </div>
    );
}