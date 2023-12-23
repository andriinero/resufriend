export { ScreenGeneralInfo };

function ScreenGeneralInfo({
    firstName,
    lastName,
    email,
    phoneNumber,
}) { 
    return (
        <div className="screen-header">
            <h1 className="screen-header__full-name">{firstName} {lastName}</h1>
            <div className="screen-header__misc-container">
                <div className="screen-header__misc-item">
                    <img className="screen-header__icon" src="../../../public/email.svg" alt="Email Icon" />
                    {email}
                </div>
                <div className="screen-header__misc-item">
                    <img className="screen-header__icon" src="../../../public/phone.svg" alt="Email Icon" />
                    {phoneNumber}
                </div>
            </div>
        </div>
    );
}