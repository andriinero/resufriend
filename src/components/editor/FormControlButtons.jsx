export { FormControlButtons };

function FormControlButtons({
    toggleAddModeHandler,
    saveButtonHandler,
}) {
    return (
        <div className="input-panel__controls">
            <button className="input-panel__button" onClick={toggleAddModeHandler} type="button">Cancel</button>
            <button className="input-panel__button" onClick={saveButtonHandler} type="button">Save</button>
        </div>
    );
}