export { ScreenGeneralInfo };

function ScreenGeneralInfo({
    firstName,
    lastName,
    email,
    phoneNumber,
}) { 
    return (
        <div className="screen-header">
            <h1 className="screen-full-name">{firstName} {lastName}</h1>
            <div className="container-misc-info">
                <div className="misc-info-item">
                    <img className="screen-icon" src="../../../public/email.svg" alt="Email Icon" />
                    {email}
                </div>
                <div className="misc-info-item">
                    <img className="screen-icon" src="../../../public/phone.svg" alt="Email Icon" />
                    {phoneNumber}
                </div>
            </div>
        </div>
    );
}