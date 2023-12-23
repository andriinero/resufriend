export { EditorHeader };

function EditorHeader({
    resetStates,
    setDummyState,
}) {
    return (
        <div className="editor-section__container">
            <div className="editor-header">
                <h1>CV Maker</h1>
                <div className="editor-header__controls">
                    <img onClick={resetStates} className="editor-header__icon control-icon" src="../../public/text-box-remove.svg" alt="Clear Form Icon" />
                    <img onClick={setDummyState} className="editor-header__icon control-icon" src="../../public/text-box-plus.svg" alt="Clear Form Icon" />
                </div>
            </div>
        </div>
    );
}