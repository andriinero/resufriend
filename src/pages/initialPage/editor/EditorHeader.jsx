export { EditorHeader };

function EditorHeader({
    resetStates
}) {
    return (
        <div className="container-section-item">
            <h1>CV Maker</h1>
            <img onClick={resetStates} className="header-icon clear-form-button" src="../../public/backspace.svg" alt="Clear Form Icon"/>
        </div>
    );
}