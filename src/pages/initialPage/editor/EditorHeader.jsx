export { EditorHeader };

function EditorHeader({
    resetStates,
    generateDummyText,
}) {
    return (
        <div className="container-section-item">
            <h1>CV Maker</h1>
            <img onClick={resetStates} className="header-icon" src="../../public/text-box-remove.svg" alt="Clear Form Icon"/>
            <img onClick={generateDummyText} className="header-icon" src="../../public/text-box-plus.svg" alt="Clear Form Icon"/>
        </div>
    );
}