export { EditorHeader };

function EditorHeader({
    resetStates,
    setDummyState,
}) {
    return (
        <div className="container-section-item">
            <div className="header-container">
                <h1>CV Maker</h1>
                <div className="header-controls">
                    <img onClick={resetStates} className="control-icon header-icon" src="../../public/text-box-remove.svg" alt="Clear Form Icon" />
                    <img onClick={setDummyState} className="control-icon header-icon" src="../../public/text-box-plus.svg" alt="Clear Form Icon" />
                </div>
            </div>
        </div>
    );
}